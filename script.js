const form = document.querySelector('#rating-form');
const thank_card = document.querySelector('#thank-card');
const users_rating_span = document.querySelector('#users-rating');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // read rating and put the number in the span
    const rating = new FormData(form).get('rating');
    users_rating_span.innerHTML = rating;

    // hide form and show the thank card
    form.style.display = 'none';
    thank_card.style.display = 'block';
});