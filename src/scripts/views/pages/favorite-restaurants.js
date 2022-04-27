import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoriteRestaurants = {
  async render() {
    return `
      <div class="content">
        <div class="wrapper">
          <section class="section">
            <h2 class="section__title">My Favorite Restaurant</h2>
            <restaurant-list class="restaurants"></restaurant-list>
          </section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = await FavoriteRestaurantIdb.getAll();
  },
};

export default FavoriteRestaurants;
