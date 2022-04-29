import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._renderLoading();
  }

  /**
   * @param {any[]} restaurants
   */
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    this._resetView();
    this.setAttribute('role', 'list');
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }

  renderMessage(message) {
    this._resetView();
    this.classList.add('message-box');
    this.innerHTML = `
      <p>${message}</p>
    `;
  }

  _renderLoading() {
    this._resetView();
    this.classList.add('message-box');
    this.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      <p>Loading...</p>
    `;
  }

  _resetView() {
    this.innerHTML = '';
    this.classList.remove('message-box');
    this.removeAttribute('role');
  }
}

customElements.define('restaurant-list', RestaurantList);
