// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"vendor/simpleLight/simpleLightbox.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "function" == typeof define && define.amd ? define([], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.SimpleLightbox = e();
}(this, function () {
  function e(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      if (n) for (var i in n) {
        n.hasOwnProperty(i) && (t[i] = n[i]);
      }
    }

    return t;
  }

  function i(t, e) {
    t && e && (t.className += " " + e);
  }

  function s(t, e) {
    t && e && (t.className = t.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " ").trim());
  }

  function o(t) {
    var e = document.createElement("div");
    return e.innerHTML = t.trim(), e.childNodes[0];
  }

  function l(t, e) {
    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
  }

  function r(t) {
    this.init.apply(this, arguments);
  }

  return r.defaults = {
    elementClass: "",
    elementLoadingClass: "slbLoading",
    htmlClass: "slbActive",
    closeBtnClass: "",
    nextBtnClass: "",
    prevBtnClass: "",
    loadingTextClass: "",
    closeBtnCaption: "Close",
    nextBtnCaption: "Next",
    prevBtnCaption: "Previous",
    loadingCaption: "Loading...",
    bindToItems: !0,
    closeOnOverlayClick: !0,
    closeOnEscapeKey: !0,
    nextOnImageClick: !0,
    showCaptions: !0,
    captionAttribute: "title",
    urlAttribute: "href",
    startAt: 0,
    loadingTimeout: 100,
    appendTarget: "body",
    beforeSetContent: null,
    beforeClose: null,
    afterClose: null,
    beforeDestroy: null,
    afterDestroy: null,
    videoRegex: new RegExp(/youtube.com|vimeo.com/)
  }, e(r.prototype, {
    init: function init(n) {
      n = this.options = e({}, r.defaults, n);
      var t,
          i = this;
      n.$items && (t = n.$items.get()), n.elements && (t = [].slice.call("string" == typeof n.elements ? document.querySelectorAll(n.elements) : n.elements)), this.eventRegistry = {
        lightbox: [],
        thumbnails: []
      }, this.items = [], this.captions = [], t && t.forEach(function (t, e) {
        i.items.push(t.getAttribute(n.urlAttribute)), i.captions.push(t.getAttribute(n.captionAttribute)), n.bindToItems && i.addEvent(t, "click", function (t) {
          t.preventDefault(), i.showPosition(e);
        }, "thumbnails");
      }), n.items && (this.items = n.items), n.captions && (this.captions = n.captions);
    },
    addEvent: function addEvent(t, e, n, i) {
      return this.eventRegistry[i || "lightbox"].push({
        element: t,
        eventName: e,
        callback: n
      }), t.addEventListener(e, n), this;
    },
    removeEvents: function removeEvents(t) {
      return this.eventRegistry[t].forEach(function (t) {
        t.element.removeEventListener(t.eventName, t.callback);
      }), this.eventRegistry[t] = [], this;
    },
    next: function next() {
      return this.showPosition(this.currentPosition + 1);
    },
    prev: function prev() {
      return this.showPosition(this.currentPosition - 1);
    },
    normalizePosition: function normalizePosition(t) {
      return t >= this.items.length ? t = 0 : t < 0 && (t = this.items.length - 1), t;
    },
    showPosition: function showPosition(t) {
      var e = this.normalizePosition(t);
      return void 0 !== this.currentPosition && (this.direction = e > this.currentPosition ? "next" : "prev"), this.currentPosition = e, this.setupLightboxHtml().prepareItem(this.currentPosition, this.setContent).show();
    },
    loading: function loading(t) {
      var e = this,
          n = this.options;
      t ? this.loadingTimeout = setTimeout(function () {
        i(e.$el, n.elementLoadingClass), e.$content.innerHTML = '<p class="slbLoadingText ' + n.loadingTextClass + '">' + n.loadingCaption + "</p>", e.show();
      }, n.loadingTimeout) : (s(this.$el, n.elementLoadingClass), clearTimeout(this.loadingTimeout));
    },
    prepareItem: function prepareItem(t, e) {
      var n = this,
          i = this.items[t];
      if (this.loading(!0), this.options.videoRegex.test(i)) e.call(n, o('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="' + i + '"></iframe></div>'));else {
        var s = o('<div class="slbImageWrap"><img class="slbImage" src="' + i + '" /></div>');
        this.$currentImage = s.querySelector(".slbImage"), this.options.showCaptions && this.captions[t] && s.appendChild(o('<div class="slbCaption">' + this.captions[t] + "</div>")), this.loadImage(i, function () {
          n.setImageDimensions(), e.call(n, s), n.loadImage(n.items[n.normalizePosition(n.currentPosition + 1)]);
        });
      }
      return this;
    },
    loadImage: function loadImage(t, e) {
      if (!this.options.videoRegex.test(t)) {
        var n = new Image();
        e && (n.onload = e), n.src = t;
      }
    },
    setupLightboxHtml: function setupLightboxHtml() {
      var t = this.options;
      return this.$el || (this.$el = o('<div class="slbElement ' + t.elementClass + '"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="' + t.closeBtnCaption + '" class="slbCloseBtn ' + t.closeBtnClass + '">×</button>' + (1 < this.items.length ? '<div class="slbArrows"><button type="button" title="' + t.prevBtnCaption + '" class="prev slbArrow' + t.prevBtnClass + '">' + t.prevBtnCaption + '</button><button type="button" title="' + t.nextBtnCaption + '" class="next slbArrow' + t.nextBtnClass + '">' + t.nextBtnCaption + "</button></div>" : "") + "</div></div></div></div>"), this.$content = this.$el.querySelector(".slbContent")), this.$content.innerHTML = "", this;
    },
    show: function show() {
      return this.modalInDom || (document.querySelector(this.options.appendTarget).appendChild(this.$el), i(document.documentElement, this.options.htmlClass), this.setupLightboxEvents(), this.modalInDom = !0), this;
    },
    setContent: function setContent(t) {
      var e = "string" == typeof t ? o(t) : t;
      return this.loading(!1), this.setupLightboxHtml(), s(this.$content, "slbDirectionNext"), s(this.$content, "slbDirectionPrev"), this.direction && i(this.$content, "next" === this.direction ? "slbDirectionNext" : "slbDirectionPrev"), this.options.beforeSetContent && this.options.beforeSetContent(e, this), this.$content.appendChild(e), this;
    },
    setImageDimensions: function setImageDimensions() {
      this.$currentImage && (this.$currentImage.style.maxHeight = ("innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight) + "px");
    },
    setupLightboxEvents: function setupLightboxEvents() {
      var n = this;
      return this.eventRegistry.lightbox.length || this.addEvent(this.$el, "click", function (t) {
        var e = t.target;
        l(e, ".slbCloseBtn") || n.options.closeOnOverlayClick && l(e, ".slbWrap") ? n.close() : l(e, ".slbArrow") ? l(e, ".next") ? n.next() : n.prev() : n.options.nextOnImageClick && 1 < n.items.length && l(e, ".slbImage") && n.next();
      }).addEvent(document, "keyup", function (t) {
        n.options.closeOnEscapeKey && 27 === t.keyCode && n.close(), 1 < n.items.length && ((39 === t.keyCode || 68 === t.keyCode) && n.next(), (37 === t.keyCode || 65 === t.keyCode) && n.prev());
      }).addEvent(window, "resize", function () {
        n.setImageDimensions();
      }), this;
    },
    close: function close() {
      this.modalInDom && (this.runHook("beforeClose"), this.removeEvents("lightbox"), this.$el && this.$el.parentNode.removeChild(this.$el), s(document.documentElement, this.options.htmlClass), this.modalInDom = !1, this.runHook("afterClose")), this.direction = void 0, this.currentPosition = this.options.startAt;
    },
    destroy: function destroy() {
      this.close(), this.runHook("beforeDestroy"), this.removeEvents("thumbnails"), this.runHook("afterDestroy");
    },
    runHook: function runHook(t) {
      this.options[t] && this.options[t](this);
    }
  }), r.open = function (t) {
    var e = new r(t);
    return t.content ? e.setContent(t.content).show() : e.showPosition(e.options.startAt);
  }, r.registerAsJqueryPlugin = function (i) {
    i.fn.simpleLightbox = function (t) {
      var e,
          n = this;
      return this.each(function () {
        i.data(this, "simpleLightbox") || (e = e || new r(i.extend({}, t, {
          $items: n
        })), i.data(this, "simpleLightbox", e));
      });
    }, i.SimpleLightbox = r;
  }, "undefined" != typeof window && window.jQuery && r.registerAsJqueryPlugin(window.jQuery), r;
});
},{}]