// src/context/CartContext.jsx
import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems]         = useState([]);
  const [isOpen, setIsOpen]       = useState(false);
  const [wishlist, setWishlist]   = useState([]);

  const addToCart = useCallback((product, size = null) => {
    setItems(prev => {
      const key = `${product.id}-${size}`;
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, size, qty: 1, key }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const updateQty = useCallback((key, delta) => {
    setItems(prev =>
      prev
        .map(i => i.key === key ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
    );
  }, []);

  const toggleWishlist = useCallback((id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }, []);

  const total       = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount   = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, setIsOpen,
      wishlist,
      addToCart, removeFromCart, updateQty, toggleWishlist,
      total, itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
