class DishItem extends HTMLElement {
  /**
   * @param {{
   *    idMeal: string;
   *    strMeal: string;
   *    strMealThumb: string;
   *  }} dish
   */
  set dish(dish) {
    this._dish = dish;
    this.render();
  }

  render() {
    this.classList.add('dish-item');
    this.setAttribute('role', 'listitem');
    this.setAttribute('id', this._dish.idMeal);
    this.innerHTML = `
      <img class="dish-item__thumbnail" src="${this._dish.strMealThumb}" alt="${this._dish.strMeal} Picture">
      <div class="dish-item__content">
        <p>${this._dish.strMeal}</p>
      </div>
    `;
  }
}

customElements.define('dish-item', DishItem);
