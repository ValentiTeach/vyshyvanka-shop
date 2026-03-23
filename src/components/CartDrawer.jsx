// src/components/CartDrawer.jsx
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconBag = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQty, total } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer${isOpen ? ' open' : ''}`}
        aria-label="Кошик"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="cart-drawer__head">
          <h2 className="cart-drawer__title">Кошик</h2>
          <button
            className="cart-drawer__close"
            onClick={() => setIsOpen(false)}
            aria-label="Закрити кошик"
          >
            <IconX />
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <IconBag />
              <p>Ваш кошик порожній</p>
              <button
                className="btn-primary"
                style={{ fontSize: '0.68rem', padding: '12px 28px' }}
                onClick={() => setIsOpen(false)}
              >
                До каталогу
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.key} className="cart-item">
                <img
                  className="cart-item__img"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="cart-item__info">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__meta">
                    {item.region}{item.size ? ` · Розмір: ${item.size}` : ''}
                  </p>

                  <div className="cart-item__bottom">
                    <div className="cart-item__qty">
                      <button
                        onClick={() => updateQty(item.key, -1)}
                        aria-label="Зменшити кількість"
                      >−</button>
                      <span className="cart-item__qty-num">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, 1)}
                        aria-label="Збільшити кількість"
                      >+</button>
                    </div>
                    <span className="cart-item__price">
                      {formatPrice(item.price * item.qty)}
                    </span>
                  </div>

                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.key)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer — only when cart has items */}
        {items.length > 0 && (
          <div className="cart-drawer__foot">
            <div className="cart-drawer__total">
              <span className="cart-drawer__total-label">Разом</span>
              <span className="cart-drawer__total-price">{formatPrice(total)}</span>
            </div>
            <button className="btn-full">
              Оформити замовлення
            </button>
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.72rem', fontFamily: 'var(--font-body)',
                  color: 'var(--text-light)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: 600
                }}
                onClick={() => setIsOpen(false)}
              >
                Продовжити покупки
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
