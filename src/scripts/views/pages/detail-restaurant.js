import { createRestaurantDetailTemplate } from '../../../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <section id="restaurant" class="restaurant-detail"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailRestaurant;
