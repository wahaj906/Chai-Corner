// Smooth scrolling
document.querySelectorAll('nav a').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const target = document.querySelector(e.target.hash);
		window.scrollTo({
			top: target.offsetTop,
			behavior: 'smooth',
		});
	});
});
