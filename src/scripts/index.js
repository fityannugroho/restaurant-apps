import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-list';
import './components/dish-list';
import RestaurantSource from './data/restaurant-source';

// ============================================================
// Responsive navbar.
// ============================================================
const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('.nav__list');
const main = document.querySelector('main');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

main.addEventListener('click', () => {
  navList.classList.remove('show');
});

// ============================================================
// Render the restaurant list.
// ============================================================
(async () => {
  const restaurantList = document.querySelector('restaurant-list');
  restaurantList.restaurants = await RestaurantSource.getRestaurants();
})();

// ============================================================
// Render the dish list.
// ============================================================
const dishList = document.querySelector('dish-list');

(async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=French');
    const { meals } = await response.json();
    dishList.dishes = meals;
  } catch (error) {
    dishList.renderError();
    console.error(error);
  }
})();
