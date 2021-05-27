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
})({"faqs.js":[function(require,module,exports) {
var faqsOne = document.querySelector('#faqsOne');
var faqsOneDown = document.querySelector('#faqsOneDown');
var faqsOneUp = document.querySelector('#faqsOneUp');
var answerOne = document.querySelector('#answerOne');
var faqsTwo = document.querySelector('#faqsTwo');
var faqsTwoDown = document.querySelector('#faqsTwoDown');
var faqsTwoUp = document.querySelector('#faqsTwoUp');
var answerTwo = document.querySelector('#answerTwo');
var faqsThree = document.querySelector('#faqsThree');
var faqsThreeDown = document.querySelector('#faqsThreeDown');
var faqsThreeUp = document.querySelector('#faqsThreeUp');
var answerThree = document.querySelector('#answerThree');
var faqsFour = document.querySelector('#faqsFour');
var faqsFourDown = document.querySelector('#faqsFourDown');
var faqsFourUp = document.querySelector('#faqsFourUp');
var answerFour = document.querySelector('#answerFour');
var faqsFive = document.querySelector('#faqsFive');
var faqsFiveDown = document.querySelector('#faqsFiveDown');
var faqsFiveUp = document.querySelector('#faqsFiveUp');
var answerFive = document.querySelector('#answerFive');
var faqsSix = document.querySelector('#faqsSix');
var faqsSixDown = document.querySelector('#faqsSixDown');
var faqsSixUp = document.querySelector('#faqsSixUp');
var answerSix = document.querySelector('#answerSix');
var faqsSeven = document.querySelector('#faqsSeven');
var faqsSevenDown = document.querySelector('#faqsSevenDown');
var faqsSevenUp = document.querySelector('#faqsSevenUp');
var answerSeven = document.querySelector('#answerSeven');
var faqsEight = document.querySelector('#faqsEight');
var faqsEightDown = document.querySelector('#faqsEightDown');
var faqsEightUp = document.querySelector('#faqsEightUp');
var answerEight = document.querySelector('#answerEight');

function faqsNav() {
  faqsOneDown.onclick = function () {
    answerOne.style.display = "flex";
    faqsOneDown.style.display = "none";
    faqsOneUp.style.display = "flex";
    faqsOne.style.height = "348px";
  };

  faqsOneUp.onclick = function () {
    answerOne.style.display = "none";
    faqsOneDown.style.display = "flex";
    faqsOneUp.style.display = "none";
    faqsOne.style.height = "196px";
  }; //Two


  faqsTwoDown.onclick = function () {
    answerTwo.style.display = "flex";
    faqsTwoDown.style.display = "none";
    faqsTwoUp.style.display = "flex";
    faqsTwo.style.height = "348px";
  };

  faqsTwoUp.onclick = function () {
    answerTwo.style.display = "none";
    faqsTwoDown.style.display = "flex";
    faqsTwoUp.style.display = "none";
    faqsTwo.style.height = "196px";
  }; //Three


  faqsThreeDown.onclick = function () {
    answerThree.style.display = "flex";
    faqsThreeDown.style.display = "none";
    faqsThreeUp.style.display = "flex";
    faqsThree.style.height = "348px";
  };

  faqsThreeUp.onclick = function () {
    answerThree.style.display = "none";
    faqsThreeDown.style.display = "flex";
    faqsThreeUp.style.display = "none";
    faqsThree.style.height = "196px";
  }; //Four


  faqsFourDown.onclick = function () {
    answerFour.style.display = "flex";
    faqsFourDown.style.display = "none";
    faqsFourUp.style.display = "flex";
    faqsFour.style.height = "348px";
  };

  faqsFourUp.onclick = function () {
    answerFour.style.display = "none";
    faqsFourDown.style.display = "flex";
    faqsFourUp.style.display = "none";
    faqsFour.style.height = "196px";
  }; //Five


  faqsFiveDown.onclick = function () {
    answerFive.style.display = "flex";
    faqsFiveDown.style.display = "none";
    faqsFiveUp.style.display = "flex";
    faqsFive.style.height = "348px";
  };

  faqsFiveUp.onclick = function () {
    answerFive.style.display = "none";
    faqsFiveDown.style.display = "flex";
    faqsFiveUp.style.display = "none";
    faqsFive.style.height = "196px";
  }; //Six


  faqsSixDown.onclick = function () {
    answerSix.style.display = "flex";
    faqsSixDown.style.display = "none";
    faqsSixUp.style.display = "flex";
    faqsSix.style.height = "348px";
  };

  faqsSixUp.onclick = function () {
    answerSix.style.display = "none";
    faqsSixDown.style.display = "flex";
    faqsSixUp.style.display = "none";
    faqsSix.style.height = "196px";
  }; //Seven


  faqsSevenDown.onclick = function () {
    answerSeven.style.display = "flex";
    faqsSevenDown.style.display = "none";
    faqsSevenUp.style.display = "flex";
    faqsSeven.style.height = "348px";
  };

  faqsSevenUp.onclick = function () {
    answerSeven.style.display = "none";
    faqsSevenDown.style.display = "flex";
    faqsSevenUp.style.display = "none";
    faqsSeven.style.height = "196px";
  }; //Eight


  faqsEightDown.onclick = function () {
    answerEight.style.display = "flex";
    faqsEightDown.style.display = "none";
    faqsEightUp.style.display = "flex";
    faqsEight.style.height = "348px";
  };

  faqsEightUp.onclick = function () {
    answerEight.style.display = "none";
    faqsEightDown.style.display = "flex";
    faqsEightUp.style.display = "none";
    faqsEight.style.height = "196px";
  };
}

faqsNav(); //-----------shoveFaqsMoreQuestion

var shove = document.querySelectorAll('.shove');
var faqsMoreQuestion = document.querySelector('#faqsMoreQuestion');
var kolClick = 0;

function shoveFaqsMoreQuestion() {
  faqsMoreQuestion.onclick = function () {
    if (kolClick < 1) {
      kolClick++;
      shove[0].style.display = "block";
      shove[1].style.display = "block";
    } else {
      kolClick = 0;
      shove[0].style.display = "none";
      shove[1].style.display = "none";
    }
  };
}

shoveFaqsMoreQuestion();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49962" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","faqs.js"], null)
//# sourceMappingURL=/faqs.f178f5d6.js.map