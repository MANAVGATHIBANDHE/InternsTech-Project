// Sample movie data
const movies = [
    {
        title: "Movie Title 1",
        description: "Description of Movie 1",
        rating: 4.5,
        reviews: [
            { user: "User 1", comment: "Great movie!" },
            { user: "User 2", comment: "I loved it." }
        ]
    },
    {
        title: "Movie Title 2",
        description: "Description of Movie 2",
        rating: 3.8,
        reviews: [
            { user: "User 3", comment: "Good storyline." },
            { user: "User 4", comment: "Could be better." }
        ]
    }
    // Add more movie data here
];

// Function to show reviews for a specific movie
function showReviews(movieTitle) {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.innerHTML = ''; // Clear existing reviews

    const movie = movies.find(m => m.title === movieTitle);
    if (movie) {
        const h2 = document.createElement('h2');
        h2.textContent = `Reviews for ${movie.title}`;
        reviewsSection.appendChild(h2);

        movie.reviews.forEach(review => {
            const div = document.createElement('div');
            div.className = 'review';
            div.innerHTML = `<p><strong>${review.user}</strong></p><p>${review.comment}</p>`;
            reviewsSection.appendChild(div);
        });

        reviewsSection.style.display = 'block'; // Show reviews
    }
}

// Add event listeners for buttons
const movieButtons = document.querySelectorAll('.movie button');
movieButtons.forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.parentNode.querySelector('h3').textContent;
        showReviews(movieTitle);
    });
});
