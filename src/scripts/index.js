import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-list';
import './components/dish-list';
import RestaurantSource from './data/restaurant-source';
import App from './views/app';

const app = new App({
  button: document.querySelector('#navToggle'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#main'),
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
