const view = document.getElementsByClassName('view')[0];
const cover = document.getElementsByClassName('cover')[0];
const loader = document.getElementsByClassName('loader')[0];
const scroll = document.getElementsByClassName('scroll')[0];

document.addEventListener("DOMContentLoaded", () => {
    imagesLoaded(view, () => {
        resize(view);
        view.style.background = "#f7d04e";
        view.style.boxShadow = "0 0 100px 10px #0d0d0dde";
        cover.style.opacity = 1;
        loader.style.opacity = 0;
    });

    const simpleBar = new SimpleBar(scroll);
    window.onresize = function () {
        resize(view);
    };
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