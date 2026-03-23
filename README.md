# 🌻 Вишиванка — Інтернет-магазин

React-застосунок інтернет-магазину традиційних українських вишиванок.
Розгорнутий на **Vercel**, спроєктований для розширення.

---

## Стек технологій

| Шар             | Технологія                              |
|-----------------|-----------------------------------------|
| Frontend        | React 18 + Vite                         |
| Стилі           | CSS (власна дизайн-система, CSS-змінні) |
| Маршрутизація   | React Router DOM v6 *(підготовлено)*    |
| Стан кошика     | React Context API                       |
| Деплой          | Vercel                                  |
| База даних (план)| Supabase                               |

---

## Структура проєкту

```
src/
├── components/
│   ├── Header.jsx          # Шапка: логотип, навігація, кошик, пошук
│   ├── Hero.jsx            # Головний банер
│   ├── FeaturesStrip.jsx   # Смуга переваг
│   ├── Catalog.jsx         # Каталог з фільтрами та сортуванням
│   ├── ProductCard.jsx     # Картка товару
│   ├── ProductModal.jsx    # Модальне вікно деталей товару
│   ├── CartDrawer.jsx      # Кошик (висувна панель)
│   └── Footer.jsx          # Підвал сайту
├── context/
│   └── CartContext.jsx     # Глобальний стан кошика + вішліст
├── data/
│   └── products.js         # Тимчасові дані товарів (замінити на API)
├── App.jsx
├── main.jsx
└── index.css               # Дизайн-система (CSS-змінні, компоненти)
```

---

## Запуск локально

```bash
# 1. Встановити залежності
npm install

# 2. Запустити dev-сервер
npm run dev

# 3. Відкрити у браузері
# http://localhost:3000
```

---

## Деплой на Vercel

### Варіант 1 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Варіант 2 — GitHub + Vercel Dashboard

1. Створіть репозиторій: `git init && git add . && git commit -m "init"`
2. Завантажте на GitHub: `git remote add origin https://github.com/ValentiTeach/vyshyvanka-shop.git`
3. Відкрийте [vercel.com](https://vercel.com) → **New Project** → Виберіть репозиторій
4. Налаштування:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Натисніть **Deploy** 🚀

> Файл `vercel.json` вже налаштований для SPA (перенаправлення всіх маршрутів на `index.html`).

---

## Плани розвитку

- [ ] Supabase — база товарів, замовлень, користувачів
- [ ] Сторінка деталей товару (`/product/:id`)
- [ ] Кабінет користувача + авторизація
- [ ] Форма оформлення замовлення
- [ ] Фільтр за регіоном, тканиною, ціновим діапазоном
- [ ] Адмін-панель управління каталогом
- [ ] Інтеграція Нова Пошта API для розрахунку доставки
- [ ] Мульти-фото товару (галерея)
- [ ] SEO-мета-теги, sitemap

---

## Змінні середовища (для Supabase)

Створіть файл `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## Автор

**Valentino** — [GitHub: ValentiTeach](https://github.com/ValentiTeach)
