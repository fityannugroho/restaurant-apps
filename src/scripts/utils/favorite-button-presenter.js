import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../../templates/template-creator';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.get(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.put(this._restaurant);
      this._renderFavorited();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.delete(this._restaurant.id);
      this._renderFavorite();
    });
  },
};

export default FavoriteButtonPresenter;
