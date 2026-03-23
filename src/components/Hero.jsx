// src/components/Hero.jsx

export default function Hero({ onShopClick }) {
  return (
    <section className="hero" aria-label="Головний банер">
      {/* Background image placeholder — replace with real photo */}
      <img
        className="hero__bg-img"
        src="https://picsum.photos/seed/hero-vysh/1600/900"
        alt=""
        aria-hidden="true"
        loading="eager"
      />
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__label">Колекція 2025</p>

          <h1 className="hero__title">
            Справжня<br />
            <em>вишиванка</em> —<br />
            серце України
          </h1>

          <p className="hero__desc">
            Ручна вишивка майстрів з усіх куточків України.
            Кожна сорочка — це неповторний виріб, що зберігає
            традиції та передає тепло рук майстра.
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
              Про наших майстрів
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
          <div className="hero__stat-num">12</div>
          <div className="hero__stat-label">Регіонів України</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-num">8</div>
          <div className="hero__stat-label">Років традиції</div>
        </div>
      </div>
    </section>
  );
}
