  document.addEventListener("DOMContentLoaded", function (event) {
  	const view = document.getElementsByClassName('view')[0];
  	const cover = document.getElementsByClassName('cover')[0];
  	const loader = document.getElementsByClassName('loader')[0];

  	function resize() {
  		const basic_height = 915;
  		const basic_width = 1680;

  		let window_height = window.innerHeight;
  		let window_width = window.innerWidth;

  		let cover_height;
  		let cover_width;

  		if ((window_height / window_width) > (basic_height / basic_width)) {
  			cover_width = window_width - 20;
  			cover_height = cover_width * basic_height / basic_width;
  		} else {
  			cover_height = window_height - 20;
  			cover_width = cover_height * basic_width / basic_height;
  		}


  		view.style.width = `${cover_width}px`;
  		view.style.height = `${cover_height}px`;
  		view.style.top = `${(window_height-cover_height)/2}px`;
  		view.style.left = `${(window_width-cover_width)/2}px`;
  	}

  	imagesLoaded(view, () => {
  		cover.style.opacity = 1;
  		loader.style.opacity = 0;
  	});

  	window.onresize = function () {
  		resize();
  	};
  });


  resize(view);