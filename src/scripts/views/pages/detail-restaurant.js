import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <div id="favoriteButtonContainer"></div>
          <restaurant-detail></restaurant-detail>
          <section class="menus">
            <h3 class="menus__title">Menus</h3>
            <h4 class="menus__subtitle">Foods</h4>
            <menu-list id="foods"></menu-list>
            <h4 class="menus__subtitle">Drinks</h4>
            <menu-list id="drinks"></menu-list>
          </section>
          <section class="reviews">
            <h3 class="reviews__title">What Customer Say</h3>
            <review-list></review-list>
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

    // Render restaurant detail.
    const restaurantDetail = document.querySelector('restaurant-detail');
    restaurantDetail.restaurant = restaurant;

    // Render menus.
    const foodList = document.querySelector('menu-list#foods');
    const drinkList = document.querySelector('menu-list#drinks');
    const { foods, drinks } = restaurant.menus;

    foodList.menus = foods;
    drinkList.menus = drinks;

    // Render reviews.
    this._renderCustomerReviews(restaurant.customerReviews);

    // Render favorite button.
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

    // Add event listener to review form.
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const review = {
        id: restaurant.id,
        name: reviewForm.name.value,
        review: reviewForm.review.value,
      };

      const updatedCustomerReviews = await RestaurantSource.postReview(review);
      if (updatedCustomerReviews) {
        this._renderCustomerReviews(updatedCustomerReviews);
        reviewForm.reset();
      }
    });
  },

  _renderCustomerReviews(customerReviews) {
    const reviewList = document.querySelector('review-list');
    reviewList.reviews = customerReviews;
  },
};

export default DetailRestaurant;
