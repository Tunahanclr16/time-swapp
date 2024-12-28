# Zaman Takası ve Freelance Hizmet Platformu

Bu platform, kullanıcıların yeteneklerini paylaşabilecekleri, hem zaman takası yapabilecekleri hem de freelance çalışabilecekleri yenilikçi bir sistemdir.

## Özellikler

### 1. Çalışma Modelleri

#### Zaman Takası
- Kullanıcılar sahip oldukları yetenekleri başkalarının yetenekleriyle takas edebilir
- Saat bazlı değişim sistemi
- Esnek zaman planlaması (hafta içi, hafta sonu, akşam saatleri)
- Karşılıklı hizmet değişimi

#### Freelance Çalışma
- Saatlik veya proje bazlı ücretlendirme
- Üç farklı paket seçeneği (Basic, Standard, Premium)
- Revizyon politikası
- Profesyonel portföy sunumu

#### Karma Model (Hybrid)
- Hem zaman takası hem de ücretli çalışma imkanı
- Esnek ödeme seçenekleri
- Özelleştirilebilir hizmet paketleri
- Dengeli değişim sistemi

### 2. Hizmet Kategorileri
- Yazılım Geliştirme
- Tasarım
- İçerik Yazarlığı
- Pazarlama
- Çeviri
- Eğitim
- Danışmanlık
- Ve daha fazlası...

### 3. Güven ve Kalite
- Detaylı profil sistemi
- Puanlama ve yorumlar
- Portföy gösterimi
- Hizmet garantisi
- Revizyon politikası
- Şeffaf iletişim

### 4. Kullanıcı Deneyimi
- Kolay kullanılabilir arayüz
- Gelişmiş arama ve filtreleme
- Gerçek zamanlı mesajlaşma
- Proje takip sistemi
- Takvim entegrasyonu
- Bildirim sistemi

## Nasıl Çalışır?

### Zaman Takası
1. Kullanıcı sunabileceği ve almak istediği hizmeti belirtir
2. Sistem eşleşen kullanıcıları önerir
3. Taraflar anlaşır ve zaman planlaması yapar
4. Hizmetler karşılıklı olarak tamamlanır
5. Taraflar birbirlerini değerlendirir

### Freelance
1. Hizmet veren paketlerini ve fiyatlarını belirler
2. Müşteri uygun paketi seçer
3. Ödeme güvenli havuz sistemine yapılır
4. Hizmet tamamlanır ve revizyon süreci işletilir
5. Onay sonrası ödeme serbest bırakılır

### Karma Model
1. Kullanıcı hem takas hem ücretli seçenekleri belirler
2. Müşteri tercih ettiği modeli seçer
3. Seçime göre zaman takası veya ödeme süreci başlar
4. Hizmet tamamlanır ve değerlendirme yapılır

## Teknik Özellikler

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- Socket.io Client
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Socket.io
- JWT Authentication

## Güvenlik Önlemleri

### Kimlik Doğrulama ve Yetkilendirme
- JWT (JSON Web Token) kullanımı
- Güvenli şifreleme (bcrypt) ile parola hashleme
- Role-based access control (RBAC) sistemi
- Session yönetimi ve timeout mekanizması
- OAuth2 entegrasyonu (sosyal medya girişleri için)

### API Güvenliği
- HTTPS protokolü kullanımı
- Rate limiting uygulaması
- CORS (Cross-Origin Resource Sharing) politikası
- API anahtarı doğrulaması
- Request validasyonu

### Veri Güvenliği
- Input validasyonu ve sanitizasyonu
- SQL injection koruması
- XSS (Cross-Site Scripting) koruması
- CSRF (Cross-Site Request Forgery) koruması
- Hassas verilerin şifrelenmesi

## Gerekli Paketler

### Backend (Node.js)
- express: ^4.18.0
- jsonwebtoken: ^9.0.0
- bcryptjs: ^2.4.3
- helmet: ^7.0.0
- cors: ^2.8.5
- express-rate-limit: ^7.0.0
- express-validator: ^7.0.0
- mongoose: ^7.0.0
- dotenv: ^16.0.0
- passport: ^0.6.0
- passport-jwt: ^4.0.0

### Frontend (React)
- react: ^18.2.0
- react-router-dom: ^6.0.0
- axios: ^1.4.0
- @mui/material: ^5.0.0
- formik: ^2.4.0
- yup: ^1.2.0
- react-query: ^3.39.0
- redux-toolkit: ^1.9.0

## Başlarken

1. Kayıt olun ve profilinizi oluşturun
2. Sunabileceğiniz hizmetleri ekleyin
3. Zaman takası veya freelance tercihlerinizi belirleyin
4. Diğer kullanıcıların hizmetlerini keşfedin
5. İletişime geçin ve anlaşın

## Ekran Görüntüleri

[Ekran görüntüleri eklenecek]

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/amazing`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Proje Değerlendirmesi ve Öneriler

### Projenin Türkiye'deki Potansiyeli

1. **Pazar Analizi**
   - Türkiye'de freelance çalışma kültürü hızla gelişiyor
   - Pandemi sonrası uzaktan çalışma yaygınlaştı
   - Zaman bankacılığı konsepti henüz yeni, bu bir avantaj olabilir
   - Özellikle genç nüfus arasında alternatif ekonomi modelleri ilgi görüyor

2. **Rekabet Avantajları**
   - Hibrit model (hem freelance hem zaman takası) benzersiz bir özellik
   - Yerel pazara özel tasarlanmış kullanıcı deneyimi
   - Türkçe dil desteği ve yerel ödeme sistemleri entegrasyonu
   - Topluluk odaklı yaklaşım

3. **Zorluklar ve Riskler**
   - Zaman takası konseptini kullanıcılara anlatmak zor olabilir
   - Güven ve güvenlik sistemlerinin kurulması gerekiyor
   - Başlangıçta yeterli kullanıcı kitlesi oluşturmak zaman alabilir
   - Yasal düzenlemeler ve vergilendirme konuları netleştirilmeli

### Tek Başına Geliştirme Süreci

1. **Avantajlar**
   - Hızlı karar alma ve değişiklik yapabilme
   - Maliyetleri düşük tutabilme
   - Projeye tam hakimiyet
   - Esnek çalışma imkanı

2. **Dezavantajlar**
   - İş yükü fazla olacak (geliştirme, tasarım, pazarlama vs.)
   - Teknik zorlukları tek başına çözmek gerekecek
   - 7/24 destek vermek zor olabilir
   - Ölçeklendirme sürecinde zorluklar yaşanabilir

### Öneriler

1. **Başlangıç Stratejisi**
   - Önce küçük bir kullanıcı grubuyla beta test yapın
   - Belirli bir şehir veya sektörde başlayıp sonra genişleyin
   - Topluluk oluşturmaya odaklanın
   - Kullanıcı geri bildirimlerini sürekli alın

2. **Teknik Öneriler**
   - Mikroservis mimarisi kullanın (ileride ölçeklendirme için)
   - Güvenlik ve doğrulama sistemlerine önem verin
   - Mobil uyumlu tasarıma öncelik verin
   - Otomatik test sistemleri kurun

3. **İş Geliştirme**
   - Erken aşamada mentor veya danışman desteği alın
   - Startup hızlandırma programlarına başvurun
   - Küçük yatırımcılarla görüşün
   - Sosyal medya ve içerik pazarlamasına önem verin

### Sonuç

Proje, Türkiye pazarı için yenilikçi ve potansiyeli yüksek bir girişim. Tek başına geliştirmek zor olsa da, doğru strateji ve odakla başarılı olabilir. Özellikle topluluk oluşturma ve güven sisteminin kurulması kritik başarı faktörleri olacaktır. İlerleyen aşamalarda ekip kurulması ve yatırım alınması düşünülebilir.

## Kurulum ve Çalıştırma

1. Gerekli paketlerin yüklenmesi:
```bash
npm install
```

2. Ortam değişkenlerinin ayarlanması:
- `.env` dosyası oluşturun
- Gerekli environment variable'ları tanımlayın

3. Veritabanı ayarları:
- MongoDB bağlantı ayarları
- Veritabanı şeması oluşturma

4. Uygulamayı başlatma:
```bash
# Backend için
npm run server

# Frontend için
npm run client
```

## Güvenlik Kontrol Listesi

- [ ] Tüm API endpointleri JWT ile korunuyor
- [ ] Rate limiting aktif
- [ ] HTTPS zorunlu
- [ ] Hassas veriler şifreleniyor
- [ ] Input validasyonu yapılıyor
- [ ] Error handling düzgün çalışıyor
- [ ] Logging sistemi aktif
- [ ] Backup sistemi kurulu
