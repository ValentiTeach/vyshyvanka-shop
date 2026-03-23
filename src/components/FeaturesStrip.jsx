// src/components/FeaturesStrip.jsx

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Ручна вишивка',
    desc: 'Кожен виріб — праця майстра від початку до кінця',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Доставка по Україні',
    desc: 'Нова Пошта та Укрпошта — швидко та надійно',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Натуральні тканини',
    desc: '100% льон, батист та бавовна українського виробництва',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Підтримка 7 днів',
    desc: 'Відповімо на будь-яке питання та допоможемо з вибором',
  },
];

export default function FeaturesStrip() {
  return (
    <section className="features-strip" aria-label="Наші переваги">
      <div className="container">
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-item__icon" aria-hidden="true">
                {f.icon}
              </div>
              <div className="feature-item__text">
                <h3 className="feature-item__title">{f.title}</h3>
                <p className="feature-item__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
