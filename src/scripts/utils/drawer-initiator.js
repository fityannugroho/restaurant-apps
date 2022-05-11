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

    // Init items focus.
    if (this._isDrawerOpen(drawer)) {
      this._addNavItemsFocusable(drawer);
    } else {
      this._removeNavItemsFocusable(drawer);
    }
  },

  _isDrawerOpen(drawer) {
    return drawer.classList.contains('show');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show');

    if (this._isNavItemsFocusable(drawer)) {
      this._removeNavItemsFocusable(drawer);
    } else {
      this._addNavItemsFocusable(drawer);
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show');
    this._removeNavItemsFocusable(drawer);
  },

  _isNavItemsFocusable(drawer) {
    const itemsFocusable = [];

    drawer.querySelectorAll('.nav__item a').forEach((item) => {
      itemsFocusable.push(item.getAttribute('tabindex') === '0');
    });

    return itemsFocusable.every((item) => item);
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
