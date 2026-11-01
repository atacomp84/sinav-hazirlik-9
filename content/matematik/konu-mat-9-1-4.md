# Konu Anlatımı — 9.1.4 Gerçek Sayıların İşlem Özelliklerini Cebirsel Olarak İfade Etme

Kaynak: MEB 9. Sınıf Matematik Ders Kitabı (1. Kitap) s. 67-81. **Her senaryoda 1-2 soru.**

**Sınavda ne beklenir:** Bir sözel önerme verilir ("b, a'dan büyük ve c, b'den büyükse a, c'den küçüktür"), senden **sembolik dille** yazman; ya da sembolik önermenin sözel karşılığı; bir önermenin **değili**; işlem özelliklerinin cebirsel ifadesi; **özdeşlik** kullanarak alan/çevre problemi (kare bahçe, oyun kartı, tuval); kısa **cebirsel ispat** (tek sayının karesi tek); bir ispatta **hatalı adımı bulma**. Kazanım "**analojik akıl yürütme**": tam sayılardaki özellikleri rasyonel, irrasyonel ve gerçek sayılara taşıman beklenir.

---

## 1. Önerme ve değili
- **Önerme:** kesin doğru ya da kesin yanlış hüküm bildiren ifade. "Doğal sayılar kümesi gerçek sayıların alt kümesidir" (doğru), "−1'in 12. kuvveti kendisine eşittir" (yanlış: 1), "3x = 5 ise x kaçtır?" (soru, **önerme değil**).
- **Değili (olumsuzu):** hüküm tersine çevrilir; doğru önermenin değili yanlış, yanlışın değili doğrudur. Semboller: = ↔ ≠, < ↔ ≥, > ↔ ≤, ∈ ↔ ∉, ⊂ ↔ ⊄.
  "5,4 ≤ 4,10" (yanlış) → değili "5,4 > 4,10" (doğru).

### Niceleyiciler ve bağlaçlar (Tablo 1.2)

| Sembol | Anlamı | Değili |
|---|---|---|
| ∀ | **her** | ∃ |
| ∃ | **bazı** (en az bir) | ∀ |
| ∧ | ve | ∨ |
| ∨ | veya | ∧ |
| ⊻ | ya da | |
| ⇒ | ise | |
| ⇔ | ancak ve ancak | |

Değil alırken: ∀ ↔ ∃, ∧ ↔ ∨ ve iç hüküm tersine çevrilir. "∀x ∈ R, x² ≥ 0" → değili "∃x ∈ R, x² < 0".

### Sözel ↔ sembolik (kitap 23. Uygulama)
| Sözel | Sembolik |
|---|---|
| Her a, b gerçek sayısı için a > b ise a − b > 0 | ∀a, b ∈ R, a > b ⇒ a − b > 0 |
| Sıfırdan farklı her a için a·b = 1 olacak bir b vardır | ∀a ∈ R, a ≠ 0 için ∃b ∈ R öyle ki a·b = 1 |
| a·b = 0 ancak ve ancak a = 0 veya b = 0 | a·b = 0 ⇔ (a = 0 ∨ b = 0) |
| a ≤ 0 ve a ≥ 0 ise a = 0 | (a ≤ 0 ∧ a ≥ 0) ⇒ a = 0 |
| a·b ≠ 0 ancak ve ancak a ≠ 0 ve b ≠ 0 | a·b ≠ 0 ⇔ (a ≠ 0 ∧ b ≠ 0) |
| a·b < 0 ise a ya da b negatiftir | a·b < 0 ⇒ (a < 0 ⊻ b < 0) |
| b, a'dan büyük ve c, b'den büyükse a, c'den küçüktür | ∀a, b, c ∈ R, (b > a ∧ c > b) ⇒ a < c |

Matematikte sembolik dil **kısa, kesin ve evrensel**dir; sözel ifade günlük anlatımda anlaşılır. Soru "hangisi kullanışlı" derse gerekçeli seç.

## 2. Gerçek sayılarda işlem özellikleri (cebirsel ifade, Kontrol Noktası s. 74)

| Özellik | Toplama | Çarpma |
|---|---|---|
| **Değişme** | ∀a, b ∈ R: a + b = b + a | a·b = b·a |
| **Birleşme** | (a + b) + c = a + (b + c) | (a·b)·c = a·(b·c) |
| **Birim (etkisiz) eleman** | a + 0 = 0 + a = a → **0** | a·1 = 1·a = a → **1** |
| **Ters eleman** | a + (−a) = 0 → **−a** | a ≠ 0 için a·(1/a) = 1 → **a⁻¹ = 1/a** |
| **Yutan eleman** | yok | a·0 = 0·a = 0 → **0** |
| **Dağılma** (çarpmanın toplama/çıkarma üzerine) | a·(b + c) = a·b + a·c ; (b + c)·a = b·a + c·a ; a·(b − c) = a·b − a·c | |

- **Çıkarma ve bölme**: değişme, birleşme, birim eleman, ters eleman **yoktur** (5 − 3 ≠ 3 − 5; (8 ÷ 4) ÷ 2 ≠ 8 ÷ (4 ÷ 2)). Toplama, çıkarma ve bölmenin yutan elemanı yoktur.
- **Çarpımın sıfır olması:** a·b = 0 ⇒ a = 0 veya b = 0. Denklem çözmenin temeli: (x − 4)(x + 2) = 0 → x = 4 veya x = −2.
- **Analoji:** Tam sayılarda gördüğün bu özellikler rasyonel, irrasyonel ve gerçek sayılarda da geçerlidir. Kitabın dikdörtgen örneği: kenarlar 4√2 ve 3√2 iken çevre 2(4√2 + 3√2) = 2·4√2 + 2·3√2 = 14√2 → **dağılma ve değişme** irrasyonel sayılarda da gözlenir. Çevre ifadeleri 2a + 2b = 2(a + b) = a + b + a + b birbirine eşittir (dağılma, değişme, birleşme).

## 3. Özdeşlikler
**Özdeşlik:** değişkenlerin **her** gerçek değeri için sağlanan eşitlik (denklem değil).

| Özdeşlik | Açılım | Geometrik temsil |
|---|---|---|
| İki terimin toplamının karesi | **(a + b)² = a² + 2ab + b²** | Kenarı (a + b) olan kare: a² + ab + ab + b² (dört bölge) |
| İki terimin farkının karesi | **(a − b)² = a² − 2ab + b²** | Kenarı a olan kareden: (a−b)² = a² − 2b(a−b) − b² |
| İki kare farkı | **(a − b)(a + b) = a² − b²** | |
| Yararlı | (a + b)² = (a − b)² + 4ab ; (a + b)² + (a − b)² = 2(a² + b²) | Kenarı (a+b) olan kare = 4 eş dikdörtgen (ab) + ortadaki kare (a−b)² |

Cebirsel türetme (a + b)² = (a + b)(a + b) = a·a + a·b + b·a + b·b = a² + 2ab + b² (dağılma, değişme).

### Örnekler
- x² + 8x + 16 = (x + 4)²; x² − 9/4 = (x − 3/2)(x + 3/2); 4x² − 12x + 9 = (2x − 3)²; 10² − 1² = 99 = 9·11.
- **23. Örnek:** Kare alan A = x², B = 2·4 = 8, C = 32x; A + B = C → x² + 8 = 32x → x² − 32x + 8 = 0? (Kitap örneğinde sayılar x² − 4√2·x + 8 = (x − 2√2)² = 0 biçiminde seçilmiştir → x = 2√2 cm.) Çarpım sıfırsa çarpanlardan biri sıfırdır.
- **Bahçe (26. Uygulama):** 15,75² − 14,25² = (15,75 − 14,25)(15,75 + 14,25) = 1,5·30 = **45 m²** → 8100/45 = **180 TL/m²**. 15,75² − 11,25² = 4,5·27 = 121,5 m² → 19 440/121,5 = **160 TL/m²** → 2. teklif daha ucuz.
- **Tuval (24. Örnek):** Alan = 9/16 + 6/5 + 16/25 = (3/4)² + 2·(3/4)(4/5) + (4/5)² = (3/4 + 4/5)² → kenar 3/4 + 4/5 = **31/20 dm**.
- **Alıştırma 3:** a = −√45 (toplama tersi), b = 12/√5 (çarpma tersi) → a² + 2ab + b² = (a + b)² = (−3√5 + 12√5/5)² = (−15√5/5 + 12√5/5)² = (−3√5/5)² = 45/25 = **9/5**.
- **Alıştırma 5:** x = 4026, y = 2374 → x² − 2xy + y² ya da benzeri → (x − y)² = 1652² biçiminde kısalt (özdeşlik işlemi kolaylaştırır).

## 4. İspat (hipotez → hüküm → adımlar)
**22. Örnek:** "Her tek doğal sayının karesi tektir." Sembolik: ∀x ∈ N, x tek ⇒ x² tek.
Hipotez: x tek → x = 2k + 1 (k ∈ N). Hüküm: x² tek. İspat: x² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 → çift + 1 = tek. ∎
**Sıra Sizde:** her çift tam sayının karesi çift: x = 2k → x² = 4k² = 2(2k²) çift. ∎
**Alıştırma 2:** "Tabanı 1'den büyük üslü ifadede kuvvet arttıkça değer artar": ∀a > 1, m < n ⇒ aᵐ < aⁿ. İspat: aⁿ − aᵐ = aᵐ(aⁿ⁻ᵐ − 1); a > 1 ve n − m > 0 → aⁿ⁻ᵐ > 1 → fark pozitif. ∎

### İspatta hatalı adım bulma (Ölçme 11. soru)
x < y ve z < t ise x − t < y − z. 1. adım: x < y → x + t < y + t ✓ (toplama ile korunma). 2. adım: z < t → −t < −z ✓ (negatifle çarpma yön değiştirir: kitapta "a ≤ b ve c ≥ 0 ise ac ≤ bc" özelliği kullanıldığı yazılmış; −1 negatif olduğundan **bu gerekçe hatalıdır**, sonuç doğru olsa da adım yanlış gerekçelendirilmiştir → cevap **2. adım**). Sınavda her adımda kullanılan **özelliğin doğru özellik** olup olmadığına bak.

## 5. Sık yapılan hatalar
- (a + b)² = a² + b² yazmak (**2ab** unutulur).
- Özdeşlik ile denklemi karıştırmak: özdeşlik her x için, denklem belirli x için doğrudur.
- Çıkarmada değişme özelliği var sanmak.
- Toplamanın birim elemanını 1, çarpmanınkini 0 yazmak (tersi).
- ∀'ın değilini yine ∀ yazmak; **∃** olur.
- "ya da" (⊻) ile "veya" (∨) karıştırılır: ya da ikisi birden olamaz.
- İspatta hipotezi kullanmadan hükmü varsaymak.

---

## Kendini sına
1. Toplama ve çarpmanın altı özelliğini cebirsel yaz; çıkarma ve bölmede hangilerinin olmadığını örnekle göster.
2. "Her gerçek sayının karesi negatif değildir" ve "bazı rasyonel sayıların karesi 2'dir" önermelerini sembolik yaz; değillerini al; doğruluk değerlerini belirt.
3. (2x + 3)², (x − 5)², (3a − 2b)(3a + 2b) açılımlarını yaz; 51² − 49² ve 103·97'yi özdeşlikle hesapla.
4. Kenarı 12,5 m kare bahçeden kenarı 7,5 m kare havuz çıkarılınca kalan alanı özdeşlikle bul.
5. "İki tek tam sayının toplamı çifttir" önermesini hipotez-hüküm-ispat ile göster.
