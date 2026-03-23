// src/App.jsx
import { useState } from 'react';
import Header       from './components/Header';
import Hero         from './components/Hero';
import FeaturesStrip from './components/FeaturesStrip';
import Catalog      from './components/Catalog';
import ProductModal from './components/ProductModal';
import CartDrawer   from './components/CartDrawer';
import Footer       from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchOpen, setSearchOpen]         = useState(false);
  const [searchQuery, setSearchQuery]       = useState('');
  const [modalProduct, setModalProduct]     = useState(null);

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    scrollToCatalog();
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') handleSearchClose();
    if (e.key === 'Enter')  scrollToCatalog();
  };

  return (
    <>
      {/* Search bar slide-in */}
      <div className={`search-bar${searchOpen ? ' open' : ''}`} role="search">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Пошук вишиванок..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          autoFocus={searchOpen}
          aria-label="Пошук"
        />
        <button
          className="search-bar__close"
          onClick={handleSearchClose}
          aria-label="Закрити пошук"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <Header
        onCategoryClick={handleCategoryClick}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <main>
        <Hero onShopClick={scrollToCatalog} />
        <FeaturesStrip />
        <div className="ornament-strip" aria-hidden="true" />

        <Catalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onOpenModal={setModalProduct}
        />
      </main>

      <Footer />

      {/* Global overlays */}
      <CartDrawer />
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </>
  );
}
