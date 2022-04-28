import {
  createCustomerReviewTemplate,
  createMenuItemTemplate,
  createRestaurantDetailTemplate,
} from '../../../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <div id="favoriteButtonContainer"></div>
          <section id="restaurant" class="restaurant-detail"></section>
          <section class="menus">
            <h3 class="menus__title">Menus</h3>
            <h4 class="menus__subtitle">Foods</h4>
            <div id="foodMenus" class="menus__content__list"></div>
            <h4 class="menus__subtitle">Drinks</h4>
            <div id="drinkMenus" class="menus__content__list"></div>
          </section>
          <section class="reviews">
            <h3 class="reviews__title">What Customer Say</h3>
            <div id="reviews" class="reviews__list"></div>
            <h4 class="reviews__subtitle">Write a Review</h4>
            <form id="reviewForm" class="reviews__form">
              <div class="reviews__form__field">
                <label class="reviews__form__label" for="name">Your name</label>
                <input class="reviews__form__input" type="text" id="name" name="name" placeholder="My name is..." required>
              </div>
              <div class="reviews__form__field">
                <label class="reviews__form__label" for="review">What do you think about this restaurant?</label>
                <input class="reviews__form__input" type="text" id="review" name="review" placeholder="I think..." required>
              </div>
              <button class="reviews__form__submit" type="submit">Send My Review</button>
            </form>
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

    const reviewsContainer = document.querySelector('#reviews');
    reviewsContainer.innerHTML = restaurant.customerReviews.map(createCustomerReviewTemplate).join('');

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
