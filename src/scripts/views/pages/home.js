import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="parallax">
        <div class="parallax__inner">
          <h2>Fityan's French Restaurant</h2>
          <p>Experience French cuisine in a different restaurant scenes</p>
        </div>
      </div>
      <div class="wrapper">
        <section class="section">
          <h2 class="section__title">Explore Restaurant</h2>
          <restaurant-list class="restaurants"></restaurant-list>
        </section>
        <section class="section">
          <h2 class="section__title">Explore Dish</h2>
          <dish-list class="dishes"></dish-list>
        </section>
      </div>
    `;
  },

  async afterRender() {
    // Render the restaurant list.
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = await RestaurantSource.getRestaurants();

    // Render the dish list.
    const dishList = document.querySelector('dish-list');
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=French');
      const { meals } = await response.json();
      dishList.dishes = meals;
    } catch (error) {
      dishList.renderError();
      console.error(error);
    }
  },
};

export default Home;
