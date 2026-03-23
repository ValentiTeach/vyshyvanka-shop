// src/components/Catalog.jsx
import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { products, CATEGORIES, SORT_OPTIONS } from '../data/products';

const PAGE_SIZE = 8;

export default function Catalog({ activeCategory, onCategoryChange, searchQuery = '', onOpenModal }) {
  const [sort, setSort] = useState('default');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory && activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'newest')     list.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));

    return list;
  }, [activeCategory, sort, searchQuery]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const handleCategoryChange = (cat) => {
    setPage(1);
    onCategoryChange(cat);
  };

  return (
    <section className="category-section" id="catalog" aria-label="Каталог товарів">
      <div className="container">

        <div className="category-section__head">
          <h2 className="section-title">
            <span>Каталог</span>
            Наші вишиванки
          </h2>

          <div className="category-filters" role="group" aria-label="Фільтр за категорією">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`category-filter-btn${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-controls">
          <span className="catalog-controls__count">
            Показано {visible.length} з {filtered.length} товарів
            {searchQuery && ` за запитом «${searchQuery}»`}
          </span>
          <div className="catalog-controls__sort">
            <label htmlFor="sort-select">Сортувати:</label>
            <select
              id="sort-select"
              value={sort}
              onChange={e => { setSort(e.target.value); setPage(1); }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="catalog-grid" role="list">
            {visible.map(product => (
              <div key={product.id} role="listitem">
                <ProductCard
                  product={product}
                  onOpenModal={onOpenModal}
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-light)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 8 }}>
              Нічого не знайдено
            </p>
            <p style={{ fontSize: '0.85rem' }}>
              Спробуйте змінити фільтри або пошуковий запит
            </p>
          </div>
        )}

        {hasMore && (
          <div className="catalog-load-more">
            <button
              className="btn-outline"
              onClick={() => setPage(p => p + 1)}
            >
              Завантажити ще ({filtered.length - visible.length})
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
