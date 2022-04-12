import './dish-item';

class DishList extends HTMLElement {
  /**
   * @param {any[]} dishes
   */
  set dishes(dishes) {
    this._dishes = dishes;
    this.render();
  }

  renderError() {
    this.innerHTML = `
      <style>
        .dishes {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background-color: #f5f5f5;
        }
      </style>
      <p><strong>Sorry!</strong> Something went wrong while getting our dishes.</p>
    `;
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
