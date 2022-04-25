const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show');
  },
};

export default DrawerInitiator;
