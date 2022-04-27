import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurants from '../views/pages/favorite-restaurants';

const routes = {
  '/': Home,
  '/restaurants/:id': DetailRestaurant,
  '/favorites': FavoriteRestaurants,
};

export default routes;
