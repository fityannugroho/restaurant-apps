class MenuItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this._render();
  }

  _render() {
    this.setAttribute('role', 'listitem');
    this.innerHTML = `<span class="menu-item__name">${this._menu.name}</span>`;
  }
}

customElements.define('menu-item', MenuItem);
