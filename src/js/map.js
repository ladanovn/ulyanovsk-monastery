let selectedBuilding = false;

document.addEventListener("DOMContentLoaded", function(event) {
  const view = document.getElementsByClassName("view")[0];
  const cover = document.getElementsByClassName("cover")[0];
  const loader = document.getElementsByClassName("loader")[0];
  const popup = document.getElementsByClassName("popup")[0];
  const popupClose = document.getElementsByClassName("popup__close")[0];

  const buildingImg = document.getElementsByClassName("building");
  const buildingBtns = document.getElementsByClassName("building__btn");
  const allImgs = document.getElementsByTagName("img");

  Array.prototype.forEach.call(buildingBtns, btn => {
    btn.addEventListener("click", onBuildClick);
    btn.addEventListener("focus", onBuildFocus);
    btn.addEventListener("blur", onBuildBlur);
    btn.addEventListener("keyup", e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        btn.click();
      }
    });
  });

  Array.prototype.forEach.call(buildingImg, building => {
    building.addEventListener("mouseover", onBuildFocus);
    building.addEventListener("mouseout", onBuildBlur);
  });

  popupClose.addEventListener("click", () => {
    selectedBuilding = false;
    view.style.background = "#f7d04e";
    popup.className = "popup popup--close";

    Array.prototype.forEach.call(allImgs, img => {
      img.style.filter = "";
    });
  });

  view.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 27) {
      popupClose.click();
    }
  });

  resize(view);

  imagesLoaded(view, () => {
    cover.style.opacity = 1;
    loader.style.opacity = 0;
  });

  window.onresize = function() {
    resize(view);
  };

  function onBuildFocus() {
    view.style.background = "#d0c4cc";

    Array.prototype.forEach.call(allImgs, img => {
      if (img !== this.children[0] && img !== this) {
        img.style.filter = "hue-rotate(-70deg) grayscale(0.8)";
      }
    });
  }

  function onBuildBlur() {
    if (!selectedBuilding) {
      view.style.background = "#f7d04e";

      Array.prototype.forEach.call(allImgs, img => {
        if (img !== this.children[0]) {
          img.style.filter = "";
        }
      });
    }
  }

  function onBuildClick() {
    selectedBuilding = true;
    view.style.background = "#d0c4cc";
    popup.className = "popup popup--open";

    Array.prototype.forEach.call(allImgs, img => {
      if (img !== this.children[0]) {
        img.style.filter = "hue-rotate(-70deg) grayscale(0.8)";
      } else {
        popup.classList.add(
          img.offsetLeft < view.offsetWidth / 2 ? "popup-right" : "popup-left"
        );
      }
    });
  }
});

function resize(view) {
  const basic_height = 1158 - 243;
  const basic_width = 1680;

  let window_height = window.innerHeight;
  let window_width = window.innerWidth;

  let cover_height;
  let cover_width;

  if (window_height / window_width > basic_height / basic_width) {
    cover_width = window_width - 20;
    cover_height = (cover_width * basic_height) / basic_width;
  } else {
    cover_height = window_height - 20;
    cover_width = (cover_height * basic_width) / basic_height;
  }

  view.style.width = `${cover_width}px`;
  view.style.height = `${cover_height}px`;
  view.style.top = `${(window_height - cover_height) / 2}px`;
  view.style.left = `${(window_width - cover_width) / 2}px`;
}
