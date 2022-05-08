import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getAll() {
    const db = await dbPromise;
    return db.getAll(OBJECT_STORE_NAME);
  },

  async get(id) {
    if (!id) {
      return null;
    }

    const db = await dbPromise;
    return db.get(OBJECT_STORE_NAME, id);
  },

  async put(restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return null;
    }

    const db = await dbPromise;
    return db.put(OBJECT_STORE_NAME, restaurant);
  },

  async delete(id) {
    const db = await dbPromise;
    return db.delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
