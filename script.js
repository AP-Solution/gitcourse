const imgBx = document.querySelector('.imgBx');
		const slides = imgBx.querySelectorAll('img');
		const nextSlide = document.querySelector('.next');
		const prevSlide = document.querySelector('.prev');
		let i = 0;

		console.log(slides[0]);

function autoSlide () {
	slides[i].classList.remove('active');
	i = (i + 1) % slides.length;
	slides[i].classList.add('active');
}

		nextSlide.addEventListener('click', autoSlide);

		prevSlide.addEventListener('click', () => {
			slides[i].classList.remove('active');
			i = (i - 1 + slides.length) % slides.length;
			slides[i].classList.add('active');
		});

setInterval(autoSlide, 5000);