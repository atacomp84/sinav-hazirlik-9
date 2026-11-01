# 9. Sınıf Sınav Hazırlık

MEB ÖDSGM'nin yayınladığı **konu soru dağılım tablolarına** dayanarak, her ders ve yazılı için
kazanım kazanım çalışma programı üreten küçük bir web uygulaması. Sunucu gerektirmez; tek bir
statik sayfadır.

## Nasıl çalışır

1. `data/9-sinif.json` — ÖDSGM tablolarından (xlsx) çıkarılan veri: ders → sınav → senaryolar → kazanımlar ve soru sayıları, sınav tarihleri (OYSS uygulama takvimi).
2. `app.js` — ders ve sınav seçimi, senaryo seçimi, öncelik hesabı, kalan güne göre günlük program, ilerleme işaretleri (`localStorage`), soru setleri (Markdown).
3. `content/<ders>/*.md` — ders bazlı soru setleri ve cevap anahtarları (şimdilik biyoloji, 1. dönem 1. yazılı).

## Veriyi güncelleme

Yeni dönem tabloları çıkınca üst klasördeki `araclar/ksdt_to_json.py` betiği xlsx dosyalarından
`data/9-sinif.json` dosyasını yeniden üretir. Sınav tarihleri aynı betikteki `TARIH_1` sözlüğünde.

## Yerel çalıştırma

Herhangi bir statik sunucu yeterlidir, örneğin:

```bash
npx serve .
```

## Kaynaklar

- Konu soru dağılım tabloları: https://odsgm.meb.gov.tr/www/1donem-konu-soru-dagilim-tablolari-2026-2027/icerik/1724/tr
- OYSS uygulama kılavuzu ve takvimi: https://odsgm.meb.gov.tr/www/ortak-yazili-sinav-sistemi-uygulama-kilavuzu-yayimlandi/icerik/1748/tr
- Ders kitapları: https://tymm.meb.gov.tr/ders-kitaplari/ortaogretim

Bu proje resmî bir MEB uygulaması değildir.
