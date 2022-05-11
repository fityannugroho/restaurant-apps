import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
