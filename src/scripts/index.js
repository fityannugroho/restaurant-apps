import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-list';
import data from '../DATA.json';

const { restaurants } = data;
const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('.nav__list');
const main = document.querySelector('main');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

main.addEventListener('click', () => {
  navList.classList.remove('show');
});

// Render the restaurant list.
const restaurantList = document.querySelector('restaurant-list');
restaurantList.restaurants = restaurants;
