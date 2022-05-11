import RESTAURANT_API_ENDPOINT from '../scripts/globals/restaurant-api-endpoint';

const createCategoryTagsTemplate = (categories) => categories.map((category) => `<span class="restaurant-detail__category">${category.name}</span>`).join('');

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant-detail__thumbnail" src="${RESTAURANT_API_ENDPOINT.RESTAURANT_PICTURE('small', restaurant.pictureId)}" alt="${restaurant.name} restaurant view">
  <div class="restaurant-detail__content">
    <h2 class="restaurant-detail__title">${restaurant.name}</h2>
    <table class="restaurant-detail__table">
      <tbody>
        <tr>
          <th>
            <i class="fa-solid fa-star"></i>
            <span>Rating</span>
          </th>
          <td>${(restaurant.rating).toPrecision(2)}</td>
        </tr>
        <tr>
          <th>
            <i class="fa-solid fa-city"></i>
            <span>City</span>
          </th>
          <td>${restaurant.city}</td>
        </tr>
        <tr>
          <th>
            <i class="fa-solid fa-location-dot"></i>
            <span>Address</span>
          </th>
          <td>${restaurant.address}</td>
        </tr>
        <tr>
          <th>
            <i class="fa-solid fa-tag"></i>
            <span>Tags</span>
          </th>
          <td>${createCategoryTagsTemplate(restaurant.categories)}</td>
        </tr>
      </tbody>
    </table>
    <p class="restaurant-detail__description">${restaurant.description}</p>
  </div>
`;

const createMenuItemTemplate = (menu) => `
  <article class="menu-item">
    <span class="menu-item__name">${menu.name}</span>
  </article>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <article class="review-item">
    <div class="review-item__header">
      <strong class="review-item__name">${customerReview.name}</strong>
      <span class="review-item__date">${customerReview.date}</span>
    </div>
    <p class="review-item__content">${customerReview.review}</p>
  </article>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Favorite this restaurant" title="Favorite this restaurant" id="favoriteButton" class="favorite-button">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Unfavorite this restaurant" title="Unfavorite this restaurant" id="favoriteButton" class="favorite-button">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createMenuItemTemplate,
  createCustomerReviewTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
