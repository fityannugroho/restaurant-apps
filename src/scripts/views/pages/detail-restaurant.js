import { createMenuItemTemplate, createRestaurantDetailTemplate } from '../../../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <section id="restaurant" class="restaurant-detail"></section>
          <section class="menus">
            <h3 class="menus__title">Menus</h3>
            <h4 class="menus__subtitle">Foods</h4>
            <div id="foodMenus" class="menus__content__list"></div>
            <h4 class="menus__subtitle">Drinks</h4>
            <div id="drinkMenus" class="menus__content__list"></div>
          </section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const foodMenusContainer = document.querySelector('#foodMenus');
    const drinkMenusContainer = document.querySelector('#drinkMenus');
    const { foods, drinks } = restaurant.menus;

    foodMenusContainer.innerHTML = foods.map(createMenuItemTemplate).join('');
    drinkMenusContainer.innerHTML = drinks.map(createMenuItemTemplate).join('');
  },
};

export default DetailRestaurant;
