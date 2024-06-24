// Function to parse URL parameters
function handleSearchClick() {
    let name = document.getElementById("movieName").value;
    if (name.trim() != '') {
        let siteName = "https://www.google.com/search?q=" + encodeURIComponent(name);
        window.location.href = siteName;
    } else {
        alert("Please enter a movie name!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-bar-icon").addEventListener("click", handleSearchClick);
});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', () => {
    const title = getUrlParameter('title');
    const description = getUrlParameter('description');
    const url = getUrlParameter('url');
    const image = getUrlParameter('image');

    console.log('Loaded movie:', { title, description, url, image });

    document.getElementById('movie-title').textContent = title;
    document.getElementById('movie-description').textContent = description;
    document.getElementById('movie-url').href = url;
    document.getElementById('movie-image').src = image;
    document.getElementById('movie-image').alt = title;

    // Handle seat selection
    const seats = document.querySelectorAll('.seat:not(.occupied)');
    const totalAmount = document.getElementById('total-amount');
    const ticketPrice = 150; // Assume ticket price is ₹150

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            updateTotal();
        });
    });

    function updateTotal() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatsCount = selectedSeats.length;
        totalAmount.textContent = selectedSeatsCount * ticketPrice;
    }

    // Handle show timing selection
    const timings = document.querySelectorAll('.time-label input');
    timings.forEach(time => {
        time.addEventListener('change', () => {
            timings.forEach(t => t.parentNode.classList.remove('selected'));
            if (time.checked) {
                time.parentNode.classList.add('selected');
            }
        });
    });

    // Handle payment button
    const paymentButton = document.querySelector('.payment-button');
    paymentButton.addEventListener('click', () => {
        alert('Proceeding to payment');
    });
});
