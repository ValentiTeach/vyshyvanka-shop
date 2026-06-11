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
    name: 'Гуцульське плаття',
    category: 'women',
    region: 'Гуцульщина',
    fabric: '100% льон',
    price: 4500,
    oldPrice: null,
    badge: 'new',
    sizes: ['XS','S','M','L','XL'],
    image: imgProduct1,
  },
  {
    id: 2,
    name: 'Плаття «Карпатські мотиви»',
    category: 'women',
    region: 'Гуцульщина',
    fabric: '100% льон, хрестик',
    price: 3500,
    oldPrice: 4000,
    badge: 'sale',
    sizes: ['S','M','L','XL','XXL'],
    image: imgProduct2,
  },
  {
    id: 3,
    name: 'Вишиванка «Ромашкова поляна»',
    category: 'women',
    region: 'Подільська',
    fabric: 'Бавовна + льон, хрестик',
    price: 1950,
    oldPrice: 2000,
    badge: 'sale',
    sizes: ['S','M','L','XL','XXL'],
    image: imgProduct3,
  },
  {
    id: 4,
    name: 'Вишиванка «Сонечко»',
    category: 'women',
    region: 'Слобожанська',
    fabric: '100% бавовна, гладь,  рукав "БОХО" ',
    price: 2000,
    oldPrice: null,
    badge: 'new',
    sizes: ['S','M','L','XL','XXL'],
    image: imgProduct4,
  },
  {
    id: 5,
    name: 'Вишиванка «Південна зоря»',
    category: 'women',
    region: 'Південь, Схід',
    fabric: '100% льон, квіткова гладь',
    price: 2200,
    oldPrice: null,
    badge: null,
    sizes: ['S','M','L','XL','XXL'],
    image: imgProduct5,
  },
  {
    id: 6,
    name: 'Плаття «Колоски»',
    category: 'women',
    region: 'Modern',
    fabric: 'Льон + вовна, гладь',
    price: 3600,
    oldPrice: null,
    badge: 'new',
    sizes: ['M','L','XL','XXL'],
    image: imgProduct6,
  },
  {
    id: 7,
    name: 'Вишиванка «Наталка-Полтавка»',
    category: 'women',
    region: 'Подільська',
    fabric: 'Льон, домоткане полотно',
    price: 2300,
    oldPrice: null,
    badge: 'new',
    sizes: ['M','L','XL','XXL'],
    image: imgProduct7,
  },
  {
    id: 8,
    name: 'Вишиванка «Барвінок»',
    category: 'women',
    region: 'Полтавська',
    fabric: '100% льон, хрестик',
    price: 2650,
    oldPrice: 3100,
    badge: 'sale',
    sizes: ['M','L','XL','XXL'],
    image: imgProduct8,
  },
  {
    id: 9,
    name: 'Вишиванка «Олександра»',
    category: 'women',
    region: 'Cлобожанщина',
    fabric: 'Бавовна, хрестик',
    price: 2100,
    oldPrice: null,
    badge: null,
    sizes: ['M','L','XL','XXL'],
    image: imgProduct9,
  },
  {
    id: 10,
    name: 'Вишиванка «Козацька»',
    category: 'women',
    region: 'Слобожанська',
    fabric: 'Вовна, хрестик',
    price: 2800,
    oldPrice: null,
    badge: 'new',
    sizes: ['M','L','XL','XXL'],
    image: imgProduct10,
  },
  {
    id: 12,
    name: 'Вишиванка «Світлана»',
    category: 'women',
    region: 'Подільська',
    fabric: 'Льон + батист, хрестик',
    price: 2100,
    oldPrice: null,
    badge: null,
   sizes: ['M','L','XL','XXL'],
    image: imgProduct12,
  },
];

export function formatPrice(price) {
  return `${price.toLocaleString('uk-UA')} ₴`;
}
