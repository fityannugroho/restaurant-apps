import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helpers/testFactories';

describe('Favorite a restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.get(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.put({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createFavoriteButtonPresenterWithRestaurant({});
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
