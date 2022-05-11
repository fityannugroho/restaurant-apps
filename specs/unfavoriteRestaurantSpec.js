import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavorite a restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.delete(1);
  });

  it('should display the unfavorite button when the restaurant has been favorited', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not display the favorite button when the restaurant has been favorited', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to unfavorite the restaurant', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="Unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.delete(1);
    document.querySelector('[aria-label="Unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
