import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-list';
import './components/dish-list';
import App from './views/app';

const app = new App({
  button: document.querySelector('#navToggle'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#main'),
});


