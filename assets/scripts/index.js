(function() {
	let header = {
		nav: document.querySelector('header .nav'),
		navToggle: document.querySelector('header .nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click', () => this.navToggleClick());
		},

		navToggleClick() {
			this.nav.classList.toggle('active');
			this.navToggle.classList.toggle('active');
		},
	};

	header.initialize();
})();
