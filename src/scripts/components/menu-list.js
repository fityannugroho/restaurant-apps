import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this._render();
  }

  _render() {
    this._menus.forEach((menu) => {
      const menuItem = document.createElement('menu-item');
      menuItem.menu = menu;
      this.appendChild(menuItem);
    });
  }
}

customElements.define('menu-list', MenuList);
