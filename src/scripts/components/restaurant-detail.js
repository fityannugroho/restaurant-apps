import RESTAURANT_API_ENDPOINT from '../globals/restaurant-api-endpoint';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    const {
      name, rating, city, address, categories, description, pictureId,
    } = this._restaurant;

    this.innerHTML = `
      <img class="restaurant-detail__thumbnail" src="${RESTAURANT_API_ENDPOINT.RESTAURANT_PICTURE('small', pictureId)}" alt="Restaurant ${name}">
      <div class="restaurant-detail__content">
        <h2 class="restaurant-detail__title">${name}</h2>
        <table class="restaurant-detail__table">
          <tbody>
            <tr>
              <th>
                <i class="fa-solid fa-star"></i>
                <span>Rating</span>
              </th>
              <td>${(rating).toPrecision(2)}</td>
            </tr>
            <tr>
              <th>
                <i class="fa-solid fa-city"></i>
                <span>City</span>
              </th>
              <td>${city}</td>
            </tr>
            <tr>
              <th>
                <i class="fa-solid fa-location-dot"></i>
                <span>Address</span>
              </th>
              <td>${address}</td>
            </tr>
            <tr>
              <th>
                <i class="fa-solid fa-tag"></i>
                <span>Tags</span>
              </th>
              <td>${categories.map((category) => `<span class="restaurant-detail__category">${category.name}</span>`).join('')}</td>
            </tr>
          </tbody>
        </table>
        <p class="restaurant-detail__description">${description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
