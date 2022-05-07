import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.jpg">
          <source media="(max-width: 900px)" srcset="./images/heros/hero-image-large.jpg">
          <img class="hero__image" src="./images/heros/hero-image.jpg" alt="Hero">
        </picture>
        <div class="hero__inner">
          <h2>The Fresto</h2>
          <p>Enjoy the fresh dish in the fresh restaurant</p>
        </div>
      </div>
      <div class="wrapper">
        <section class="section">
          <h2 class="section__title">Explore Restaurant</h2>
          <restaurant-list></restaurant-list>
        </section>
      </div>
    `;
  },

  async afterRender() {
    // Render the restaurant list.
    const restaurantList = document.querySelector('restaurant-list');
    const restaurants = await RestaurantSource.getRestaurants();

    if (restaurants.length === 0) {
      restaurantList.renderError('Something went wrong while getting the restaurants.');
    } else {
      restaurantList.restaurants = restaurants;
    }
  },
};

export default Home;
