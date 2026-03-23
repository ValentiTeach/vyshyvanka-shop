// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

const BADGE_LABELS = {
  new:      'Нове',
  sale:     'Знижка',
  handmade: 'Handmade',
};

const IconHeart = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export default function ProductCard({ product, onOpenModal }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const displaySizes = product.sizes.filter(s => s !== 'one-size').slice(0, 4);

  return (
    <article
      className="product-card"
      aria-label={product.name}
      onClick={() => onOpenModal && onOpenModal(product)}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-card__image-wrap">
        {/* Badge */}
        {product.badge && (
          <span className={`product-card__badge product-card__badge--${product.badge}`}>
            {BADGE_LABELS[product.badge]}
          </span>
        )}

        {/* Wishlist */}
        <button
          className={`product-card__wishlist${isWishlisted ? ' active' : ''}`}
          aria-label={isWishlisted ? 'Видалити з бажаного' : 'Додати в бажане'}
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
        >
          <IconHeart filled={isWishlisted} />
        </button>

        {/* Image */}
        <img
          className="product-card__img"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="product-card__overlay" aria-hidden="true">
          <button
            className="product-card__overlay-btn"
            onClick={(e) => { e.stopPropagation(); addToCart(product, product.sizes[0]); }}
          >
            Додати в кошик
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <span className="product-card__region">{product.region}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__fabric">{product.fabric}</p>

        <div className="product-card__bottom">
          <div className="product-card__price">
            <span className="product-card__price-current">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="product-card__price-old">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {displaySizes.length > 0 && (
            <div className="product-card__sizes" aria-label="Доступні розміри">
              {displaySizes.map(s => (
                <span key={s} className="product-card__size">{s}</span>
              ))}
              {product.sizes.filter(s => s !== 'one-size').length > 4 && (
                <span className="product-card__size">+{product.sizes.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
