// src/components/Hero.jsx
import heroBg from '../assets/images/Main.jpg';

export default function Hero({ onShopClick }) {
  return (
    <section className="hero" aria-label="Головний банер">
      <img
        className="hero__bg-img"
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="eager"
      />
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__label">Коломия · Колекція 2025</p>

          <h1 className="hero__title">
            Сучасна<br />
            <em>вишиванка</em> —<br />
            гордість України
          </h1>

          <p className="hero__desc">
            Магазин у Коломиї, де кожна вишиванка — це живе мистецтво.
            Якісні тканини, автентичні орнаменти та тепло
            майстринь Прикарпаття у кожному стібку.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={onShopClick}>
              Переглянути каталог
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Про наш магазин
            </button>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <div className="hero__stat-num">350+</div>
          <div className="hero__stat-label">Унікальних моделей</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-num">47</div>
          <div className="hero__stat-label">Майстрів-вишивальниць</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-num">Коломия</div>
          <div className="hero__stat-label">Прикарпаття</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-num">8</div>
          <div className="hero__stat-label">Років традиції</div>
        </div>
      </div>
    </section>
  );
}
