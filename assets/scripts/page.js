(function() {
	let page = {
		header: document.querySelector('header'),
		isScrolling: false,

		setHeaderGhost() {
			if (window.scrollY > 64) {
				this.header.classList.remove('ghost');
			}
			else {
				this.header.classList.add('ghost');
			}
		},
	};

	window.addEventListener('scroll', () => {
		page.isScrolling = true;
	});

	setInterval(() => {
			if (page.isScrolling) {
				page.isScrolling = false;
				page.setHeaderGhost();
			}
	}, 200);
})();
