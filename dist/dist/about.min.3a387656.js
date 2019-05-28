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
})({"js/about.min.js":[function(require,module,exports) {
eval(function (p, a, c, k, _e, d) {
  _e = function e(c) {
    return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };

  if (!''.replace(/^/, String)) {
    while (c--) {
      d[_e(c)] = k[c] || _e(c);
    }

    k = [function (e) {
      return d[e];
    }];

    _e = function _e() {
      return '\\w+';
    };

    c = 1;
  }

  ;

  while (c--) {
    if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
  }

  return p;
}('"o C";4 3=9.f(\'3\')[0];4 h=9.f(\'h\')[0];4 l=9.f(\'l\')[0];4 i=9.f(\'i\')[0];9.P("O",e(){N(3,e(){k(3);3.5.M="#L";3.5.K="0 0 J I #H";h.5.m=1;l.5.m=0});4 B=A z(i);j.x=e(){k(3)}});e k(3){4 g=u-Q;4 b=s;4 c=j.r;4 d=j.p;4 7;4 6;G(c/d>g/b){6=d-n;7=6*g/b}F{7=c-n;6=7*b/g}3.5.y="".a(6,"8");3.5.w="".a(7,"8");3.5.v="".a((c-7)/2,"8");3.5.E="".a((d-6)/2,"8");3.5.D="".a(6/q*t,"8")}', 53, 53, '|||view|var|style|cover_width|cover_height|px|document|concat|basic_width|window_height|window_width|function|getElementsByClassName|basic_height|cover|scroll|window|resize|loader|opacity|20|use|innerWidth|1920|innerHeight|1680|18|1158|top|height|onresize|width|SimpleBar|new|simpleBar|strict|fontSize|left|else|if|0d0d0dde|10px|100px|boxShadow|f7d04e|background|imagesLoaded|DOMContentLoaded|addEventListener|243'.split('|'), 0, {}));
},{}]