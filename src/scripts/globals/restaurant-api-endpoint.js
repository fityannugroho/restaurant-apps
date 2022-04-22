import CONFIG from './config';

const { RESTAURANT_API_URL } = CONFIG;

const RESTAURANT_API_ENDPOINT = {
  RESTAURANT_LIST: `${RESTAURANT_API_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${RESTAURANT_API_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (keyword) => `${RESTAURANT_API_URL}/search?q=${keyword}`,
  CUSTOMER_REVIEW: `${RESTAURANT_API_URL}/review`,
  /**
   * Get restaurant picture.
   * @param {'small'|'medium'|'large'} resolution The image resolution.
   * @param {string} id The image id.
   */
  RESTAURANT_PICTURE: (resolution, id) => `${RESTAURANT_API_URL}/images/${resolution}/${id}`,
};

export default RESTAURANT_API_ENDPOINT;
