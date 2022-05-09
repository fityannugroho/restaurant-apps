const assert = require('assert');

Feature('Customer Review');

Before(({I}) => {
  I.amOnPage('/');
  I.waitForElement('restaurant-item');
});

Scenario('adding a review', async ({ I }) => {
  const inputNameValue = 'John Doe';
  const inputReviewValue = 'This is a test review.';

  const firstRestaurant = locate('restaurant-item').first();
  I.waitForElement(firstRestaurant);
  I.click(firstRestaurant);

  const reviewForm = locate('#reviewForm');
  I.seeElement(reviewForm);
  I.fillField('#name', inputNameValue);
  I.fillField('#review', inputReviewValue);

  const submitButton = locate('.reviews__form__submit');
  I.seeElement(submitButton);
  I.saveElementScreenshot(reviewForm, 'review-form.png');
  // ! Fails in here.
  I.click(submitButton);

  I.waitForElement('#reviews');
  I.seeElement('.review-item');
  const myReviewItem = locate('.review-item').last();
  const myReviewName = await I.grabTextFrom(myReviewItem.find('.review-item__name'));
  const myReviewReview = await I.grabTextFrom(myReviewItem.find('.review-item__review'));
  assert.strictEqual(myReviewName, inputNameValue);
  assert.strictEqual(myReviewReview, inputReviewValue);
});
