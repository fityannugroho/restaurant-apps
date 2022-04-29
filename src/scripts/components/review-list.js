import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this._render();
  }

  _render() {
    this._resetView();
    this.setAttribute('role', 'list');
    this._reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      this.appendChild(reviewItem);
    });
  }

  _resetView() {
    this.innerHTML = '';
  }
}

customElements.define('review-list', ReviewList);
