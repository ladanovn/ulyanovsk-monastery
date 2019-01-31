let selectedBuilding = false;

document.addEventListener("DOMContentLoaded", function (event) {
	const view = document.getElementsByClassName('view')[0];
	const cover = document.getElementsByClassName('cover')[0];
	const loader = document.getElementsByClassName('loader')[0];
	const popup = document.getElementsByClassName('popup')[0];
	const popupClose = document.getElementsByClassName('popup__close')[0];
	const vertPattern = document.getElementsByClassName('background__vert-pattern')[0];
	const cloud = document.getElementsByClassName('background__cloud')[0];
	const forest = document.getElementsByClassName('background__forest')[0];
	const mapMonastery = document.getElementsByClassName('monastery__map')[0];
	const decorCow = document.getElementsByClassName('decoration__cow')[0];
	const decorFishmens = document.getElementsByClassName('decoration__fishermen')[0];
	const decorMonarchs = document.getElementsByClassName('decoration__monarchs')[0];
	const decorPahari = document.getElementsByClassName('decoration__pahari')[0];
	const decorShip = document.getElementsByClassName('decoration__ship')[0];
	const decorShipMonarchs = document.getElementsByClassName('decoration__ship-monarchs')[0];
	const buildings = document.getElementsByClassName('building');

	const btns = document.getElementsByClassName('building__btn');
	const imgs = document.getElementsByTagName("img");

	Array.prototype.forEach.call(btns, btn => {
		btn.onclick = () => {
			selectedBuilding = true;
			view.style.background = '#d0c4cc';
			Array.prototype.forEach.call(imgs, img => {
				if (img !== btn.children[0]) {
					img.style.filter = 'hue-rotate(-70deg) grayscale(0.8)'
				}
			});
			popup.className = 'popup popup--open';
		}

		btn.addEventListener('keyup', e => {
			e.preventDefault();
			if (e.keyCode === 13) {
				btn.click()
			}
		});
	});

	Array.prototype.forEach.call(buildings, building => {
		building.addEventListener('mouseover', function () {
			view.style.background = '#d0c4cc';
			Array.prototype.forEach.call(imgs, img => {
				if (img !== this) {
					img.style.filter = 'hue-rotate(-70deg) grayscale(0.8)'
				}
			});
		});

		building.addEventListener('mouseout', function () {
			if (!selectedBuilding) {
				view.style.background = '#f7d04e';
				Array.prototype.forEach.call(imgs, img => {
					if (img !== this) {
						img.style.filter = '';
					}
				});
			}
		});
	});


	popupClose.addEventListener('click', () => {
		Array.prototype.forEach.call(imgs, img => {
			img.style.filter = '';
		});
		selectedBuilding = false;
		view.style.background = '#f7d04e';
		popup.className = 'popup popup--close';
	});

	let window_height;
	let window_width;

	let cover_height;
	let cover_width;

	let coef_height;
	let coef_width;

	resize();

	function resize() {
		viewSize();
		vertPatternSize();
		cloudSize();
		forestSize();
		mapMonasterySize();
		decorCowSize();
		decorFishmensSize();
		decorMonarchsSize();
		decorPahariSize();
		decorShipSize();
		decorShipMonarchsSize();
	}

	function viewSize() {
		const basic_height = 1158 - 243;
		const basic_width = 1680;

		window_height = window.innerHeight;
		window_width = window.innerWidth;

		if ((window_height / window_width) > (basic_height / basic_width)) {
			cover_width = window_width - 20;
			cover_height = window_width * basic_height / basic_width;
		} else {
			cover_height = window_height - 20;
			cover_width = window_height * basic_width / basic_height;
		}

		coef_height = cover_height / basic_height;
		coef_width = cover_width / basic_width;

		view.style.width = `${cover_width}px`;
		view.style.height = `${cover_height}px`;
		view.style.top = `${(window_height-cover_height)/2}px`;
		view.style.left = `${(window_width-cover_width)/2}px`;
	}

	function vertPatternSize() {
		const basic_top = -5 - 220;
		const basic_left = 245;
		const basic_height = 916;
		const basic_width = 258;

		vertPattern.style.width = `${basic_width * coef_width}px`;
		vertPattern.style.height = `${basic_height * coef_height}px`;
		vertPattern.style.top = `${basic_top * coef_height}px`;
		vertPattern.style.left = `${basic_left * coef_width}px`;
	}

	function cloudSize() {
		const basic_top = 220 - 220;
		const basic_left = 77;
		const basic_height = 738;
		const basic_width = 1119;

		cloud.style.width = `${basic_width * coef_width}px`;
		cloud.style.height = `${basic_height * coef_height}px`;
		cloud.style.top = `${basic_top * coef_height}px`;
		cloud.style.left = `${basic_left * coef_width}px`;
	}

	function forestSize() {
		const basic_top = 418 - 220;
		const basic_left = 58;
		const basic_height = 448;
		const basic_width = 1521;

		forest.style.width = `${basic_width * coef_width}px`;
		forest.style.height = `${basic_height * coef_height}px`;
		forest.style.top = `${basic_top * coef_height}px`;
		forest.style.left = `${basic_left * coef_width}px`;
	}

	function mapMonasterySize() {
		const basic_top = 271 - 220;
		const basic_left = 0;
		const basic_height = 887;
		const basic_width = 1652;

		mapMonastery.style.width = `${basic_width * coef_width}px`;
		mapMonastery.style.height = `${basic_height * coef_height}px`;
		mapMonastery.style.top = `${basic_top * coef_height}px`;
		mapMonastery.style.left = `${basic_left * coef_width}px`;
	}

	function decorCowSize() {
		const basic_top = 573 - 220;
		const basic_left = 1169;
		const basic_height = 62;
		const basic_width = 154;

		decorCow.style.width = `${basic_width * coef_width}px`;
		decorCow.style.height = `${basic_height * coef_height}px`;
		decorCow.style.top = `${basic_top * coef_height}px`;
		decorCow.style.left = `${basic_left * coef_width}px`;
	}

	function decorFishmensSize() {
		const basic_top = 973 - 220;
		const basic_left = 608;
		const basic_height = 66;
		const basic_width = 127;

		decorFishmens.style.width = `${basic_width * coef_width}px`;
		decorFishmens.style.height = `${basic_height * coef_height}px`;
		decorFishmens.style.top = `${basic_top * coef_height}px`;
		decorFishmens.style.left = `${basic_left * coef_width}px`;
	}

	function decorMonarchsSize() {
		const basic_top = 799 - 220;
		const basic_left = 799;
		const basic_height = 120;
		const basic_width = 88;

		decorMonarchs.style.width = `${basic_width * coef_width}px`;
		decorMonarchs.style.height = `${basic_height * coef_height}px`;
		decorMonarchs.style.top = `${basic_top * coef_height}px`;
		decorMonarchs.style.left = `${basic_left * coef_width}px`;
	}

	function decorPahariSize() {
		const basic_top = 821 - 220;
		const basic_left = 319;
		const basic_height = 75;
		const basic_width = 224;

		decorPahari.style.width = `${basic_width * coef_width}px`;
		decorPahari.style.height = `${basic_height * coef_height}px`;
		decorPahari.style.top = `${basic_top * coef_height}px`;
		decorPahari.style.left = `${basic_left * coef_width}px`;
	}

	function decorShipSize() {
		const basic_top = 984 - 220;
		const basic_left = 1154;
		const basic_height = 140;
		const basic_width = 309;

		decorShip.style.width = `${basic_width * coef_width}px`;
		decorShip.style.height = `${basic_height * coef_height}px`;
		decorShip.style.top = `${basic_top * coef_height}px`;
		decorShip.style.left = `${basic_left * coef_width}px`;
	}

	function decorShipMonarchsSize() {
		const basic_top = 1005 - 220;
		const basic_left = 1167;
		const basic_height = 57;
		const basic_width = 132;

		decorShipMonarchs.style.width = `${basic_width * coef_width}px`;
		decorShipMonarchs.style.height = `${basic_height * coef_height}px`;
		decorShipMonarchs.style.top = `${basic_top * coef_height}px`;
		decorShipMonarchs.style.left = `${basic_left * coef_width}px`;
	}


	imagesLoaded(view, () => {
		cover.style.opacity = 1;
		loader.style.opacity = 0
	});

	window.onresize = function () {
		resize();
	};
});