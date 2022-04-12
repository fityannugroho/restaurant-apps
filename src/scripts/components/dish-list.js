import './dish-item';

class DishList extends HTMLElement {
  /**
   * @param {any[]} dishes
   */
  set dishes(dishes) {
    this._dishes = dishes;
    this.render();
  }

  render() {
    this._dishes.forEach((dish) => {
      const dishItem = document.createElement('dish-item');
      dishItem.dish = dish;
      this.appendChild(dishItem);
    });
  }
}

customElements.define('dish-list', DishList);
