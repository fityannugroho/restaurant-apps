import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-list';
import './components/dish-list';
import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const app = new App({
  button: document.querySelector('#navToggle'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});
