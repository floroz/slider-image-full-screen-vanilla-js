const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 2500;
let slideInterval;

const nextSlide = () => {
	// Get Current Class
	const current = document.querySelector('.current');
	// Remove Current Class
	current.classList.remove('current');
	// Check for next Slide
	if (current.nextElementSibling) {
		//If there is a sibling add as current
		current.nextElementSibling.classList.add('current');
	} else {
		// if current is the last element, put current on the first slide
		slides[0].classList.add('current');
	}

	setTimeout(() => {
		current.classList.remove('current');
	});
};

const prevSlide = () => {
	// Get Current Class
	const current = document.querySelector('.current');
	// Remove Current Class
	current.classList.remove('current');
	// Check for prev Slide
	if (current.previousElementSibling) {
		//If there is a sibling add as current
		current.previousElementSibling.classList.add('current');
	} else {
		// if current is the first element, put current on the last slide
		slides[slides.length - 1].classList.add('current');
	}

	setTimeout(() => {
		current.classList.remove('current');
	});
};

next.addEventListener('click', () => {
	if (auto) {
		clearInterval(slideInterval);
	}

	nextSlide();
});
prev.addEventListener('click', () => {
	if (auto) {
		clearInterval(slideInterval);
	}

	prevSlide();
});

// Autoslide
if (auto) {
	//Run next slide
	slideInterval = setInterval(nextSlide, intervalTime);
}
