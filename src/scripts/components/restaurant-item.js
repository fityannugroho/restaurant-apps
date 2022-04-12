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
      <section class="restaurant-item__header">
        <img class="restaurant-item__thumbnail" src="${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name}" width="100%">
        <div class="restaurant-item__rating">
          <i class="fa-solid fa-star"></i>
          <p title="Rating">${this._restaurant.rating}</p>
        </div>
      </section>
      <section class="restaurant-item__content">
        <p class="restaurant-item__content__name">${this._restaurant.name}</p>
        <div class="restaurant-item__content__city">
          <i class="fa-solid fa-location-dot"></i>
          <p title="Location">${this._restaurant.city}</p>
        </div>
        <p class="restaurant-item__content__description">${this._restaurant.description}</p>
      </section>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
