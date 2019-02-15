const view = document.getElementsByClassName("view")[0];
const cover = document.getElementsByClassName("cover")[0];
const loader = document.getElementsByClassName("loader")[0];
const popup = document.getElementsByClassName("popup")[0];
const popupClose = document.getElementsByClassName("popup__close")[0];
const popupTitle = document.getElementsByClassName("content__title")[0];
const popupGallery = document.getElementsByClassName("content__gallery")[0];
const popupText = document.getElementsByClassName("content__text")[0];
const ship = document.getElementsByClassName("elements__9")[0];

const elementImg = document.getElementsByClassName("element");
const elementBtns = document.getElementsByClassName("element__btn");
const allImgs = document.querySelectorAll("img:not(.popup__img)");

let selectedElement = false;
let elementsInfo = [];

fetch("./assets/map/info.json")
  .then(data => data.json())
  .then(json => (elementsInfo = json.elements.slice()));

document.addEventListener("DOMContentLoaded", () => {
  imagesLoaded(view, () => {
    resize(view);
    view.style.background = "#f7d04e";
    view.style.boxShadow = "0 0 100px 10px #0d0d0dde";
    ship.style.animation = "moveShip 3s linear forwards";
    cover.style.opacity = 1;
    loader.style.opacity = 0;

    Array.prototype.forEach.call(allImgs, img => {
      img.style.display = "block";
    });
  });

  Array.prototype.forEach.call(elementBtns, btn => {
    btn.addEventListener("click", onElementClick);
    btn.addEventListener("focus", onElementFocus);
    btn.addEventListener("blur", onElementBlur);
    btn.addEventListener("keyup", e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        btn.click();
      }
    });
  });

  Array.prototype.forEach.call(elementImg, element => {
    element.addEventListener("mouseover", onElementFocus);
    element.addEventListener("mouseout", onElementBlur);
  });

  popupClose.addEventListener("click", () => {
    selectedElement = false;
    view.style.background = "#f7d04e";
    popup.className = "popup popup--close";

    popupTitle.innerHTML = "";
    popupText.innerHTML = "";
    popupGallery.innerHTML = "";

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

  window.onresize = function () {
    resize(view);
  };

  function onElementFocus() {
    view.style.background = "#d0c4cc";

    Array.prototype.forEach.call(allImgs, img => {
      if (img !== this) {
        if (this.children[0]) {
          if (img !== this.children[0].children[1]) {
            img.style.filter = "hue-rotate(-70deg) grayscale(0.8)";
          }
        } else {
          img.style.filter = "hue-rotate(-70deg) grayscale(0.8)";
        }
      }
    });
  }

  function onElementBlur() {
    if (!selectedElement) {
      view.style.background = "#f7d04e";

      Array.prototype.forEach.call(allImgs, img => {
        if (img !== this.children[0]) {
          img.style.filter = "";
        }
      });
    }
  }

  function onElementClick() {
    selectedElement = true;
    view.style.background = "#d0c4cc";
    popup.className = "popup popup--open";

    Array.prototype.forEach.call(allImgs, img => {
      if (img !== this.children[0].children[1]) {
        img.style.filter = "hue-rotate(-70deg) grayscale(0.8)";
      } else {
        const idReg = /\/([0-9]+).png/;
        const id = Number(img.src.match(idReg)[1]);
        const elemInfo = elementsInfo.find(el => el.id === id);

        if (elemInfo) {
          popupTitle.innerHTML = elemInfo.title;
          popupText.innerHTML = elemInfo.text;

          if (elemInfo.imgs) {
            const gallery = document.createElement("div");
            gallery.className = "gallery__images";

            elemInfo.imgs.forEach(info => {
              const imgLink = document.createElement("a");
              const picture = document.createElement("picture");
              const imgLoader = document.createElement("div");
              const webpSrc = document.createElement("source");
              const smallImage = new Image();

              imgLink.setAttribute("href", info.big.src);
              imgLink.setAttribute("title", info.title);
              webpSrc.setAttribute("type", "image/webp");
              webpSrc.setAttribute("srcset", info.small.webp_src);
              imgLoader.className = "img__loading";

              smallImage.src = info.small.src;
              smallImage.onload = () => {
                imgLoader.style.display = 'none';
                smallImage.style.display = 'block';
              }

              gallery.appendChild(imgLink);
              imgLink.appendChild(imgLoader);
              imgLink.appendChild(picture);
              picture.appendChild(webpSrc);
              picture.appendChild(smallImage);
            });
            popupGallery.appendChild(gallery);
          }

          new SimpleLightbox({
            elements: ".content__gallery a"
          });
        }

        popup.classList.add(
          img.offsetLeft < view.offsetWidth / 2 ? "popup-right" : "popup-left"
        );
      }
    });
  }
});

Array.prototype.forEach.call(allImgs, img => {
  img.style.display = "none";
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
  view.style.fontSize = `${(cover_width / 1920) * 18}px`;
}