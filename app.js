/* 9. Sınıf Sınav Hazırlık — MEB konu soru dağılım tablolarından çalışma programı üretir. */
const APP_VERSION = "1.1.0";
const VARSAYILAN_SINAV = "1. Dönem 1. Yazılı"; // şu anki sınav dönemi

const KITAPLAR = {
  // tymm.meb.gov.tr ders kitabı sayfaları (9. sınıf)
  "biyoloji": "https://tymm.meb.gov.tr/kitap/36/biyoloji-dersi-9sinif-ders-kitabi",
  "cografya": "https://tymm.meb.gov.tr/kitap/37/cografya-dersi-9sinif-ders-kitabi",
  "din-kulturu": "https://tymm.meb.gov.tr/kitap/518/din-kulturu-ve-ahlak-bilgisi-9sinif-ders-kitabi",
};
const KITAP_LISTESI = "https://tymm.meb.gov.tr/ders-kitaplari/ortaogretim";
const ODSGM_TABLO = "https://odsgm.meb.gov.tr/www/1donem-konu-soru-dagilim-tablolari-2026-2027/icerik/1724/tr";
const OYSS_KILAVUZ = "https://odsgm.meb.gov.tr/www/ortak-yazili-sinav-sistemi-uygulama-kilavuzu-yayimlandi/icerik/1748/tr";

// Ders bazlı ek içerik (soru setleri, haritalar). Markdown dosyaları content/ altında.
const ICERIK = {
  "biyoloji": {
    "1. Dönem 1. Yazılı": [
      { ad: "Konu: Biyolojinin önemi ve dönüm noktaları", dosya: "content/biyoloji/konu-biy-9-1-1.md", kod: "BİY.9.1.1", konu: true },
      { ad: "Konu: Bilimin doğası ve bilimsel yöntem", dosya: "content/biyoloji/konu-biy-9-1-2.md", kod: "BİY.9.1.2", konu: true },
      { ad: "Konu: Canlıların ortak özellikleri", dosya: "content/biyoloji/konu-biy-9-1-4.md", kod: "BİY.9.1.4", konu: true },
      { ad: "Kazanım haritası ve 2 günlük program", dosya: "content/biyoloji/kazanim-haritasi.md" },
      { ad: "Gün 1 soru seti (12 soru)", dosya: "content/biyoloji/gun-1-soru-seti.md" },
      { ad: "Gün 1 cevap anahtarı", dosya: "content/biyoloji/gun-1-cevap-anahtari.md", anahtar: true },
      { ad: "Gün 2 soru seti (10 soru)", dosya: "content/biyoloji/gun-2-soru-seti.md" },
      { ad: "Gün 2 cevap anahtarı", dosya: "content/biyoloji/gun-2-cevap-anahtari.md", anahtar: true },
      { ad: "Deneme sınavı (40 dk, 6 soru)", dosya: "content/biyoloji/deneme-sinavi.md" },
      { ad: "Deneme cevap anahtarı", dosya: "content/biyoloji/deneme-cevap-anahtari.md", anahtar: true },
    ]
  }
};

let VERI = null;
const $app = document.getElementById("app");

/* ---------- yardımcılar ---------- */
const h = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
const GUNLER = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function tarihYaz(d) { return `${d.getDate()} ${AYLAR[d.getMonth()]} ${d.getFullYear()} ${GUNLER[d.getDay()]}`; }
function bugun() { const d = new Date(); d.setHours(0,0,0,0); return d; }
function gunFarki(a, b) { return Math.round((b - a) / 86400000); }
function tarihParse(s) { if (!s) return null; const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); }
function kaydet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function oku(k, vars) { try { const v = localStorage.getItem(k); return v === null ? vars : JSON.parse(v); } catch (e) { return vars; } }
function ortalama(a) { return a.length ? a.reduce((x,y)=>x+y,0)/a.length : 0; }

/* ---------- rota ---------- */
function rota() {
  const p = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  return { ders: p[0] || "", sinav: p[1] || "", sekme: p[2] || "program" };
}
function git(ders, sinav, sekme) {
  location.hash = "#/" + [ders, sinav, sekme].filter(Boolean).map(encodeURIComponent).join("/");
}
window.addEventListener("hashchange", ciz);

/* ---------- çizimler ---------- */
function ciz() {
  if (!VERI) return;
  const r = rota();
  const ders = VERI.dersler.find(d => d.id === r.ders);
  if (!ders) return cizAnaSayfa();
  const sinav = ders.sinavlar.find(s => s.ad === r.sinav) || ders.sinavlar.find(s => s.ad === VARSAYILAN_SINAV) || ders.sinavlar[0];
  if (r.sinav !== sinav.ad) return git(ders.id, sinav.ad, r.sekme);
  cizDers(ders, sinav, r.sekme);
  window.scrollTo(0, 0);
}

function sinavOzet(sinav) {
  const n = sinav.senaryolar.length;
  if (!n) return { n: 0 };
  const toplamlar = sinav.senaryolar.map((_, i) => sinav.kazanimlar.reduce((t, k) => t + (k.sorular[i] || 0), 0));
  const aktif = sinav.kazanimlar.filter(k => k.sorular.some(x => x > 0)).length;
  return { n, min: Math.min(...toplamlar), max: Math.max(...toplamlar), aktif, toplam: sinav.kazanimlar.length };
}

function cizAnaSayfa() {
  const t = bugun();
  const kartlar = VERI.dersler.map(d => {
    const s = d.sinavlar.find(x => x.ad === VARSAYILAN_SINAV) || d.sinavlar[0];
    const tarih = tarihParse(s.tarih);
    const kalan = tarih ? gunFarki(t, tarih) : null;
    let rozet = "";
    if (kalan === null) rozet = `<span class="rozet soluk">tarih bekleniyor</span>`;
    else if (kalan < 0) rozet = `<span class="rozet soluk">sınav geçti</span>`;
    else if (kalan === 0) rozet = `<span class="rozet kotu">SINAV BUGÜN</span>`;
    else if (kalan <= 3) rozet = `<span class="rozet kotu">${kalan} gün kaldı</span>`;
    else if (kalan <= 7) rozet = `<span class="rozet uyari">${kalan} gün kaldı</span>`;
    else rozet = `<span class="rozet">${kalan} gün kaldı</span>`;
    const oz = sinavOzet(s);
    const ilerleme = ilerlemeYuzde(d, s);
    return `<a class="kart ders-kart" href="#/${d.id}/${encodeURIComponent(s.ad)}/program">
      <div class="ad">${h(d.ad)}</div>
      <div class="meta">${h(s.ad)}${tarih ? " · " + tarih.getDate() + " " + AYLAR[tarih.getMonth()] : ""}</div>
      <div class="meta">${oz.n ? `${oz.aktif} kazanım · ${oz.min}-${oz.max} soru` : "tablo bekleniyor"}</div>
      <div class="ilerleme"><div style="width:${ilerleme}%"></div></div>
      <div class="meta">${rozet} <span style="float:right">%${ilerleme}</span></div>
    </a>`;
  }).join("");
  $app.innerHTML = `
    <h1>Hangi dersin sınavına çalışıyorsun?</h1>
    <p class="alt-baslik">Şu an <strong>${h(VARSAYILAN_SINAV)}</strong> dönemindeyiz. Dersi seç, sınavda hangi kazanımdan kaç soru geleceğini ve günlük programını gör.</p>
    <div class="izgara">${kartlar}</div>
    <h2>Nasıl çalışıyor?</h2>
    <div class="kart">
      <ol class="liste">
        <li>MEB her ders için <a href="${ODSGM_TABLO}" target="_blank" rel="noopener">konu soru dağılım tablosu</a> yayınlıyor. Sınav bu tablonun dışına çıkamaz.</li>
        <li>Okulun zümresi tablodaki senaryolardan birini seçiyor, sana söylenmiyor. Bu yüzden program <strong>bütün senaryoları</strong> kapsayacak şekilde kurulur. Senaryoyu öğrenirsen seçip daraltabilirsin.</li>
        <li>Sınav 40 dakika, açık uçlu; iki soruyu öğretmenlerin, kalanı MEB soru havuzu hazırlıyor (<a href="${OYSS_KILAVUZ}" target="_blank" rel="noopener">OYSS kılavuzu</a>).</li>
        <li>Her kazanım için üç adım: konu anlatımını oku → kendi cümlelerinle yarım sayfa özet yaz → soru çöz. Konu anlatımı ve sorular uygulamanın içinde; kitaba bakmak gerekmez. İşaretler bu cihazda saklanır.</li>
      </ol>
    </div>`;
}

function ilerlemeYuzde(ders, sinav) {
  const k = sinav.kazanimlar.filter(x => x.sorular.some(s => s > 0));
  if (!k.length) return 0;
  const toplam = k.length * 3;
  let yapilan = 0;
  for (const x of k) for (const g of ["oku","ozet","soru"]) if (oku(anahtar(ders, sinav, x, g), false)) yapilan++;
  return Math.round(100 * yapilan / toplam);
}
function anahtar(ders, sinav, k, g) { return `prog:${ders.id}:${sinav.ad}:${k.kod || k.metin.slice(0,40)}:${g}`; }

function oncelik(k, senaryoIdx) {
  // 1 = her senaryoda var ve ağır, 2 = her senaryoda var, 3 = bazı senaryolarda, 0 = bu sınavda yok
  const s = senaryoIdx === null ? k.sorular : [k.sorular[senaryoIdx] || 0];
  if (!s.some(x => x > 0)) return 0;
  const hepsinde = s.every(x => x > 0);
  if (hepsinde && ortalama(s) >= 2) return 1;
  if (hepsinde) return 2;
  return 3;
}
const ONCELIK_AD = { 1: "Öncelik 1 · her senaryoda, ağır", 2: "Öncelik 2 · her senaryoda", 3: "Öncelik 3 · bazı senaryolarda", 0: "Bu sınavda yok" };

function cizDers(ders, sinav, sekme) {
  const senaryoKey = `senaryo:${ders.id}:${sinav.ad}`;
  let senaryoIdx = oku(senaryoKey, null);
  if (senaryoIdx !== null && senaryoIdx >= sinav.senaryolar.length) senaryoIdx = null;
  const tarih = tarihParse(sinav.tarih);
  const t = bugun();
  const kalan = tarih ? gunFarki(t, tarih) : null;
  const oz = sinavOzet(sinav);
  const icerik = (ICERIK[ders.id] || {})[sinav.ad] || [];

  const sinavSekmeleri = ders.sinavlar.map(s => `<button class="sekme ${s.ad === sinav.ad ? "aktif" : ""}" data-sinav="${h(s.ad)}">${h(s.ad)}</button>`).join("");
  const senaryoSecenek = `<option value="">Bilmiyorum, hepsine çalış (önerilen)</option>` + sinav.senaryolar.map((s, i) => `<option value="${i}" ${senaryoIdx === i ? "selected" : ""}>${h(s)}</option>`).join("");

  let kalanYazi = "Tarih açıklanmadı";
  if (kalan !== null) kalanYazi = kalan < 0 ? "Sınav yapıldı" : kalan === 0 ? "BUGÜN" : `${kalan} gün`;

  const altSekmeler = [["program","Program"],["tablo","Soru dağılımı"],["kaynak","Kaynaklar"]];
  if (icerik.length) altSekmeler.splice(2, 0, ["sorular","Konu anlatımı ve sorular"]);

  $app.innerHTML = `
    <div class="kirinti"><a href="#/">Dersler</a> › ${h(ders.ad)}</div>
    <h1>${h(ders.ad)} <span style="color:var(--soluk);font-weight:500">· 9. Sınıf</span></h1>
    <div class="sekmeler">${sinavSekmeleri}</div>
    ${oz.n ? `
    <div class="kart">
      <div class="bilgi-satir">
        <div class="bilgi"><div class="etiket">Sınav tarihi</div><div class="deger">${tarih ? `${tarih.getDate()} ${AYLAR[tarih.getMonth()]} <small>${GUNLER[tarih.getDay()]}</small>` : "<small>açıklanmadı</small>"}</div></div>
        <div class="bilgi"><div class="etiket">Kalan</div><div class="deger">${kalanYazi}</div></div>
        <div class="bilgi"><div class="etiket">Soru sayısı</div><div class="deger">${oz.min === oz.max ? oz.min : oz.min + "-" + oz.max} <small>açık uçlu</small></div></div>
        <div class="bilgi"><div class="etiket">Kazanım</div><div class="deger">${oz.aktif} <small>/ ${oz.toplam} tabloda</small></div></div>
        <div class="bilgi"><div class="etiket">Süre</div><div class="deger">40 <small>dk</small></div></div>
      </div>
      <div class="secim-satir" style="margin-top:14px">
        <label for="senaryo">Okulun seçtiği senaryo:</label>
        <select id="senaryo">${senaryoSecenek}</select>
      </div>
      <div class="ilerleme"><div style="width:${ilerlemeYuzde(ders, sinav)}%"></div></div>
      <div style="font-size:13px;color:var(--soluk)">Hazırlık ilerlemesi: %${ilerlemeYuzde(ders, sinav)}</div>
    </div>
    <div class="sekmeler">${altSekmeler.map(([k, ad]) => `<button class="sekme ${sekme === k ? "aktif" : ""}" data-sekme="${k}">${ad}</button>`).join("")}</div>
    <div id="bolum"></div>` : `
    <div class="not">Bu sınav için MEB henüz soru dağılım tablosu yayınlamadı. Tablo çıkınca burada görünecek.</div>`}`;

  document.querySelectorAll("[data-sinav]").forEach(b => b.onclick = () => git(ders.id, b.dataset.sinav, "program"));
  document.querySelectorAll("[data-sekme]").forEach(b => b.onclick = () => git(ders.id, sinav.ad, b.dataset.sekme));
  const sel = document.getElementById("senaryo");
  if (sel) sel.onchange = () => { kaydet(senaryoKey, sel.value === "" ? null : Number(sel.value)); ciz(); };
  if (!oz.n) return;

  const $b = document.getElementById("bolum");
  if (sekme === "tablo") cizTablo($b, ders, sinav, senaryoIdx);
  else if (sekme === "sorular") cizSorular($b, ders, sinav, icerik);
  else if (sekme === "kaynak") cizKaynak($b, ders, sinav);
  else cizProgram($b, ders, sinav, senaryoIdx, kalan, icerik);
}

function konuDosyasi(icerik, k) {
  return (icerik || []).find(i => i.konu && i.kod && (k.kod === i.kod)) || null;
}

function cizTablo($b, ders, sinav, senaryoIdx) {
  const bas = sinav.senaryolar.map((s, i) => `<th class="say" ${senaryoIdx === i ? 'style="color:var(--ana)"' : ""}>S${i+1}</th>`).join("");
  let sonUnite = "";
  const satirlar = sinav.kazanimlar.map(k => {
    const o = oncelik(k, senaryoIdx);
    const unite = k.unite !== sonUnite ? k.unite : ""; sonUnite = k.unite;
    return `<tr class="oncelik-${o}">
      <td>${h(unite)}</td>
      <td>${k.konu ? `<div style="font-size:12px;color:var(--soluk)">${h(k.konu)}</div>` : ""}<span class="kod">${h(k.kod)}</span> ${h(k.metin)}</td>
      ${k.sorular.map((s, i) => `<td class="say ${s ? "var" : "yok"}" ${senaryoIdx === i ? 'style="background:var(--ana-acik)"' : ""}>${s || "–"}</td>`).join("")}
    </tr>`;
  }).join("");
  const toplam = sinav.senaryolar.map((_, i) => sinav.kazanimlar.reduce((t, k) => t + (k.sorular[i] || 0), 0));
  $b.innerHTML = `
    <p class="alt-baslik">Her sütun bir senaryo. Hücredeki sayı o kazanımdan kaç soru geleceği. Kırmızı çizgili satırlar her senaryoda olan ağır kazanımlar; gri satırlar bu sınavda sorulmayacak.</p>
    <div class="kart tablo-kaydir"><table>
      <thead><tr><th>Ünite</th><th>Kazanım</th>${bas}</tr></thead>
      <tbody>${satirlar}</tbody>
      <tfoot><tr><th></th><th>Toplam soru</th>${toplam.map(t => `<th class="say">${t}</th>`).join("")}</tr></tfoot>
    </table></div>`;
}

function programUret(sinav, senaryoIdx, kalan) {
  const kaz = sinav.kazanimlar.map(k => {
    const s = senaryoIdx === null ? k.sorular : [k.sorular[senaryoIdx] || 0];
    return { k, agirlik: ortalama(s), onc: oncelik(k, senaryoIdx) };
  }).filter(x => x.agirlik > 0);
  if (!kaz.length) return { gunler: [], kaz };
  // Son gün tekrar + deneme. En az 1 çalışma günü.
  let gunSayisi = kalan === null ? 7 : Math.max(0, kalan);
  const tekrarVar = gunSayisi >= 2;
  const calismaGun = Math.max(1, tekrarVar ? gunSayisi - 1 : gunSayisi);
  const toplamA = kaz.reduce((t, x) => t + x.agirlik, 0);
  const hedef = toplamA / calismaGun;
  const gunler = [];
  let bugunku = [], biriken = 0;
  for (const x of kaz) { // kitap sırası korunur
    bugunku.push(x); biriken += x.agirlik;
    if (biriken >= hedef * 0.95 && gunler.length < calismaGun - 1) { gunler.push(bugunku); bugunku = []; biriken = 0; }
  }
  if (bugunku.length) gunler.push(bugunku);
  while (gunler.length > calismaGun) { const son = gunler.pop(); gunler[gunler.length-1].push(...son); }
  return { gunler, kaz, tekrarVar, gunSayisi };
}

function cizProgram($b, ders, sinav, senaryoIdx, kalan, icerik) {
  const { gunler, kaz, tekrarVar, gunSayisi } = programUret(sinav, senaryoIdx, kalan);
  if (!kaz.length) { $b.innerHTML = `<div class="not">Seçili senaryoda soru çıkan kazanım yok.</div>`; return; }
  const t = bugun();
  let uyari = "";
  if (kalan !== null && kalan < 0) uyari = `<div class="not">Bu sınav yapıldı. Program yine de kazanımları gözden geçirmek için kullanılabilir.</div>`;
  else if (kalan === 0) uyari = `<div class="not">Sınav bugün. Yeni konu çalışma; sadece kendi özetlerini oku, en zayıf kazanımın kitap sayfalarına 15 dakika bak.</div>`;
  else if (kalan !== null && kalan <= 2) uyari = `<div class="not">Sınava ${kalan} gün var. Program sıkıştırıldı: önce her senaryoda olan kazanımlar, son gün tekrar ve deneme.</div>`;
  else if (kalan === null) uyari = `<div class="not ana">Sınav tarihi henüz açıklanmadı; program 7 güne göre kuruldu. Tarih çıkınca otomatik yeniden hesaplanır.</div>`;

  const gunHtml = gunler.map((liste, gi) => {
    const d = new Date(t); d.setDate(d.getDate() + gi);
    const gorevler = liste.map(({ k, onc }) => {
      const satir = ["oku","ozet","soru"].map(g => {
        const key = anahtar(ders, sinav, k, g);
        const v = oku(key, false);
        const ad = { oku: "Konuyu okudum", ozet: "Kendi özetimi yazdım", soru: "Soru çözdüm" }[g];
        return `<label class="${v ? "tamam" : ""}"><input type="checkbox" data-key="${h(key)}" ${v ? "checked" : ""}> ${ad}</label>`;
      }).join("");
      const sayi = senaryoIdx === null ? `${Math.min(...k.sorular)}-${Math.max(...k.sorular)} soru` : `${k.sorular[senaryoIdx]} soru`;
      const kd = konuDosyasi(icerik, k);
      const konuLink = kd
        ? `<a class="dugme ikincil" style="padding:6px 12px;font-size:13px" href="#/${ders.id}/${encodeURIComponent(sinav.ad)}/sorular" data-konu="${h(kd.dosya)}">📖 Konu anlatımını aç</a>`
        : `<span style="font-size:13px;color:var(--soluk)">Konu anlatımı henüz eklenmedi; ders kitabını kullan (Kaynaklar).</span>`;
      return `<div class="gorev oncelik-${onc}" style="padding-left:10px">
        <div style="flex:1">
          <div><span class="kod">${h(k.kod)}</span> <strong>${h(k.konu || k.unite)}</strong> <span class="rozet ${onc === 1 ? "kotu" : onc === 2 ? "uyari" : "iyi"}">${sayi}</span></div>
          <div style="font-size:14px;color:var(--soluk)">${h(k.metin)}</div>
          <div style="margin:8px 0 2px">${konuLink}</div>
          <div class="alt-gorev">${satir}</div>
        </div></div>`;
    }).join("");
    return `<div class="kart gun"><h3>${gi === 0 ? "Bugün" : gi === 1 ? "Yarın" : (gi+1) + ". gün"} <small>${tarihYaz(d)}</small></h3>${gorevler}</div>`;
  }).join("");

  let tekrarHtml = "";
  if (tekrarVar) {
    const d = new Date(t); d.setDate(d.getDate() + gunSayisi - 1);
    const key = `prog:${ders.id}:${sinav.ad}:_deneme`;
    const oz = sinavOzet(sinav);
    tekrarHtml = `<div class="kart gun"><h3>Sınavdan önceki gün <small>${tarihYaz(d)}</small></h3>
      <div class="gorev"><input type="checkbox" data-key="${h(key + ":tekrar")}" ${oku(key + ":tekrar", false) ? "checked" : ""}><label>Yanlış defteri: hatalı çıkan her soruyu bir kez daha, kitaba bakmadan cevapla.</label></div>
      <div class="gorev"><input type="checkbox" data-key="${h(key + ":deneme")}" ${oku(key + ":deneme", false) ? "checked" : ""}><label>Deneme: 40 dakika süre tut, ${oz.max} soruluk senaryoya göre çöz, puanla. En düşük kazanımı sınav sabahı 15 dk oku.</label></div>
    </div>`;
  }
  $b.innerHTML = `${uyari}
    <p class="alt-baslik">Kazanımlar kitap sırasıyla, ağırlığa göre günlere bölündü. Her kazanımda üç adım: konu anlatımını oku, kendi cümlelerinle yarım sayfa özet yaz, soru çöz. ${senaryoIdx === null ? "Soru sayısı aralığı senaryolar arasındaki en az ve en çok değer." : ""}</p>
    ${gunHtml}${tekrarHtml}
    <div class="not iyi" style="margin-top:14px"><strong>Sınav günü:</strong> önce tüm soruları oku, puanı yüksek olandan başla, her cevabı tam cümleyle yaz, hiçbir soruyu boş bırakma.</div>`;
  $b.querySelectorAll("input[data-key]").forEach(cb => cb.onchange = () => { kaydet(cb.dataset.key, cb.checked); ciz(); });
  $b.querySelectorAll("a[data-konu]").forEach(a => a.onclick = () => kaydet(`icerik:${ders.id}:${sinav.ad}`, a.dataset.konu));
}

async function cizSorular($b, ders, sinav, icerik) {
  const secili = oku(`icerik:${ders.id}:${sinav.ad}`, icerik[0].dosya);
  const dugme = i => `<button class="sekme ${i.dosya === secili ? "aktif" : ""}" data-dosya="${h(i.dosya)}">${i.anahtar ? "🔒 " : i.konu ? "📖 " : "✏️ "}${h(i.ad)}</button>`;
  const konular = icerik.filter(i => i.konu), digerleri = icerik.filter(i => !i.konu);
  $b.innerHTML = `
    <p class="alt-baslik">Önce konu anlatımını oku (kitaba gerek yok), sonra soru setini çöz, en son anahtarla puanla.</p>
    ${konular.length ? `<div style="font-size:12px;color:var(--soluk);text-transform:uppercase;letter-spacing:.04em">Konu anlatımları</div><div class="sekmeler" style="margin-top:6px">${konular.map(dugme).join("")}</div>` : ""}
    <div style="font-size:12px;color:var(--soluk);text-transform:uppercase;letter-spacing:.04em">Sorular ve anahtarlar</div><div class="sekmeler" style="margin-top:6px">${digerleri.map(dugme).join("")}</div>
    <div class="kart markdown" id="md">Yükleniyor…</div>`;
  $b.querySelectorAll("[data-dosya]").forEach(b => b.onclick = () => { kaydet(`icerik:${ders.id}:${sinav.ad}`, b.dataset.dosya); ciz(); });
  const bilgi = icerik.find(i => i.dosya === secili);
  const $md = document.getElementById("md");
  if (bilgi && bilgi.anahtar && !oku(`anahtar-ac:${secili}`, false)) {
    $md.innerHTML = `<p>Bu dosya cevap anahtarı. Soru setini bitirmeden açma.</p><button class="dugme" id="ac">Bitirdim, anahtarı aç</button>`;
    document.getElementById("ac").onclick = () => { kaydet(`anahtar-ac:${secili}`, true); ciz(); };
    return;
  }
  try {
    const txt = await (await fetch(secili)).text();
    $md.innerHTML = window.marked ? marked.parse(txt) : `<pre>${h(txt)}</pre>`;
  } catch (e) { $md.innerHTML = `<p>Dosya yüklenemedi.</p>`; }
}

function cizKaynak($b, ders, sinav) {
  const kitap = KITAPLAR[ders.id];
  $b.innerHTML = `<div class="kart">
    <h3 style="margin-top:0">Resmî kaynaklar</h3>
    <ul class="liste">
      <li><a href="${kitap || KITAP_LISTESI}" target="_blank" rel="noopener">${h(ders.ad)} 9. sınıf ders kitabı (MEB)</a> ${kitap ? "— PDF'i aç düğmesiyle kitabın tamamı indirilebilir." : "— listeden 9. sınıf " + h(ders.ad) + " kitabını seç."}</li>
      <li><a href="${ODSGM_TABLO}" target="_blank" rel="noopener">Konu soru dağılım tabloları (ÖDSGM, 2026-2027 1. dönem)</a></li>
      <li><a href="${OYSS_KILAVUZ}" target="_blank" rel="noopener">Ortak Yazılı Sınav Sistemi uygulama kılavuzu</a></li>
      <li><a href="https://odsgm.meb.gov.tr/www/ortak-yazili-sinav-sistemi039yle-ilgili-quotsikca-sorulan-sorularquot-rehberi-hazirlandi/icerik/1753/tr" target="_blank" rel="noopener">OYSS sıkça sorulan sorular</a></li>
    </ul>
    <h3>Sınav nasıl olacak?</h3>
    <ul class="liste">
      <li>40 dakika, açık uçlu veya açık uçlu + kısa cevaplı. Test yok.</li>
      <li>Okulun zümresi tablodaki senaryolardan birini seçer; soruların ikisini kendileri yazar, kalanı MEB soru havuzundan (kolay, orta, zor) gelir.</li>
      <li>Puanlama cevap anahtarındaki unsurlara göre yapılır; tam cümle, örnek ve gerekçe puan getirir.</li>
    </ul>
    <h3>Bu cihazdaki ilerleme</h3>
    <p style="font-size:14px;color:var(--soluk)">İşaretler yalnızca bu tarayıcıda saklanır. Sıfırlamak istersen:</p>
    <button class="dugme ikincil" id="sifirla">${h(ders.ad)} · ${h(sinav.ad)} ilerlemesini sıfırla</button>
  </div>`;
  document.getElementById("sifirla").onclick = () => {
    if (!confirm("Bu ders ve sınav için tüm işaretler silinsin mi?")) return;
    const on = `prog:${ders.id}:${sinav.ad}:`;
    Object.keys(localStorage).filter(k => k.startsWith(on)).forEach(k => localStorage.removeItem(k));
    ciz();
  };
}

/* ---------- başlat ---------- */
(async function () {
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) document.getElementById("yerel").hidden = false;
  document.getElementById("surum").textContent = "Sürüm " + APP_VERSION;
  try {
    VERI = await (await fetch("data/9-sinif.json")).json();
    document.getElementById("ust-sag").textContent = `${VERI.yil} · ${VERI.donem}. dönem · veri ${VERI.guncelleme}`;
    ciz();
  } catch (e) {
    $app.innerHTML = `<div class="not">Veri yüklenemedi: ${h(e.message)}</div>`;
  }
})();
