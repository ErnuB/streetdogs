const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

// modal
document.querySelectorAll('.clickable-text').forEach(function(text) {
	text.addEventListener('click', function() {
		var imageUrl = this.getAttribute('data-image-url');
		document.querySelector('#overlay-image').setAttribute('src', imageUrl);
		document.querySelector('#overlay').style.display = 'flex';
	});
});

document.querySelector('.overlay').addEventListener('click', function(e) {
	if (e.target.classList.contains('overlay') || e.target.classList.contains('close-button')) {
		document.querySelector('.overlay').style.display = 'none';
	}
});