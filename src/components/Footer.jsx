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

// Simple social SVGs
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

const IconTg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3L3 10.5l6.75 2.25M21 3L14.25 21l-4.5-8.25M21 3L9.75 12.75m0 0L14.25 21"/>
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
            <div className="footer__brand-logo">Вишиванка</div>
            <p className="footer__brand-desc">
              Ми об'єднуємо народних майстрів України з людьми,
              які цінують справжнє мистецтво та хочуть носити
              шматочок рідної культури.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <IconInsta />
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <IconFb />
              </a>
              <a href="#" className="footer__social-link" aria-label="Telegram">
                <IconTg />
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Вишиванка. Усі права захищено.
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
