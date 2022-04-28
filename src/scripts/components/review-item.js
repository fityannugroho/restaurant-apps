class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this._render();
  }

  _render() {
    const { name, date, review } = this._review;

    this.innerHTML = `
      <div class="review-item__header">
        <strong class="review-item__name">${name}</strong>
        <span class="review-item__date">${date}</span>
      </div>
      <p class="review-item__content">${review}</p>
    `;
  }
}

customElements.define('review-item', ReviewItem);
