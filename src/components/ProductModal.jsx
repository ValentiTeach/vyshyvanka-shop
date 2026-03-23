// src/components/ProductModal.jsx
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconHeart = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'} stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ProductModal({ product, onClose }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty]                   = useState(1);
  const [added, setAdded]               = useState(false);

  const isWishlisted = wishlist.includes(product?.id);

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setQty(1);
      setAdded(false);
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  // Close on Escape
  useEffect(() => {
    const handle = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        {/* Close */}
        <button className="product-modal__close" onClick={onClose} aria-label="Закрити">
          <IconX />
        </button>

        <div className="product-modal__body">
          {/* Image */}
          <div className="product-modal__image-wrap">
            {product.badge && (
              <span className={`product-card__badge product-card__badge--${product.badge}`}
                style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}>
                {product.badge === 'new' ? 'Нове' : product.badge === 'sale' ? 'Знижка' : 'Handmade'}
              </span>
            )}
            <img
              className="product-modal__img"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Details */}
          <div className="product-modal__details">
            <div className="product-modal__top">
              <span className="product-card__region" style={{ display: 'block', marginBottom: 8 }}>
                {product.region} регіон
              </span>
              <h2 className="product-modal__name">{product.name}</h2>
              <p className="product-modal__fabric">{product.fabric}</p>

              <div className="product-modal__price-row">
                <span className="product-modal__price">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="product-modal__old-price">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                {product.oldPrice && (
                  <span className="product-modal__discount">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>
            </div>

            {/* Size selector */}
            {product.sizes[0] !== 'one-size' && (
              <div className="product-modal__section">
                <div className="product-modal__section-header">
                  <span className="product-modal__section-label">Розмір</span>
                  <a href="#" className="product-modal__size-guide"
                    onClick={e => e.preventDefault()}>
                    Таблиця розмірів
                  </a>
                </div>
                <div className="product-modal__sizes">
                  {product.sizes.map(s => (
                    <button
                      key={s}
                      className={`product-modal__size-btn${selectedSize === s ? ' active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                      aria-pressed={selectedSize === s}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qty + Add to cart */}
            <div className="product-modal__section">
              <div className="product-modal__buy-row">
                <div className="product-modal__qty">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    aria-label="Зменшити кількість"
                    disabled={qty <= 1}
                  >−</button>
                  <span>{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    aria-label="Збільшити кількість"
                  >+</button>
                </div>

                <button
                  className={`product-modal__add-btn${added ? ' added' : ''}`}
                  onClick={handleAddToCart}
                >
                  {added ? (
                    <><IconCheck /> Додано!</>
                  ) : (
                    'Додати в кошик'
                  )}
                </button>

                <button
                  className={`product-modal__wish-btn${isWishlisted ? ' active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={isWishlisted ? 'Видалити з бажаного' : 'Додати в бажане'}
                >
                  <IconHeart filled={isWishlisted} />
                </button>
              </div>
            </div>

            {/* Info list */}
            <div className="product-modal__info-list">
              {[
                ['Матеріал', product.fabric],
                ['Регіон', product.region],
                ['Техніка', 'Ручна / машинна вишивка'],
                ['Догляд', 'Делікатне прання при 30°C'],
              ].map(([label, value]) => (
                <div key={label} className="product-modal__info-row">
                  <span className="product-modal__info-label">{label}</span>
                  <span className="product-modal__info-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
