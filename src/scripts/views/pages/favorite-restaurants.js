import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoriteRestaurants = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <section class="section">
            <h2 class="section__title">My Favorite Restaurant</h2>
            <restaurant-list></restaurant-list>
          </section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('restaurant-list');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAll();
      if (restaurants.length === 0) {
        restaurantList.renderMessage('You don\'t favorite any restaurant yet.');
      } else {
        restaurantList.restaurants = restaurants;
      }
    } catch (error) {
      restaurantList.renderMessage('Something went wrong while getting your favorite restaurants.');
    }
  },
};

export default FavoriteRestaurants;
