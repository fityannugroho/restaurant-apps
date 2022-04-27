const FavoriteRestaurants = {
  async render() {
    return `
      <div class="wrapper">
        <section class="section">
          <h2 class="section__title">My Favorite</h2>
          <restaurant-list class="restaurants"></restaurant-list>
        </section>
      </div>
    `;
  },

  async afterRender() {
  },
};

export default FavoriteRestaurants;
