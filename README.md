# J.A.R.V.I.S. — Aşamalı Web Uygulaması (PWA)

Telefona **uygulama mağazası olmadan** kurulan JARVIS. Android ve iPhone'da çalışır,
ana ekrana ikon olarak eklenir, tam ekran açılır, internet yokken de açılır.

## Yayınlama (5 dakika)
1. github.com → **New repository** → ad: `jarvis` → **Public** → Create.
2. **Add file → Upload files** → bu klasördeki her şeyi sürükle (`.github` klasörü dahil) → **Commit**.
   > `.github` gizli klasördür; görünmüyorsa Windows Gezgini'nde *Görünüm → Gizli öğeler*'i aç.
3. **Settings → Pages → Build and deployment → Source: GitHub Actions** seç.
4. **Actions** sekmesinde "JARVIS PWA yayınla" yeşil olunca adres hazır:
   `https://<kullanıcı-adın>.github.io/jarvis/`

## Telefona kurma
- **Android (Chrome):** adresi aç → üstte çıkan **KUR** düğmesi ya da ⋮ → *Uygulamayı yükle*.
- **iPhone (Safari):** adresi aç → **Paylaş** → **Ana Ekrana Ekle**.
- Uygulama içinde de **AYAR → ANA EKRANA EKLE** var.

## Kullanım
- **Bulut modu (her yerde):** AYAR → Bulut beyni → Gemini → API anahtarı
  (ücretsiz: https://aistudio.google.com → *Get API key*). Anahtar sadece telefonda saklanır.
- **PC modu (evde):** PC'de JARVIS v1.4 açıkken konsolda çıkan linki
  (`http://192.168.x.x:5000/?token=...`) telefonda aç. O sayfa da aynı PWA'dır ve kurulabilir.
  > GitHub Pages adresi `https`, evdeki PC `http` olduğu için tarayıcılar GitHub Pages sürümünden
  > PC'ye bağlanmayı engeller. Evde PC'nin linkini, dışarıda GitHub Pages sürümünü kullan.
- Ana ekran ikonuna basılı tutunca kısayollar: **Konuş**, **Kask**.

## Güncelleme
Dosyaları değiştirip tekrar yükle ve `sw.js` içindeki `VERSION`'u artır (örn. `1.4.2`).
Telefonda **"JARVIS'in yeni sürümü hazır → GÜNCELLE"** bildirimi çıkar.
