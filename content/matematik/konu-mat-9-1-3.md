# Konu Anlatımı — 9.1.3 Sayı Kümeleri ve İşlem Özellikleri

Kaynak: MEB 9. Sınıf Matematik Ders Kitabı (1. Kitap) s. 57-66. **Her senaryoda 1 soru.**

**Sınavda ne beklenir:** "Kitabın kütlesi 8 ile 9 kg arasında; doğal sayı olabilir mi, rasyonel olabilir mi?" ya da "yüzücülerin dereceleri 57,32 ve 57,38; birinciyi belirlemek için hangi sıralama özelliği kullanılır?" gibi bağlamlı sorular; "A = {x | x = 2a, a ∈ Z} kümesi dört işleme göre kapalı mı?" tipinde **karşıt örnekle** çürütme; "iki rasyonel sayının ortalaması aralarındadır" tipinde kısa **ispat**. Kazanım: "farklı sayı kümelerinin özellikleri hakkında **muhakeme**": iddia → özellik adı → örnek ya da karşıt örnek.

---

## 1. Sayı kümeleri ve tarihçe
İnsanlar önce saymak için çentik attı (doğal sayılar); Antik Mısır 10'un katlarını hiyeroglifle, kesirleri **birim kesirlerle** yazdı; Babilliler **altmışlık konumsal** sistem kullandı (YBC 7289 tabletinde 1·60⁰ + 24·60⁻¹ + 51·60⁻² + 10·60⁻³ = 1,4142 ≈ √2). Her yeni küme bir ihtiyaçtan doğdu: borç → negatif (Z), paylaşım → kesir (Q), karenin köşegeni → irrasyonel (Q′).

**N ⊂ Z ⊂ Q ⊂ R**, Q′ ⊂ R, Q ∩ Q′ = ∅, Q ∪ Q′ = R.
Serbest düşme örneği (s. 58): x = ½·g·t²; Dünya'da 2 s'de 19,6 m (rasyonel), Ay'da 1,6·… gibi ondalık değerler; "74 m için kaç saniye?" sorusu t = √(2·74/3,7) = √40 → **irrasyonel** sayı gerekir. Yani gerçek yaşam problemleri farklı kümelere ihtiyaç duyar.

## 2. Sıralama özellikleri (N, Z, Q, R hepsinde geçerli)
Bu kümeler **sıralı kümelerdir**: herhangi iki eleman karşılaştırılabilir.

| Özellik | Cebirsel ifade |
|---|---|
| Karşılaştırılabilirlik | a ≤ b veya b ≤ a |
| Antisimetri | a ≤ b ve b ≤ a ise a = b |
| **Geçişme** | a ≤ b ve b ≤ c ise a ≤ c |
| Toplama ile korunma | a ≤ b ise a + c ≤ b + c |
| Pozitifle çarpma korur | a ≤ b ve c > 0 ise a·c ≤ b·c |
| Negatifle çarpma **yön değiştirir** | a ≤ b ve c < 0 ise a·c ≥ b·c |
| Çarpımın işareti | a·b > 0 ise a ve b aynı işaretli |

**Yüzme yarışı (s. 66):** 57,32 < 57,38 < 57,67 → birinci Barış; karşılaştırılabilirlik ve geçişme. Herkes 2 s geç bitirseydi sıralama değişmezdi: **toplama ile korunma**. 36-45 yaş: 57,88 < 59,43 ve 59,43 < 59,75 ise 57,88 < 59,75: **geçişme**.
**Bitkiler:** A > C ve B ≤ C ise B < A (geçişme).

## 3. Arada olma özelliği
Bir kümedeki herhangi iki sayı arasında **aynı kümeden** başka bir sayı varsa küme arada olma özelliğine sahiptir.

| Küme | Arada olma | Neden |
|---|---|---|
| N | **Yok** | 1 ile 2 arasında doğal sayı yok |
| Z | **Yok** | ardışık iki tam sayı arasında tam sayı yok |
| Q | **Var** | a < b ise (a + b)/2 aradadır; istenen sayıda rasyonel bulunur |
| R | **Var** | herhangi iki gerçek sayı arasında istenen sayıda gerçek sayı vardır |
| Q′ | Var | √2 ile √3 arasında √2,5 gibi |

**Kitap (8-9 kg arası):** Kütle doğal/tam sayı **olamaz** (8 ile 9 arasında tam sayı yok); rasyonel ya da gerçek **olabilir** (8,5; √72 gibi). Bu fark **arada olma** özelliğiyle ilgilidir.
**Mühendislik örneği:** köprü min ve max yük arasındaki her değeri taşır → arada olma.

### İspat örneği (19. Örnek, s. 61)
**Önerme:** a, b ∈ Q, b < a ise b < (a + b)/2 < a.
**Hipotez:** b < a. **Hüküm:** b < (a+b)/2 < a.
**İspat:** b < a → iki tarafa b ekle: 2b < a + b → b < (a+b)/2. b < a → iki tarafa a ekle: a + b < 2a → (a+b)/2 < a. İkisi birlikte: b < (a+b)/2 < a. ∎
**Sıra Sizde:** x < y ve m < n ise x + m < y + n: x < y → x + m < y + m; m < n → y + m < y + n; geçişme ile x + m < y + n. ∎

## 4. Dört işleme göre kapalılık
Bir kümedeki herhangi iki elemanla yapılan işlemin sonucu **yine o kümedeyse** küme o işleme göre **kapalıdır**. Kapalı **olmadığını** göstermek için **tek bir karşıt örnek** yeter.

| Küme | Toplama | Çıkarma | Çarpma | Bölme (0 hariç) |
|---|---|---|---|---|
| **N** | Kapalı | **Değil** (4 − 7 = −3 ∉ N) | Kapalı | **Değil** (4 ÷ 7 ∉ N) |
| **Z** | Kapalı | Kapalı | Kapalı | **Değil** (1 ÷ 2 ∉ Z) |
| **Q** | Kapalı | Kapalı | Kapalı | Kapalı |
| **R** | Kapalı | Kapalı | Kapalı | Kapalı |
| **Q′** | **Değil** (√2 + (−√2) = 0) | **Değil** (√2 − √2 = 0) | **Değil** (√2 · √2 = 2) | **Değil** (√8 ÷ √2 = 2) |

**21. Örnek:** A = {x | x = 2a, a ∈ Z} (çift tam sayılar). 2a + 2b = 2(a+b) ∈ A; 2a − 2b = 2(a−b) ∈ A; 2a·2b = 2(2ab) ∈ A → toplama, çıkarma, çarpmaya kapalı. Bölme: 2a/2b = a/b; a = 1, b = 3 için 1/3 ∉ A → **bölmeye kapalı değil** (karşıt örnek).
**Alıştırma:** {x | x = 2a + 1, a ∈ Z} (tek tam sayılar): 3 + 5 = 8 çift → toplamaya kapalı **değil**; 3·5 = 15 tek → çarpmaya kapalı; 5 − 3 = 2 → çıkarmaya kapalı değil; 3/5 → bölmeye kapalı değil.
**Beş irrasyonel sayı arası:** √2 ile √3 arasında √2,1; √2,2; √2,5; √2,8; √2,9 … sonsuz tane.

## 5. Önerme yazma ve muhakeme kalıbı
*"[Küme] [işlem]e göre kapalıdır / değildir; çünkü [genel gerekçe ya da karşıt örnek]."*
Kapalılığı **göstermek** için genel ifade (2a + 2b = 2(a+b)); **çürütmek** için tek örnek yeter. Sınavda ikisini karıştırma: "3 + 5 = 8 çift" demek tek sayıların toplamaya kapalı **olmadığını** gösterir; "3·5 = 15 tek" demek kapalı **olduğunu** göstermez, genel ispat gerekir: (2a+1)(2b+1) = 2(2ab + a + b) + 1 tek.

## 6. Sık yapılan hatalar
- Q′'nin çarpmaya kapalı olduğunu sanmak (√2·√2 = 2).
- N'nin çıkarmaya kapalı olduğunu sanmak.
- Bölmede 0'a bölmeyi unutup "Q bölmeye kapalı" derken "sıfır hariç" dememek.
- Arada olmayı yalnızca ortalama ile sınırlamak; sonsuz tane sayı vardır.
- Tek örnekle kapalılığı **ispatladığını** sanmak (tek örnek yalnızca çürütür).
- Negatifle çarpınca eşitsizliğin yönünü çevirmemek.

---

## Kendini sına
1. N, Z, Q, R için dört işleme kapalılık tablosunu ezbersiz doldur; her "değil" için karşıt örnek yaz.
2. B = {x | x = 5k, k ∈ Z} kümesi hangi işlemlere kapalıdır? Göster.
3. "İki irrasyonel sayının toplamı irrasyoneldir." Doğru mu? Karşıt örnek ver.
4. a < b ve c < 0 ise a·c ile b·c'yi karşılaştır; sayısal örnekle doğrula.
5. 2 ile 3 arasında üç rasyonel ve üç irrasyonel sayı yaz; hangi kümelerde "arada olma" yoktur, neden?
6. "Her çift tam sayının karesi çifttir" önermesini hipotez-hüküm-ispat biçiminde yaz.
