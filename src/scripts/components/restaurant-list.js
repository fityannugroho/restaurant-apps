import './restaurant-item';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'list');
  }

  /**
   * @param {any[]} restaurants
   */
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      this.appendChild(restaurantItem);
      restaurantItem.restaurant = restaurant;
    });
  }

  renderError(message) {
    this.classList.add('error');
    this.innerHTML = `
      <p>${message}</p>
    `;
  }

  renderRestaurantItemSkeleton(amount = 0) {
    this.innerHTML = '';
    for (let index = 0; index < amount; index += 1) {
      this.innerHTML += '<restaurant-item></restaurant-item>';
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
