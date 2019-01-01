"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var cover = document.getElementsByClassName('cover')[0];
  var vertPattern = document.getElementsByClassName('background__vert-pattern')[0];
  var circlePattern = document.getElementsByClassName('background__circle-pattern')[0];
  var textPattern = document.getElementsByClassName('background__text-pattern')[0];
  var trees = document.getElementsByClassName('background__trees')[0];
  var pawsPeacock = document.getElementsByClassName('peacock__paws')[0];
  var tailPeacock = document.getElementsByClassName('peacock__tail')[0];
  var bodyPeacock = document.getElementsByClassName('peacock__body')[0];
  var monastery = document.getElementsByClassName('monastery__photo')[0];
  var titleName = document.getElementsByClassName('title__name')[0];
  var windBird1 = document.getElementsByClassName('title__wind-bird-1')[0];
  var bodyBird1 = document.getElementsByClassName('title__body-bird-1')[0];
  var headBird2 = document.getElementsByClassName('title__head-bird-2')[0];
  var bodyBird2 = document.getElementsByClassName('title__body-bird-2')[0];
  var navMap = document.getElementsByClassName('nav__map')[0];
  var navHistory = document.getElementsByClassName('nav__history')[0];
  var navGalary = document.getElementsByClassName('nav__galary')[0];
  var navAbout = document.getElementsByClassName('nav__about')[0];
  var window_height;
  var window_width;
  var cover_height;
  var cover_width;
  var coef_height;
  var coef_width;
  resize();

  function resize() {
    coverSize();
    vertPatternSize();
    textPatternSize();
    circlePatternSize();
    treesSize();
    pawsPeacockSize();
    tailPeacockSize();
    bodyPeacockSize();
    monasterySize();
    titleNameSize();
    windBird1Size();
    bodyBird1Size();
    headBird2Size();
    bodyBird2Size();
    navMapSize();
    navHistorySize();
    navGalarySize();
    navAboutSize();
  }

  function coverSize() {
    var basic_height = 915;
    var basic_width = 1680;
    window_height = window.innerHeight;
    window_width = window.innerWidth;

    if (window_height / window_width > basic_height / basic_width) {
      cover_width = window_width;
      cover_height = window_width * basic_height / basic_width;
    } else {
      cover_height = window_height;
      cover_width = window_height * basic_width / basic_height;
    }

    coef_height = cover_height / basic_height;
    coef_width = cover_width / basic_width;
    cover.style.width = "".concat(cover_width, "px");
    cover.style.height = "".concat(cover_height, "px");
    cover.style.top = "".concat((window_height - cover_height) / 2, "px");
    cover.style.left = "".concat((window_width - cover_width) / 2, "px");
  }

  function vertPatternSize() {
    var basic_top = -56;
    var basic_left = 117;
    var basic_height = 972;
    var basic_width = 386;
    vertPattern.style.width = "".concat(basic_width * coef_width, "px");
    vertPattern.style.height = "".concat(basic_height * coef_height, "px");
    vertPattern.style.top = "".concat(basic_top * coef_height, "px");
    vertPattern.style.left = "".concat(basic_left * coef_width, "px");
  }

  function textPatternSize() {
    var basic_top = -77;
    var basic_left = 1222;
    var basic_height = 910;
    var basic_width = 695;
    textPattern.style.width = "".concat(basic_width * coef_width, "px");
    textPattern.style.height = "".concat(basic_height * coef_height, "px");
    textPattern.style.top = "".concat(basic_top * coef_height, "px");
    textPattern.style.left = "".concat(basic_left * coef_width, "px");
  }

  function circlePatternSize() {
    var basic_top = 361;
    var basic_left = 895;
    var basic_height = 442;
    var basic_width = 442;
    circlePattern.style.width = "".concat(basic_width * coef_width, "px");
    circlePattern.style.height = "".concat(basic_height * coef_height, "px");
    circlePattern.style.top = "".concat(basic_top * coef_height, "px");
    circlePattern.style.left = "".concat(basic_left * coef_width, "px");
  }

  function treesSize() {
    var basic_top = 579;
    var basic_left = -95;
    var basic_height = 225;
    var basic_width = 1329;
    trees.style.width = "".concat(basic_width * coef_width, "px");
    trees.style.height = "".concat(basic_height * coef_height, "px");
    trees.style.top = "".concat(basic_top * coef_height, "px");
    trees.style.left = "".concat(basic_left * coef_width, "px");
  }

  function pawsPeacockSize() {
    var basic_top = 602;
    var basic_left = 443;
    var basic_height = 38;
    var basic_width = 54;
    pawsPeacock.style.width = "".concat(basic_width * coef_width, "px");
    pawsPeacock.style.height = "".concat(basic_height * coef_height, "px");
    pawsPeacock.style.top = "".concat(basic_top * coef_height, "px");
    pawsPeacock.style.left = "".concat(basic_left * coef_width, "px");
  }

  function tailPeacockSize() {
    var basic_top = 565;
    var basic_left = 268;
    var basic_height = 152;
    var basic_width = 171;
    tailPeacock.style.width = "".concat(basic_width * coef_width, "px");
    tailPeacock.style.height = "".concat(basic_height * coef_height, "px");
    tailPeacock.style.top = "".concat(basic_top * coef_height, "px");
    tailPeacock.style.left = "".concat(basic_left * coef_width, "px");
  }

  function bodyPeacockSize() {
    var basic_top = 419;
    var basic_left = 268;
    var basic_height = 298;
    var basic_width = 313;
    bodyPeacock.style.width = "".concat(basic_width * coef_width, "px");
    bodyPeacock.style.height = "".concat(basic_height * coef_height, "px");
    bodyPeacock.style.top = "".concat(basic_top * coef_height, "px");
    bodyPeacock.style.left = "".concat(basic_left * coef_width, "px");
  }

  function monasterySize() {
    var basic_top = 94;
    var basic_left = 0;
    var basic_height = 821;
    var basic_width = 1680;
    monastery.style.width = "".concat(basic_width * coef_width, "px");
    monastery.style.height = "".concat(basic_height * coef_height, "px");
    monastery.style.top = "".concat(basic_top * coef_height, "px");
    monastery.style.left = "".concat(basic_left * coef_width, "px");
  }

  function titleNameSize() {
    var basic_top = 57;
    var basic_left = 568;
    var basic_height = 228;
    var basic_width = 552;
    titleName.style.width = "".concat(basic_width * coef_width, "px");
    titleName.style.height = "".concat(basic_height * coef_height, "px");
    titleName.style.top = "".concat(basic_top * coef_height, "px");
    titleName.style.left = "".concat(basic_left * coef_width, "px");
  }

  function windBird1Size() {
    var basic_top = 196;
    var basic_left = 578;
    var basic_height = 55;
    var basic_width = 24;
    windBird1.style.width = "".concat(basic_width * coef_width, "px");
    windBird1.style.height = "".concat(basic_height * coef_height, "px");
    windBird1.style.top = "".concat(basic_top * coef_height, "px");
    windBird1.style.left = "".concat(basic_left * coef_width, "px");
  }

  function bodyBird1Size() {
    var basic_top = 178;
    var basic_left = 587;
    var basic_height = 71;
    var basic_width = 83;
    bodyBird1.style.width = "".concat(basic_width * coef_width, "px");
    bodyBird1.style.height = "".concat(basic_height * coef_height, "px");
    bodyBird1.style.top = "".concat(basic_top * coef_height, "px");
    bodyBird1.style.left = "".concat(basic_left * coef_width, "px");
  }

  function headBird2Size() {
    var basic_top = 198;
    var basic_left = 1080;
    var basic_height = 22;
    var basic_width = 22;
    headBird2.style.width = "".concat(basic_width * coef_width, "px");
    headBird2.style.height = "".concat(basic_height * coef_height, "px");
    headBird2.style.top = "".concat(basic_top * coef_height, "px");
    headBird2.style.left = "".concat(basic_left * coef_width, "px");
  }

  function bodyBird2Size() {
    var basic_top = 199;
    var basic_left = 1007;
    var basic_height = 56;
    var basic_width = 87;
    bodyBird2.style.width = "".concat(basic_width * coef_width, "px");
    bodyBird2.style.height = "".concat(basic_height * coef_height, "px");
    bodyBird2.style.top = "".concat(basic_top * coef_height, "px");
    bodyBird2.style.left = "".concat(basic_left * coef_width, "px");
  }

  function navMapSize() {
    var basic_top = 98;
    var basic_left = 271;
    var basic_height = 78;
    var basic_width = 66;
    navMap.style.width = "".concat(basic_width * coef_width, "px");
    navMap.style.height = "".concat(basic_height * coef_height, "px");
    navMap.style.top = "".concat(basic_top * coef_height, "px");
    navMap.style.left = "".concat(basic_left * coef_width, "px");
  }

  function navHistorySize() {
    var basic_top = 212;
    var basic_left = 264;
    var basic_height = 75;
    var basic_width = 87;
    navHistory.style.width = "".concat(basic_width * coef_width, "px");
    navHistory.style.height = "".concat(basic_height * coef_height, "px");
    navHistory.style.top = "".concat(basic_top * coef_height, "px");
    navHistory.style.left = "".concat(basic_left * coef_width, "px");
  }

  function navGalarySize() {
    var basic_top = 330;
    var basic_left = 272;
    var basic_height = 70;
    var basic_width = 68;
    navGalary.style.width = "".concat(basic_width * coef_width, "px");
    navGalary.style.height = "".concat(basic_height * coef_height, "px");
    navGalary.style.top = "".concat(basic_top * coef_height, "px");
    navGalary.style.left = "".concat(basic_left * coef_width, "px");
  }

  function navAboutSize() {
    var basic_top = 432;
    var basic_left = 264;
    var basic_height = 90;
    var basic_width = 88;
    navAbout.style.width = "".concat(basic_width * coef_width, "px");
    navAbout.style.height = "".concat(basic_height * coef_height, "px");
    navAbout.style.top = "".concat(basic_top * coef_height, "px");
    navAbout.style.left = "".concat(basic_left * coef_width, "px");
  }

  window.onresize = function () {
    resize();
  };
});