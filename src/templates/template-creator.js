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
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
