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

const createFavoriteButtonTemplate = () => `
  <button aria-label="Favorite this restaurant" title="Favorite this restaurant" id="favoriteButton" class="favorite-button">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="Unfavorite this restaurant" title="Unfavorite this restaurant" id="favoriteButton" class="favorite-button">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createMenuItemTemplate,
  createCustomerReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
