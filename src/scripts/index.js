import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/component-loader';
import serviceWorkerRegister from './utils/service-worker-register';
import App from './views/app';

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

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    app.setFocusOnContent();
  }
});
skipToContent.addEventListener('click', () => app.setFocusOnContent());
