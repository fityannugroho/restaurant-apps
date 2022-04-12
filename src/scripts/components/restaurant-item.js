class RestaurantItem extends HTMLElement {
  /**
   * @param {{
   *    id: string;
   *    name: string;
   *    description: string;
   *    pictureId: string;
   *    city: string;
   *    rating: number;
   * }} restaurant
   */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('role', 'listitem');
    this.setAttribute('id', this._restaurant.id);
    this.classList.add('restaurant-item');
    this.innerHTML = `
      <div class="restaurant-item__header">
        <img class="restaurant-item__thumbnail" src="${this._restaurant.pictureId}" alt="${this._restaurant.name} thumbnail" width="100%">
        <span class="restaurant-item__rating" title="Rating">
          <i class="fa-solid fa-star" role="img">Rating:</i>
          ${this._restaurant.rating}
        </span>
      </div>
      <div class="restaurant-item__content">
        <p class="restaurant-item__content__name">${this._restaurant.name}</p>
        <div class="restaurant-item__content__city">
          <i class="fa-solid fa-location-dot" role="img">Location:</i>
          <span>${this._restaurant.city}</span>
        </div>
        <p class="restaurant-item__content__description">${this._restaurant.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
