// src/data/products.js
import imgProduct1  from '../assets/images/Product1.jpg';
import imgProduct2  from '../assets/images/Product2.jpg';
import imgProduct3  from '../assets/images/Product3.jpg';
import imgProduct4  from '../assets/images/Product4.jpg';
import imgProduct5  from '../assets/images/Product5.jpg';
import imgProduct6  from '../assets/images/Product6.jpg';
import imgProduct7  from '../assets/images/Product7.jpg';
import imgProduct8  from '../assets/images/Product8.jpg';
import imgProduct9  from '../assets/images/Product9.jpg';
import imgProduct10 from '../assets/images/Product10.jpg';
import imgProduct12 from '../assets/images/Product12.jpg';

export const CATEGORIES = [
  { id: 'all',         label: 'Всі товари' },
  { id: 'women',       label: 'Жінкам' },
  { id: 'men',         label: 'Чоловікам' },
  { id: 'children',    label: 'Дітям' },
  { id: 'accessories', label: 'Аксесуари' },
];

export const REGIONS = [
  'Полтавська',
  'Гуцульська',
  'Подільська',
  'Слобожанська',
  'Волинська',
  'Буковинська',
];

export const SORT_OPTIONS = [
  { value: 'default',    label: 'За замовчуванням' },
  { value: 'price-asc',  label: 'Ціна: від низької' },
  { value: 'price-desc', label: 'Ціна: від високої' },
  { value: 'newest',     label: 'Нові надходження' },
];

export const products = [
  {
    id: 1,
    name: 'Вишиванка «Маків цвіт»',
    category: 'women',
    region: 'Полтавська',
    fabric: '100% льон, ручна вишивка',
    price: 2850,
    oldPrice: null,
    badge: 'new',
    sizes: ['XS','S','M','L','XL'],
    image: imgProduct1,
  },
  {
    id: 2,
    name: 'Сорочка «Карпатські мотиви»',
    category: 'men',
    region: 'Гуцульська',
    fabric: '100% льон, хрестик',
    price: 2400,
    oldPrice: 2900,
    badge: 'sale',
    sizes: ['S','M','L','XL','XXL'],
    image: imgProduct2,
  },
  {
    id: 3,
    name: 'Вишиванка «Ромашкова поляна»',
    category: 'women',
    region: 'Подільська',
    fabric: 'Бавовна + льон, гладь',
    price: 1980,
    oldPrice: null,
    badge: 'handmade',
    sizes: ['XS','S','M','L'],
    image: imgProduct3,
  },
  {
    id: 4,
    name: 'Дитяча вишиванка «Сонечко»',
    category: 'children',
    region: 'Слобожанська',
    fabric: '100% бавовна, машинна вишивка',
    price: 980,
    oldPrice: null,
    badge: 'new',
    sizes: ['98','104','110','116','122','128'],
    image: imgProduct4,
  },
  {
    id: 5,
    name: 'Вишиванка «Волинська зоря»',
    category: 'women',
    region: 'Волинська',
    fabric: '100% льон, ришельє',
    price: 3200,
    oldPrice: null,
    badge: null,
    sizes: ['XS','S','M','L','XL'],
    image: imgProduct5,
  },
  {
    id: 6,
    name: 'Сорочка «Чорногора»',
    category: 'men',
    region: 'Гуцульська',
    fabric: 'Льон + вовна, ручна вишивка',
    price: 3600,
    oldPrice: null,
    badge: 'handmade',
    sizes: ['M','L','XL','XXL'],
    image: imgProduct6,
  },
  {
    id: 7,
    name: 'Хустина «Буковинська»',
    category: 'accessories',
    region: 'Буковинська',
    fabric: 'Шовк, ручна вишивка',
    price: 780,
    oldPrice: null,
    badge: 'new',
    sizes: ['one-size'],
    image: imgProduct7,
  },
  {
    id: 8,
    name: 'Вишиванка «Барвінок»',
    category: 'women',
    region: 'Полтавська',
    fabric: '100% льон, гладь + ришельє',
    price: 2650,
    oldPrice: 3100,
    badge: 'sale',
    sizes: ['S','M','L','XL'],
    image: imgProduct8,
  },
  {
    id: 9,
    name: 'Дитяча вишиванка «Лелека»',
    category: 'children',
    region: 'Подільська',
    fabric: 'Бавовна, машинна вишивка',
    price: 1100,
    oldPrice: null,
    badge: null,
    sizes: ['98','104','110','116','122'],
    image: imgProduct9,
  },
  {
    id: 10,
    name: 'Пояс «Козацький»',
    category: 'accessories',
    region: 'Слобожанська',
    fabric: 'Вовна, ручне плетіння',
    price: 560,
    oldPrice: null,
    badge: 'handmade',
    sizes: ['S/M','L/XL'],
    image: imgProduct10,
  },
  {
    id: 11,
    name: 'Сорочка «Гетьманська»',
    category: 'men',
    region: 'Полтавська',
    fabric: '100% льон, ручна вишивка',
    price: 2980,
    oldPrice: null,
    badge: 'new',
    sizes: ['S','M','L','XL','XXL','3XL'],
    image: imgProduct10, // використовується imgProduct10 — Product11.jpg відсутній
  },
  {
    id: 12,
    name: 'Вишиванка «Троянда»',
    category: 'women',
    region: 'Буковинська',
    fabric: 'Льон + батист, гладь',
    price: 3450,
    oldPrice: null,
    badge: null,
    sizes: ['XS','S','M','L'],
    image: imgProduct12,
  },
];

export function formatPrice(price) {
  return `${price.toLocaleString('uk-UA')} ₴`;
}
