'use client'

import { useState } from 'react'
import {
  Car,
  CheckCircle2,
  Clock,
  CreditCard,
  Info,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

type InfoKey = 'ppf' | 'cam'

type CatalogService = {
  number: string
  title: string
  description: string
  image: string
  infoKey?: InfoKey
}

type InfoPanel = {
  kicker: string
  title: string
  intro: string
  items: string[]
  meta?: string[]
}

const ppfOptions = [
  {
    number: '01',
    series: 'CORAL SERIES',
    code: 'GX190',
    warranty: '5 Yıl Garantili',
    slogan: 'Tüy kadar hafif, kaya gibi sağlam',
    thickness: '190 Mikron',
    finish: 'Şeffaf Parlak',
    features: ['TPU Katman', '≥110GU Parlaklık Değeri', 'Değer Koruma', 'Kolay Uygulama', 'UV Koruma', 'Su İtici Yüzey', 'Ultra Parlak', 'Leke Tutmaz', 'Sararmaya Direnç', 'Kendini Onarma'],
  },
  {
    number: '02',
    series: 'DIAMOND SERIES',
    code: 'GX210',
    warranty: '7 Yıl Garantili',
    slogan: 'Günlük kullanıma premium çözüm',
    thickness: '200 Mikron',
    finish: 'Şeffaf Parlak',
    features: ['TPU Katman', '≥110GU Parlaklık Değeri', 'Değer Koruma', 'Kolay Uygulama', 'UV Koruma', 'Su İtici Yüzey', 'Ultra Parlak', 'Leke Tutmaz', 'Sararmaya Direnç', 'Kendini Onarma'],
  },
  {
    number: '03',
    series: 'PRO',
    code: 'GX220',
    warranty: '10 Yıl Garantili',
    slogan: 'En zor şartlara karşı tasarlandı',
    thickness: '220 Mikron',
    finish: 'Şeffaf Parlak',
    features: ['TPU Katman', '≥110GU Parlaklık Değeri', 'Değer Koruma', 'Kolay Uygulama', 'UV Koruma', 'Su İtici Yüzey', 'Ultra Parlak', 'Leke Tutmaz', 'Sararmaya Direnç', 'Kendini Onarma'],
  },
]

const reviews = [
  {
    name: 'Ümit D.',
    text: 'Pasta cila ve seramik uygulamasında titiz işçilikten memnun kaldığını paylaşıyor.',
  },
  {
    name: 'Büşra A.',
    text: 'PPF, pasta cila ve detaylı iç temizlik sonrası aracının yeni gibi olduğunu belirtiyor.',
  },
  {
    name: 'Uygar Y.',
    text: 'Pasta cila işlemi, ilgi ve özenli teslim süreci için memnuniyetini aktarıyor.',
  },
]

const catalogServices: CatalogService[] = [
  {
    number: '01',
    title: 'PASTA CİLA & BOYA KORUMA',
    description: 'Çizik giderme, boya canlandırma ve koruyucu son kat uygulamaları.',
    image: '/cars/service-pasta-cila.jpg',
  },
  {
    number: '02',
    title: 'CAM FİLMİ (ORACAL)',
    description: 'UV koruması, mahremiyet ve aracınızın tarzına uygun cam filmi çözümleri.',
    image: '/cars/service-cam-filmi.jpg',
    infoKey: 'cam',
  },
  {
    number: '03',
    title: 'PPF KAPLAMA',
    description: 'Taş izi, çizik ve yol şartlarına karşı 5, 7 ve 10 yıl garantili kaplama.',
    image: '/cars/service-ppf.jpg',
  },
  {
    number: '04',
    title: 'DETAYLI ARAÇ TEMİZLİĞİ',
    description: 'Kabin, döşeme, tavan, torpido ve tüm iç yüzeylerde detaylı hijyen.',
    image: '/cars/service-ic-temizlik.jpg',
  },
  {
    number: '05',
    title: 'BOYASIZ GÖÇÜK DÜZELTME',
    description: 'Boyaya zarar vermeden, aracın orijinal yüzeyini koruyan düzeltme işlemleri.',
    image: '/cars/service-gocuk-duzeltme.jpg',
  },
]

const infoPanels: Record<InfoKey, InfoPanel> = {
  ppf: {
    kicker: 'ÖN BİLGİLENDİRME',
    title: 'PPF kaplama öncesi bilmeniz gerekenler',
    intro: 'Uygulama sürecine başlamadan önce lütfen aşağıdaki bilgileri okuyunuz.',
    items: [
      'Ürünlerimiz %100 poliüretan olup malzeme ve işçilik garantilidir.',
      'Her araca özel dıştan kesim yapılmaktadır.',
      'Araç yazıları kalıbı alınarak sökülür; uygulama yapıldıktan sonra tekrar yerlerine yapıştırılır.',
      'Kapı kulpu, kapı çıtaları, araç yazıları ve arka stopların söküm-takım işlemi profesyonel trimcilerimiz tarafından yapılmaktadır.',
      'Komple PPF yapılan araçlarda cam filmi için indirim hakkınız bulunmaktadır.',
      'Komple PPF kaplama yapılan araçlara iç ekran koruyucular ücretsiz olarak monte edilmektedir.',
    ],
  },
  cam: {
    kicker: 'PROFESYONEL CAM FİLMİ',
    title: 'ORACAL cam filmi uygulama detayları',
    intro: 'Aracınıza özel, profesyonel işçilik standartlarında cam filmi uygulaması.',
    items: [
      'UV ışınlarına karşı yüksek koruma sağlar.',
      'Isı ve güneş etkisini azaltmaya yardımcı olur.',
      'Daha konforlu ve özel bir sürüş alanı oluşturur.',
      'Aracın görünümünü tamamlayan şık ve premium sonuç sunar.',
      'Profesyonel uygulama, garantili ve temiz işçilikle tamamlanır.',
    ],
    meta: ['Cam filmi serisi / markası: 🇩🇪 ORACAL', 'Garanti süresi: 4 Years'],
  },
}

const hours = [
  'Pazartesi: 09:00 - 22:00',
  'Salı: 09:00 - 22:00',
  'Çarşamba: 09:00 - 22:00',
  'Perşembe: 09:00 - 22:00',
  'Cuma: 09:00 - 22:00',
  'Cumartesi: 09:00 - 22:00',
  'Pazar: Kapalı',
]

const whatsappHref = 'https://wa.me/905529199674?text=Merhaba%2C%20PPF%20kaplama%20ve%20ara%C3%A7%20bak%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)
  const [activeInfo, setActiveInfo] = useState<InfoKey | null>(null)

  const openImage = (src: string, alt: string) => setActiveImage({ src, alt })
  const currentInfo = activeInfo ? infoPanels[activeInfo] : null

  return (
    <main>
      <header className="site-header">
        <a className="logo brand-logo" href="#top" aria-label="ERN Car Care ana sayfa">
          <img src="/contact-logo.png" alt="ERN Car Care" />
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Ana menü">
          <a href="#koruma" onClick={() => setMenuOpen(false)}>PPF</a>
          <a href="#vale" onClick={() => setMenuOpen(false)}>Vale</a>
          <a href="#yorumlar" onClick={() => setMenuOpen(false)}>Yorumlar</a>
          <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Katalog</a>
          <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
        </nav>
        <a className="header-phone" href="tel:+905529199674"><Phone size={16} /> 0552 919 9674</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-social-strip" aria-label="Sosyal medya ve iletişim">
            <a className="hero-social-button hero-social-instagram" href="https://www.instagram.com/erncarcare/" target="_blank" rel="noreferrer">
              <span className="hero-social-icon"><img src="/instagram-icon.png" alt="" /></span>
              <span className="hero-social-copy">
                <strong>ERN <em>CAR CARE</em></strong>
                <small>@erncarcare</small>
              </span>
            </a>
          </div>
          <p className="hero-follow-text">Kampanyalardan yararlanmak için bizi sosyal medyada takipte kalın.</p>
          <h1 className="hero-sign-title">Aracınıza dair<br /><em>her şey</em></h1>
          <p className="hero-text">PPF kaplama başta olmak üzere cam filmi, pasta cila ve detaylı bakım çözümleriyle aracınızı koruyor; 6 yıllık tecrübemizi kusursuz işçilikle yansıtıyoruz.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={17} /></a>
            <a className="button button-line" href="tel:+905529199674">Ara <Phone size={17} /></a>
            <a className="catalog-cta" href="#hizmetler">Kataloğu keşfet <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <button className="image-button" type="button" onClick={() => openImage('/lambo.jpeg', 'ERN Car Care stüdyosunda mavi Lamborghini')}>
            <img src="/lambo.jpeg" alt="ERN Car Care stüdyosunda mavi Lamborghini" />
          </button>
        </div>
        <div className="hero-bottom">
          <span>İstanbul · Kağıthane</span>
          <span>Kampanyalar · Instagram · WhatsApp İletişim</span>
          <span className="scroll-hint">Aşağı kaydır <b>↓</b></span>
        </div>
      </section>

      <section className="protection section-pad" id="koruma">
        <div className="section-kicker">SCHUTZ 🇩🇪 PPF</div>
        <div className="intro-grid">
          <h2>Aracınıza özel<br /><em>koruma seçenekleri</em></h2>
          <div>
            <p className="lead">SCHUTZ PPF ürünlerinde aracınıza ve beklentinize özel üç farklı koruma seçeneği sunuyoruz.</p>
            <p>Yüksek parlaklık, güçlü koruma ve uzun ömürlü performansla aracınız ilk günkü görünümünü yıllarca korusun.</p>
            <button className="info-trigger" type="button" onClick={() => setActiveInfo('ppf')}>
              <Info size={16} /> PPF ön bilgilendirme
            </button>
          </div>
        </div>
        <div className="ppf-grid">
          {ppfOptions.map((option) => {
            const warrantyYears = option.warranty.split(' ')[0]

            return (
              <article className="ppf-card" data-code={option.code} key={option.code}>
                <div className="ppf-card-head">
                  <span className="ppf-index">{option.number}</span>
                  <span className="ppf-label">SCHUTZ PPF</span>
                </div>
                <div className="ppf-card-main">
                  <p className="ppf-code">{option.code}</p>
                  <h3>{option.series}</h3>
                </div>
                <div className="ppf-warranty">
                  <CheckCircle2 size={18} />
                  <strong>{warrantyYears}</strong>
                  <span>Yıl Garanti</span>
                </div>
                <p className="ppf-slogan">{option.slogan}</p>
                <div className="ppf-specs">
                  <span>{option.thickness}</span>
                  <span>{option.finish}</span>
                </div>
                <ul className="ppf-feature-list" aria-label={`${option.series} teknik detayları`}>
                  {option.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="payment-promo section-pad">
        <div className="payment-card">
          <div className="payment-copy">
            <div className="section-kicker"><CreditCard size={16} /> KREDİ KARTINA TAKSİT</div>
            <h2>Peşin fiyatına<br /><em>taksit fırsatı</em></h2>
            <p>PPF kaplama, seramik kaplama, cam filmi, pasta cila ve detaylı iç kuaför hizmetlerinde kredi kartına 3, 6, 9 ve 12 taksit imkânı.</p>
          </div>
          <div className="payment-image">
            <img src="/payment-installments.jpg" alt="ERN Car Care kredi kartına 3, 6, 9 ve 12 taksit kampanyası" />
          </div>
        </div>
      </section>

      <section className="feature section-pad" id="vale">
        <div className="feature-grid">
          <div className="feature-media">
            <button className="image-button" type="button" onClick={() => openImage('/cars/service-vale.jpg', 'ERN Car Care ücretsiz vale hizmeti')}>
              <img src="/cars/service-vale.jpg" alt="ERN Car Care ücretsiz vale hizmeti" />
            </button>
          </div>
          <div className="feature-copy">
            <div className="section-kicker">ÜCRETSİZ VALE</div>
            <h2>Siz zahmet<br /><em>etmeyin</em></h2>
            <p className="lead">İstanbul Avrupa Yakası'na özel ücretsiz vale hizmetimizle aracınızı adresinizden teslim alıyoruz.</p>
            <p>İşlemler tamamlandığında aracınızı güvenle tekrar adresinize teslim ediyoruz. Aracınız tüm süreç boyunca ERN CAR CARE güvencesinde.</p>
            <a className="button button-dark" href="tel:+905529199674"><Phone size={17} /> Vale için ara</a>
          </div>
        </div>
      </section>

      <section className="reviews section-pad" id="yorumlar">
        <div className="section-head">
          <div>
            <div className="section-kicker">GOOGLE YORUMLARI</div>
            <h2>Siz hâlâ<br /><em>yorumlarımıza bakmadınız mı?</em></h2>
          </div>
          <p>Gerçek müşteri deneyimleri, aracınızı teslim etmeden önce size en net güveni verir.</p>
        </div>
        <div className="reviews-layout">
          <div className="rating-card">
            <div className="rating-number">5,0</div>
            <div className="stars" aria-label="5 yıldız">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>
            <p>128 Google yorumu</p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars">★★★★★</div>
                <p>{review.text}</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-pad">
        <div className="experience-frame">
          <button className="image-button" type="button" onClick={() => openImage('/cars/porsche-blue-front.jpg', 'ERN Car Care stüdyosunda işlem görmüş mavi Porsche')}>
            <img src="/cars/porsche-blue-front.jpg" alt="ERN Car Care stüdyosunda işlem görmüş mavi Porsche" />
          </button>
        </div>
        <p className="photo-caption">6 yıldır edindiğimiz tecrübeyi, yenilikçi uygulamalarla aracınıza yansıtıyoruz.</p>
      </section>

      <section className="services section-pad" id="hizmetler">
        <div className="section-head">
          <div>
            <div className="section-kicker">KATALOG</div>
            <h2>Sizlere nasıl<br /><em>hizmet verebiliriz?</em></h2>
          </div>
          <p>Aracınıza değer katacak bakım, koruma ve detay çözümleri tek adreste.</p>
        </div>
        <div className="service-grid">
          {catalogServices.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image">
                <button className="image-button" type="button" onClick={() => openImage(service.image, service.title)}>
                  <img src={service.image} alt={service.title} />
                </button>
              </div>
              <div className="service-meta">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.infoKey && (
                  <button className="service-info-trigger" type="button" onClick={() => setActiveInfo(service.infoKey!)}>
                    Detayları gör <Info size={15} />
                  </button>
                )}
                <Car size={20} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-mark"><Sparkles size={22} /></div>
        <p>Aracınızın kusursuzluğu<br /><em>detaylarda saklı;</em><br />o detaylar ERN <span>CAR CARE</span>'e emanet</p>
        <div className="statement-image">
          <button className="image-button" type="button" onClick={() => openImage('/cars/lexus-black-suv.jpg', 'ERN Car Care stüdyosunda işlem görmüş siyah Lexus')}>
            <img src="/cars/lexus-black-suv.jpg" alt="ERN Car Care stüdyosunda işlem görmüş siyah Lexus" />
          </button>
        </div>
      </section>

      <section className="contact section-pad" id="iletisim">
        <div className="contact-overview">
          <div>
            <div className="section-kicker">ADRES</div>
            <h2 className="contact-brand-title">
              <span>ERN <strong>CAR CARE</strong></span><br /><em>Kağıthane</em>
            </h2>
            <p>Aracınıza değer katacak tüm bakım ve koruma hizmetleri ERN Car Care'de.</p>
          </div>
          <div className="address-block">
            <p><MapPin size={18} /> İstanbul Kağıthane Seyrantepe Mahallesi Cesur Sokak No 73B</p>
            <p><Phone size={18} /> 0552 919 9674</p>
            <p><Clock size={18} /> Şu anda açığız</p>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="ERN Car Care harita konumu"
            src="https://www.google.com/maps?q=Cesur%20Sk.%2073B%2034418%20Ka%C4%9F%C4%B1thane%20%C4%B0stanbul%20ERN%20Car%20Care&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-copy">
          <p>Pasta cila, detaylı iç kuaför, PPF kaplama, boyasız göçük düzeltme ve cam filmi uygulamalarında dünya standartlarında, premium kalite malzemeler kullanıyor; profesyonel işçiliğimizle aracınıza hak ettiği özeni gösteriyoruz.</p>
          <p>PPF uygulamalarımızda 5, 7 ve 10 yıl garantili seçeneklerimiz, ayrıca tüm işlemlerimizde kredi kartına taksit imkânımız mevcuttur.</p>
          <p>İstanbul Avrupa Yakası'nda vale hizmetimiz sayesinde aracınızı bulunduğunuz adresten teslim alıyor, işlemler tamamlandıktan sonra güvenle tekrar size ulaştırıyoruz.</p>
          <p>Aracınıza özel kampanyalı fiyatlarımızdan yararlanmak ve detaylı bilgi almak için hemen bize mesaj atın. ERN Car Care olarak sizleri bekliyoruz.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-light" href="tel:+905529199674"><Phone size={17} /> 0552 919 9674</a>
          <a className="button button-outline contact-instagram-button" href="https://www.instagram.com/erncarcare/" target="_blank" rel="noreferrer">
            <img src="/instagram-icon.png" alt="" />
            <span>ERN <strong>CAR CARE</strong></span>
          </a>
          <a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Cesur%20Sk.%2073B%2034418%20Ka%C4%9F%C4%B1thane%20%C4%B0stanbul" target="_blank" rel="noreferrer"><MapPin size={17} /> Yol tarifi</a>
        </div>
        <div className="contact-panels">
          <article>
            <h3>Mesai Saatlerimiz</h3>
            <ul className="hours-list">
              {hours.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <footer>
        <a className="footer-brand-logo" href="#top" aria-label="ERN Car Care ana sayfa">
          <img src="/contact-logo.png" alt="ERN Car Care" />
        </a>
        <div className="footer-copy">
          <strong>ERN <span>CAR CARE</span></strong>
          <a className="footer-instagram" href="https://www.instagram.com/erncarcare/" target="_blank" rel="noreferrer">
            <img src="/instagram-icon.png" alt="" />
            <span>@erncarcare</span>
          </a>
          <small>© 2021 · Eren Alkış</small>
        </div>
        <a href="#top" className="back-top">Başa dön ↑</a>
      </footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Büyük fotoğraf önizleme" onClick={() => setActiveImage(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" aria-label="Fotoğrafı kapat" onClick={() => setActiveImage(null)}>
              <X size={22} />
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}

      {currentInfo && (
        <div className="info-modal" role="dialog" aria-modal="true" aria-labelledby="info-modal-title" onClick={() => setActiveInfo(null)}>
          <div className="info-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button className="info-modal-close" type="button" aria-label="Bilgilendirmeyi kapat" onClick={() => setActiveInfo(null)}>
              <X size={22} />
            </button>
            <div className="info-modal-kicker"><Info size={16} /> {currentInfo.kicker}</div>
            <h2 id="info-modal-title">{currentInfo.title}</h2>
            <p className="info-modal-intro">{currentInfo.intro}</p>
            <ul className="info-list">
              {currentInfo.items.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {currentInfo.meta && (
              <div className="info-meta">
                {currentInfo.meta.map((item) => <span key={item}>{item}</span>)}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
