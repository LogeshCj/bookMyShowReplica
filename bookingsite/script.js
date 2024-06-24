// Function to be executed on click
function handleSearchClick() {
    let name = document.getElementById("movieName").value;
    if (name.trim() != '') {
        let siteName = "https://www.google.com/search?q=" + encodeURIComponent(name);
        window.location.href = siteName;
    } else {
        alert("Please enter a movie name!");
    }
}

// Add event listener to image element
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-bar-icon").addEventListener("click", handleSearchClick);
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;
    const totalSlides = slider.children.length;

    const updateSlider = () => {
        const slideWidth = slider.querySelector('.slide').clientWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 5;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 5) ? currentIndex + 1 : 0;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    document.querySelectorAll('.slide').forEach(slide => {
        slide.addEventListener('click', () => {
            const id = slide.getAttribute('data-id');
            const title = slide.getAttribute('data-title');
            const description = slide.getAttribute('data-description');
            const url = slide.getAttribute('data-url');
            const image = slide.getAttribute('data-image');

            console.log('Clicked movie:', { id, title, description, url, image });

            // Encode the data to be URL-safe
            const redirectUrl = new URL('bookingsite/bookingsite.html', window.location.origin);
            redirectUrl.searchParams.set('id', id);
            redirectUrl.searchParams.set('title', title);
            redirectUrl.searchParams.set('description', description);
            redirectUrl.searchParams.set('url', url);
            redirectUrl.searchParams.set('image', image);

            window.location.href = redirectUrl.href;
        });
    });
});
