import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this._render();
  }

  _render() {
    this._resetView();
    this.setAttribute('role', 'list');
    this._menus.forEach((menu) => {
      const menuItem = document.createElement('menu-item');
      menuItem.menu = menu;
      this.appendChild(menuItem);
    });
  }

  _resetView() {
    this.innerHTML = '';
  }
}

customElements.define('menu-list', MenuList);
