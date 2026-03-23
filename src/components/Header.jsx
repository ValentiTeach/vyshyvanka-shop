// src/components/Header.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Жінкам',     href: '#catalog', category: 'women' },
  { label: 'Чоловікам',  href: '#catalog', category: 'men' },
  { label: 'Дітям',      href: '#catalog', category: 'children' },
  { label: 'Аксесуари',  href: '#catalog', category: 'accessories' },
  { label: 'Про нас',    href: '#about',   category: null },
];

// Simple inline SVG icons
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const LogoEmblem = () => (
  <svg className="header__logo-emblem" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="40" height="40" stroke="currentColor" strokeWidth="1.2"/>
    <polygon points="22,6 30,14 22,22 14,14" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <polygon points="22,22 30,30 22,38 14,30" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="22" cy="14" r="2" fill="currentColor"/>
    <circle cx="22" cy="30" r="2" fill="currentColor"/>
    <line x1="8" y1="22" x2="14" y2="14" stroke="currentColor" strokeWidth="0.8"/>
    <line x1="8" y1="22" x2="14" y2="30" stroke="currentColor" strokeWidth="0.8"/>
    <line x1="36" y1="22" x2="30" y2="14" stroke="currentColor" strokeWidth="0.8"/>
    <line x1="36" y1="22" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8"/>
  </svg>
);

export default function Header({ onCategoryClick, onSearchOpen }) {
  const { itemCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="/">
          <LogoEmblem />
          <div className="header__logo-text">
            <span className="header__logo-name">Вишиванка</span>
            <span className="header__logo-sub">Традиційний стиль</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" role="navigation" aria-label="Головне меню">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              className="header__nav-link"
              href={link.href}
              onClick={link.category ? (e) => {
                e.preventDefault();
                onCategoryClick && onCategoryClick(link.category);
              } : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button
            className="header__icon-btn"
            aria-label="Пошук"
            onClick={() => onSearchOpen && onSearchOpen()}
          >
            <IconSearch />
          </button>

          <button className="header__icon-btn" aria-label="Кабінет">
            <IconUser />
          </button>

          <button
            className="header__icon-btn"
            aria-label={`Кошик (${itemCount} товарів)`}
            onClick={() => setIsOpen(true)}
          >
            <IconCart />
            {itemCount > 0 && (
              <span className="header__cart-badge">{itemCount}</span>
            )}
          </button>

          <button
            className="header__mobile-toggle"
            aria-label="Відкрити меню"
            onClick={() => setMobileOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
