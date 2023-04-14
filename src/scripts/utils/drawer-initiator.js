const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    // Close drawer after clicking on an item
    drawer.querySelectorAll('.nav__item').forEach((item) => {
      item.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });

    window.addEventListener('resize', () => {
      this._handleNavItemsFocusable(drawer);
    });
  },

  _isDrawerOpen(drawer) {
    return drawer.classList.contains('show');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show');

    this._handleNavItemsFocusable(drawer);
  },

  _handleNavItemsFocusable(drawer) {
    if (this._isNavItemsFocusable(drawer)) {
      this._addNavItemsFocusable(drawer);
    } else {
      this._removeNavItemsFocusable(drawer);
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show');

    if (!this._isNavItemsFocusable(drawer)) {
      this._removeNavItemsFocusable(drawer);
    }
  },

  _isNavItemsFocusable(drawer) {
    return this._isDrawerOpen(drawer)
      || window.matchMedia('(min-width: 600px)').matches;
  },

  _removeNavItemsFocusable(drawer) {
    drawer.querySelectorAll('.nav__item a').forEach((item) => {
      item.setAttribute('tabindex', '-1');
    });
  },

  _addNavItemsFocusable(drawer) {
    drawer.querySelectorAll('.nav__item a').forEach((item) => {
      item.setAttribute('tabindex', '0');
    });
  },
};

export default DrawerInitiator;
