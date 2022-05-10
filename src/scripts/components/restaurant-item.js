import API_ENDPOINT from '../globals/restaurant-api-endpoint';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.setAttribute('tabindex', '0');
    this.setAttribute('role', 'listitem');
    this._renderSkeleton();
  }

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
  setRestaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _goToDetailPage() {
    const detailPageRoute = '#/restaurants/';
    window.open(detailPageRoute + this._restaurant.id, '_self');
  }

  _renderGoToDetailPageEvent() {
    this.addEventListener('click', this._goToDetailPage);
    this.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this._goToDetailPage();
      }
    });
  }

  _renderSkeleton() {
    this.innerHTML = `
      <section class="restaurant-item__header">
        <img class="restaurant-item__thumbnail lazyload" data-src="" alt="Restaurant footage" width="100%">
        <div class="restaurant-item__rating">
          <i class="fa-solid fa-star"></i>
          <p title="Rating">...</p>
        </div>
      </section>
      <section class="restaurant-item__content">
        <p class="restaurant-item__content__name">Restaurant Name...</p>
        <div class="restaurant-item__content__city">
          <i class="fa-solid fa-location-dot"></i>
          <p title="Location">City...</p>
        </div>
        <p class="restaurant-item__content__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
      </section>
    `;
  }

  _render() {
    this.setAttribute('id', this._restaurant.id);

    const thumbnail = this.querySelector('.restaurant-item__thumbnail');
    thumbnail.classList.replace('lazyloaded', 'lazyload');
    thumbnail.setAttribute('data-src', API_ENDPOINT.RESTAURANT_PICTURE('small', this._restaurant.pictureId));
    thumbnail.setAttribute('alt', `Restaurant ${this._restaurant.name} footage`);

    const rating = this.querySelector('.restaurant-item__rating > p');
    rating.textContent = (this._restaurant.rating).toPrecision(2);

    const name = this.querySelector('.restaurant-item__content__name');
    name.textContent = this._restaurant.name;

    const city = this.querySelector('.restaurant-item__content__city > p');
    city.textContent = this._restaurant.city;

    const description = this.querySelector('.restaurant-item__content__description');
    description.textContent = this._restaurant.description;

    this._renderGoToDetailPageEvent();
  }
}

customElements.define('restaurant-item', RestaurantItem);
