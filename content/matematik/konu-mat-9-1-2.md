# Konu Anlatımı — 9.1.2 Gerçek Sayı Aralıkları ve Küme Sembolleri

Kaynak: MEB 9. Sınıf Matematik Ders Kitabı (1. Kitap) s. 37-56. **Her senaryoda 1-2 soru.**

**Sınavda ne beklenir:** Gerçek yaşam durumu verilir (lunapark bilet şartları, iş ilanı yaş aralığı, boy sınırı, sıcaklık dayanıklılığı, bebek baş çevresi, şehir sıcaklıkları) ve senden aynı aralığı **dört gösterimle** (sözel, cebirsel temsil, sayı doğrusu, aralık ve küme gösterimi) yazman; iki aralığın **kesişim, birleşim, fark, tümleyenini** bulman; aralığı **mutlak değerli eşitsizlik** olarak (ya da tersini) yazman istenir. Kazanım: "aralıklarla ilgili işlemlerde **küme sembol ve işlemlerinden** yararlanabilme." Cevapta sembolleri doğru kullan.

---

## 1. Küme gösterimi ve semboller

- Küme büyük harfle; elemanlar **küme parantezi** içinde, aralarına virgül. **Listeleme:** A = {1, 2, 3, …, 9}. **Ortak özellik:** A = {x | x² < 100, x ∈ Z⁺} okunuşu: "A kümesi, x elemanlarından oluşur **öyle ki** x'in karesi 100'den küçük ve x pozitif tam sayı."
- Her eleman **bir kez** yazılır. Sonsuz kümeler (rasyonel sayılar gibi) listelenemez, ortak özellikle yazılır.

| Sembol | Anlamı | Örnek |
|---|---|---|
| ∈ / ∉ | elemanıdır / değildir | 2 ∈ A, 11 ∉ A |
| s(A) | eleman sayısı | s(A) = 9 |
| ∅ | boş küme | |
| A ∪ B | **birleşim**: A veya B'de olanlar | |
| A ∩ B | **kesişim**: hem A hem B'de olanlar | |
| A \ B | **fark**: A'da olup B'de olmayanlar | |
| A′ | **tümleyen**: evrensel kümede olup A'da olmayanlar | |
| A ⊂ B | **alt küme**: A'nın her elemanı B'de | N ⊂ Z ⊂ Q ⊂ R |

**Sayı kümeleri:** Doğal sayılar **N** = {0, 1, 2, …}; tam sayılar **Z** = {…, −2, −1, 0, 1, 2, …}; rasyonel **Q** = {a/b | a, b ∈ Z, b ≠ 0}; irrasyonel **Q′** (√2, π gibi); gerçek sayılar **R** = Q ∪ Q′. Evrensel küme aralık işlemlerinde **R**'dir.
Örnekler: 3'ün katı doğal sayılar K = {x | x = 3k, k ∈ N}; tek rakamlar T = {x | x = 2k + 1, 0 ≤ k ≤ 4, k ∈ N} = {1, 3, 5, 7, 9}; 10'dan küçük asallar A = {2, 3, 5, 7}; çift tam sayılar Ç = {x | x = 2k, k ∈ Z}.

## 2. Gerçek sayı aralıkları — dört gösterim

a < b olmak üzere (x ∈ R):

| Aralık adı | Aralık gösterimi | Cebirsel temsil | Küme gösterimi | Sayı doğrusu |
|---|---|---|---|---|
| **Açık aralık** | (a, b) | a < x < b | {x | a < x < b, x ∈ R} | a ve b içi boş nokta |
| **Kapalı aralık** | [a, b] | a ≤ x ≤ b | {x | a ≤ x ≤ b} | a ve b dolu nokta |
| **Yarı açık** | [a, b) | a ≤ x < b | | a dolu, b boş |
| **Yarı açık** | (a, b] | a < x ≤ b | | a boş, b dolu |
| Sağa sonsuz | (a, ∞) / [a, ∞) | x > a / x ≥ a | | sağa ok |
| Sola sonsuz | (−∞, b) / (−∞, b] | x < b / x ≤ b | | sola ok |
| Gerçek sayılar | (−∞, ∞) | x ∈ R | R | |

**Sonsuz (∞) tarafı daima açık (yuvarlak) parantezle yazılır.** Dâhil olan uç köşeli parantez ve dolu nokta; dâhil olmayan uç yuvarlak parantez ve boş nokta.

### Kitabın örnekleri
- Su sıvı: 0 °C ile 100 °C arası, uçlar hariç → (0, 100), 0 < x < 100. Su katı: x ≤ 0 → (−∞, 0].
- Çarpışan araba boyu en az 90, en fazla 130 cm → [90, 130], 90 ≤ x ≤ 130.
- Spor kulübü 150-170 cm (dâhil) → [150, 170]; yürüyüşte 250-300 kalori → [250, 300]; gümüş katı olmayan sıcaklık (erime 962 °C) → (962, ∞) ya da [962, ∞) (erime noktasında katı-sıvı birlikte; kitabın cevabı "katı hâlde bulunmadığı" için 962'den büyük).
- Ahmet'in boyu Leyla'dan (165) uzun, Ersin'den (178) kısa → (165, 178); "eşit veya uzun" → [165, 178).

### Hangi gösterim ne zaman kullanışlı?
Sayı doğrusu: görsel karşılaştırma ve kesişim bulma. Aralık: kısa yazım. Cebirsel: eşitsizlik çözme. Küme: ortak özellik belirtme, sonsuz küme. Sınavda "en kullanışlı" sorulursa birini seç ve **gerekçele**.

## 3. Aralıklarla işlemler (küme işlemleri)

Yöntem: iki aralığı **aynı sayı doğrusuna** çiz; kesişim = ortak kısım, birleşim = taralı tüm kısım, fark = birincide olup ikincide olmayan, tümleyen = R'den aralığı çıkar (uç noktaların açık/kapalı durumu **ters döner**).

**Örnek (kurslar, s. 47):** Resim kursu A = [10, 14], bale kursu B = [11, 13].
- A ∩ B = [11, 13] (ikisinin birlikte olduğu saatler).
- A ∪ B = [10, 14].
- A \ B = [10, 11) ∪ (13, 14] (Dilan Hanım'ın Sıla ile Kerem'i beklediği saatler).
- A′ = [0, 10) ∪ (14, 24] (günün Kerem'in kursta olmadığı saatleri; evrensel küme gün = [0, 24]).

**Örnek (beyaz eşya, s. 48):** Çamaşır makinesi A = [90, 100], buzdolabı B = [95, 186].
- A ∩ B = [95, 100]: 95 ≤ x ≤ 100. A ∪ B = [90, 186]. A \ B = [90, 95). B \ A = (100, 186]. A′ = (−∞, 90) ∪ (100, ∞): x < 90 veya x > 100.

**Örnek (bebek baş çevresi):** A = [34,8; 39,5], B = [35,3; 40,5] → A ∩ B = [35,3; 39,5]; A ∪ B = [34,8; 40,5]; A \ B = [34,8; 35,3); B \ A = (39,5; 40,5].

**Örnek (trafik hızı):** Şehir içi 0 ≤ x ≤ 50 → [0, 50]; şehir dışı [0, 90]; tüm yol boyunca sabit ve kurallara uygun hız → kesişim **[0, 50]**.

**Lunapark (s. 45):** Macera odası boy [140, 180], nefeskesen [150, 196], dönen şato [130, 190]. Macera odası alıp nefeskesen alamayan → [140, 180] \ [150, 196] = **[140, 150)**. Üçünü de alabilmek için → kesişim **[150, 180]**.

## 4. Mutlak değerli eşitsizlik ↔ aralık

|x − c| : x'in c'ye uzaklığı. **Merkez c, yarıçap d** düşün.

| Eşitsizlik | Anlamı | Aralık |
|---|---|---|
| |x − c| < d | c'ye uzaklığı d'den küçük | (c − d, c + d) |
| |x − c| ≤ d | | [c − d, c + d] |
| |x − c| > d | c'ye uzaklığı d'den büyük (dış bölge) | (−∞, c − d) ∪ (c + d, ∞) |
| |x − c| ≥ d | | (−∞, c − d] ∪ [c + d, ∞) |

**Aralıktan eşitsizliğe:** [a, b] verilirse merkez **c = (a + b)/2**, yarıçap **d = (b − a)/2** → |x − c| ≤ d.

### Kitap örnekleri
- 1915 Çanakkale Köprüsü 4608 m, esneme payı en fazla 2 m → |x − 4608| ≤ 2 → [4606, 4610].
- A bitkisi −11 ile 41 °C: c = 15, d = 26 → **|x − 15| ≤ 26**. B bitkisi −20 ile 10: c = −5, d = 15 → **|x + 5| ≤ 15**.
- Vücut sıcaklığı 37 ± 4 güvenli → |x − 37| < 4 → (33, 41). Akvaryum 25 °C, 3 °C'tan fazla fark olunca motor devreye girer → **|x − 25| > 3** → (−∞, 22) ∪ (28, ∞).
- "a ile 5 arasındaki fark 21/4'ten büyük" → |a − 5| > 21/4 → (−∞, −1/4) ∪ (41/4, ∞).
- Pilotaj boy 165-195 → |x − 180| ≤ 15. Futbol topu çevresi 68-70 cm → |x − 69| ≤ 1; kütle 410-450 g **olmayan** → |x − 430| > 20; basınç 0,6-1,1 atm → |x − 0,85| ≤ 0,25.
- A şehri ortalama 12, sapma en fazla 8 → |x − 12| ≤ 8 → [4, 20]. B şehri −2 ile 16 → c = 7, d = 9 → |x − 7| ≤ 9. Her iki şehre ait olabilecek sıcaklık: [4, 20] ∩ [−2, 16] = **[4, 16]**; yalnız A: (16, 20]; A veya B: [−2, 20].

## 5. Sık yapılan hatalar
- ∞ tarafına köşeli parantez koymak.
- Tümleyen alırken uç noktanın açık/kapalı durumunu **ters çevirmeyi** unutmak ([a, b]′ = (−∞, a) ∪ (b, ∞)).
- Fark işleminde sırayı karıştırmak (A \ B ≠ B \ A).
- |x − c| > d için tek aralık yazmak; **iki parçalı** birleşimdir.
- Merkez ve yarıçapı karıştırmak: c ortalamadır, d yarı farktır.
- "En az 150" için (150, …) yazmak; **en az / en fazla dâhil**dir → köşeli.
- Listeleme ile ortak özellik yazarken "öyle ki" çizgisini (|) ya da koşulu unutmak.

---

## Kendini sına
1. {x | x = 2k, 1 ≤ k ≤ 5, k ∈ N} kümesini listele; tek rakamlar kümesini ortak özellikle yaz.
2. "Boyu en az 140, en fazla 180 cm" ve "boyu 150'den uzun, 196'dan kısa" aralıklarını dört gösterimle yaz; kesişim, birleşim ve farkları bul.
3. A = [−2, 13] ve B = (−4, 10] için A ∩ B, A ∪ B, A \ B, B \ A, A′, B′ aralıklarını yaz.
4. [−6, 14] aralığını mutlak değerli eşitsizlik olarak yaz; |x + 3| > 5 eşitsizliğini aralık olarak yaz.
5. "Reçel fiyatı ortalamadan en fazla 20 TL sapsın" cümlesini, ortalama 180 TL ise eşitsizlik ve aralıkla yaz.
