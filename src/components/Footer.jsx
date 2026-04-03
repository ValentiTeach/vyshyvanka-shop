// src/components/Footer.jsx

const SHOP_LINKS = [
  'Жіночі вишиванки',
  'Чоловічі вишиванки',
  'Дитячі вишиванки',
  'Аксесуари',
  'Нові надходження',
  'Акційні товари',
];

const INFO_LINKS = [
  'Про нас',
  'Наші майстри',
  'Доставка і оплата',
  'Повернення',
  'Догляд за виробами',
  'Контакти',
];

const IconInsta = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconFb = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.22-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="ornament-strip" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div>
            <div className="footer__brand-logo">Сучасна вишиванка</div>
            <p className="footer__brand-desc">
              Невеликий магазин у Коломиї, де з любов'ю до України
              підбирають якісні вишиванки для всієї родини.
              Автентичні орнаменти, перевірена якість, серце Прикарпаття.
            </p>

            {/* Address */}
            <div className="footer__contact-row">
              <IconPin />
              <span>м. Коломия, Івано-Франківська обл.</span>
            </div>

            {/* Phones */}
            <div className="footer__phones">
              {['+380 (63) 356 74 94', '+380 (75) 617 20 95', '+380 (97) 531 10 56'].map(phone => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="footer__phone-link"
                >
                  <IconPhone />
                  {phone}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <IconInsta />
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <IconFb />
              </a>
              <a
                href="https://www.tiktok.com/@suchasna_vyshyvanka?_r=1&_t=ZS-94u2LGj6dEe"
                className="footer__social-link"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTikTok />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <p className="footer__col-title">Магазин</p>
            <ul className="footer__links">
              {SHOP_LINKS.map(l => (
                <li key={l}>
                  <a href="#catalog" className="footer__link">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <p className="footer__col-title">Інформація</p>
            <ul className="footer__links">
              {INFO_LINKS.map(l => (
                <li key={l}>
                  <a href="#" className="footer__link">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="footer__col-title">Підписка</p>
            <p className="footer__newsletter-text">
              Отримуйте сповіщення про нові надходження,
              знижки та цікаві статті про вишиванку.
            </p>
            <div className="footer__newsletter-form">
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder="Ваш email"
                aria-label="Email для підписки"
              />
              <button className="footer__newsletter-btn">
                Підписатися
              </button>
            </div>

            {/* TikTok CTA */}
            <a
              href="https://www.tiktok.com/@suchasna_vyshyvanka?_r=1&_t=ZS-94u2LGj6dEe"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__tiktok-cta"
            >
              <IconTikTok />
              <span>Ми є на TikTok — @suchasna_vyshyvanka</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Сучасна вишиванка, Коломия. Усі права захищено.
          </span>
          <div className="footer__legal">
            <a href="#">Політика конфіденційності</a>
            <a href="#">Публічна оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
