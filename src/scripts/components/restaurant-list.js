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
    const remainsRestaurant = this._renderRestaurantItemsFromSkeleton(this._restaurants);

    // If there is still some restaurants to render, create new restaurant items.
    if (remainsRestaurant.length > 0) {
      this._renderNewRestaurantItems(remainsRestaurant);
    }
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

  _renderRestaurantItemsFromSkeleton(restaurants) {
    this.querySelectorAll('restaurant-item').forEach((restaurantItem) => {
      const restaurant = restaurants.shift();
      if (restaurant) {
        restaurantItem.setRestaurant(restaurant);
      } else {
        // Remove the restaurant item if there is no more restaurant to render.
        this.removeChild(restaurantItem);
      }
    });

    return restaurants;
  }

  _renderNewRestaurantItems(restaurants) {
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      this.appendChild(restaurantItem);
      restaurantItem.setRestaurant(restaurant);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
