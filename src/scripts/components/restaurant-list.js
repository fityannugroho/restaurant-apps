import './restaurant-item';

class RestaurantList extends HTMLElement {
  /**
   * @param {any[]} restaurants
   */
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.setAttribute('role', 'list');
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }

  renderError(message) {
    this.classList.add('error');
    this.innerHTML = `
      <p>${message}</p>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
