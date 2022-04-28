import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this._render();
  }

  _render() {
    this._reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      this.appendChild(reviewItem);
    });
  }
}

customElements.define('review-list', ReviewList);
