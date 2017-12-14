/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppService = function () {
    function AppService() {
        _classCallCheck(this, AppService);

        this.BASE_URL = "http://private-da937a-izitest1.apiary-mock.com/";
        this.ENDPOINT_FIELDS = "fields";
    }

    _createClass(AppService, [{
        key: "get",
        value: function get(success, fail) {

            fetch("" + this.BASE_URL + this.ENDPOINT_FIELDS, {
                method: 'get'
            }).then(function (response) {
                response.json().then(function (data) {
                    success(data);
                });
            }).catch(function (error) {
                console.error('Failed retrieving information', err);
            });
        }
    }, {
        key: "saveData",
        value: function saveData(userData) {
            var _storage = localStorage;
            console.log(userData);
            // localStorage.setItem(userData.name);
            // localStorage.setItem(userData.cpf);
            // localStorage.setItem(userData.telefone);
            // localStorage.setItem(userData.endereco);
            // localStorage.setItem(userData.file);
        }
    }]);

    return AppService;
}();

exports.default = AppService;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(0);

var _AppService2 = _interopRequireDefault(_AppService);

var _AppController = __webpack_require__(3);

var _AppController2 = _interopRequireDefault(_AppController);

var _FormController = __webpack_require__(4);

var _FormController2 = _interopRequireDefault(_FormController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppMain = function AppMain() {
    _classCallCheck(this, AppMain);

    new _AppService2.default();
    new _AppController2.default();
    new _FormController2.default();
};

window.onload = function () {
    new AppMain();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppControler = function AppControler() {
    _classCallCheck(this, AppControler);
};

exports.default = AppControler;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppService = __webpack_require__(0);

var _AppService2 = _interopRequireDefault(_AppService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormController = function () {
    function FormController() {
        _classCallCheck(this, FormController);

        this.service = new _AppService2.default();
        this.getFields();
    }

    _createClass(FormController, [{
        key: 'getFields',
        value: function getFields() {
            var _this = this;

            this.service.get(function (response) {
                _this.onSuccess(response);
            }, function (fail) {
                _this.onFail(fail);
            });

            return;
        }
    }, {
        key: 'onSuccess',
        value: function onSuccess(response) {
            this.buildForm(response);
        }
    }, {
        key: 'onFail',
        value: function onFail(fail) {
            console.log(fail);
        }
    }, {
        key: 'buildForm',
        value: function buildForm(fields) {

            var _field = void 0;
            var _container = document.getElementsByClassName('section__content')[0];
            var _form = document.createElement("form");
            _form.setAttribute("id", "form");
            _container.appendChild(_form);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _field = _step.value;

                    var _input = document.createElement("input");

                    _input.setAttribute("type", _field.type);
                    _input.setAttribute("id", _field.id);
                    _input.setAttribute("name", _field.name);
                    _input.setAttribute("placeholder", _field.placeholder);

                    _form.appendChild(_input);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'setListeners',
        value: function setListeners() {
            var _this2 = this;

            var _form = document.getElementById("form");

            _form.addEventListener("submit", function (event) {
                event.preventDefault();
                _this2.sendUserData(event);
            });
        }
    }, {
        key: 'sendUserData',
        value: function sendUserData() {
            var _name = void 0,
                _cpf = void 0,
                _phone = void 0,
                _address = void 0,
                _file = void 0;

            _name = document.getElementById("txtFullname").value;
            _cpf = document.getElementById("txtCPF").value;
            _phone = document.getElementById("txtPhone").value;
            _address = document.getElementById("txtAddress").value;
            _file = document.getElementById("txtFile").value;

            console.log({
                "nome": _name,
                "cpf": _cpf,
                "phone": _phone,
                "address": _address,
                "file": _file
            });
            this.service.saveData({
                "nome": _name,
                "cpf": _cpf,
                "phone": _phone,
                "address": _address,
                "file": _file
            });
        }
    }]);

    return FormController;
}();

exports.default = FormController;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU3YjRjMDA3ODg0NGY3N2FjMmYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQXBwU2VydmljZSIsIkJBU0VfVVJMIiwiRU5EUE9JTlRfRklFTERTIiwic3VjY2VzcyIsImZhaWwiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJlcnIiLCJ1c2VyRGF0YSIsIl9zdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwibG9nIiwiQXBwTWFpbiIsIndpbmRvdyIsIm9ubG9hZCIsIkFwcENvbnRyb2xlciIsIkZvcm1Db250cm9sbGVyIiwic2VydmljZSIsImdldEZpZWxkcyIsImdldCIsIm9uU3VjY2VzcyIsIm9uRmFpbCIsImJ1aWxkRm9ybSIsImZpZWxkcyIsIl9maWVsZCIsIl9jb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIl9pbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZW5kVXNlckRhdGEiLCJfbmFtZSIsIl9jcGYiLCJfcGhvbmUiLCJfYWRkcmVzcyIsIl9maWxlIiwidmFsdWUiLCJzYXZlRGF0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UUFKSDtBQUtSLHdCQUFRQztBQUxBLGFBQVo7QUFPQSxpQkFBSzdCLE9BQUwsQ0FBYStCLFFBQWIsQ0FBc0I7QUFDbEIsd0JBQVNOLEtBRFM7QUFFbEIsdUJBQVFDLElBRlU7QUFHbEIseUJBQVVDLE1BSFE7QUFJbEIsMkJBQVlDLFFBSk07QUFLbEIsd0JBQVNDO0FBTFMsYUFBdEI7QUFPSDs7Ozs7O2tCQU1VOUIsYyIsImZpbGUiOiJBcHBNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWU3YjRjMDA3ODg0NGY3N2FjMmYiLCJjbGFzcyBBcHBTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5CQVNFX1VSTCA9IFwiaHR0cDovL3ByaXZhdGUtZGE5MzdhLWl6aXRlc3QxLmFwaWFyeS1tb2NrLmNvbS9cIjtcbiAgICAgICAgdGhpcy5FTkRQT0lOVF9GSUVMRFMgPSBcImZpZWxkc1wiXG4gICAgfVxuXG4gICAgZ2V0KHN1Y2Nlc3MsIGZhaWwpe1xuXG4gICAgICAgIGZldGNoKGAke3RoaXMuQkFTRV9VUkx9JHt0aGlzLkVORFBPSU5UX0ZJRUxEU31gLHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCByZXRyaWV2aW5nIGluZm9ybWF0aW9uJywgZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlRGF0YSh1c2VyRGF0YSl7XG4gICAgICAgIGxldCBfc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXJEYXRhLm5hbWUpO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1c2VyRGF0YS5jcGYpO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1c2VyRGF0YS50ZWxlZm9uZSk7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXJEYXRhLmVuZGVyZWNvKTtcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0odXNlckRhdGEuZmlsZSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwU2VydmljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9BcHBTZXJ2aWNlLmpzIiwiaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9BcHBTZXJ2aWNlJztcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvQXBwQ29udHJvbGxlcic7XG5pbXBvcnQgRm9ybUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlcic7XG5cblxuY2xhc3MgQXBwTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG5ldyBBcHBTZXJ2aWNlKCk7XG4gICAgICAgIG5ldyBBcHBDb250cm9sbGVyKCk7XG4gICAgICAgIG5ldyBGb3JtQ29udHJvbGxlcigpO1xuICAgIH1cbiAgICBcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgbmV3IEFwcE1haW4oKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL0FwcE1haW4uanMiLCJcbmNsYXNzIEFwcENvbnRyb2xlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQXBwU2VydmljZS5qcyc7XG5cbmNsYXNzIEZvcm1Db250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IEFwcFNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5nZXRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBnZXRGaWVsZHMoKXtcbiAgICAgICB0aGlzLnNlcnZpY2UuZ2V0KFxuICAgICAgICAgICAocmVzcG9uc2UpID0+IHsgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UpOyB9LFxuICAgICAgICAgICAoZmFpbCkgPT4geyB0aGlzLm9uRmFpbChmYWlsKTsgfVxuICAgICAgIClcblxuICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSl7XG4gICAgICAgdGhpcy5idWlsZEZvcm0ocmVzcG9uc2UpXG4gICAgfVxuXG4gICAgb25GYWlsKGZhaWwpe1xuICAgICAgICBjb25zb2xlLmxvZyhmYWlsKVxuICAgIH1cblxuICAgIGJ1aWxkRm9ybShmaWVsZHMpe1xuXG4gICAgICAgIGxldCBfZmllbGQ7XG4gICAgICAgIGxldCBfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VjdGlvbl9fY29udGVudCcpWzBdO1xuICAgICAgICBsZXQgX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgX2Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpO1xuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9mb3JtKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihfZmllbGQgb2YgZmllbGRzKXtcbiAgICAgICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIF9maWVsZC50eXBlKTtcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBfZmllbGQuaWQpO1xuICAgICAgICAgICAgX2lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgX2ZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgX2lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIF9maWVsZC5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9mb3JtLmFwcGVuZENoaWxkKF9pbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgbGV0IF9mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuXG4gICAgICAgX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIHRoaXMuc2VuZFVzZXJEYXRhKGV2ZW50KTtcbiAgICAgICB9KVxuICAgIH1cbiAgICBzZW5kVXNlckRhdGEoKXtcbiAgICAgICAgbGV0IF9uYW1lLCBfY3BmLCBfcGhvbmUsIF9hZGRyZXNzLCBfZmlsZTtcblxuICAgICAgICBfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RnVsbG5hbWVcIikudmFsdWU7XG4gICAgICAgIF9jcGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENQRlwiKS52YWx1ZTtcbiAgICAgICAgX3Bob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQaG9uZVwiKS52YWx1ZTtcbiAgICAgICAgX2FkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEFkZHJlc3NcIikudmFsdWU7XG4gICAgICAgIF9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRGaWxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHtcbiAgICAgICAgICAgIFwibm9tZVwiOiBfbmFtZSxcbiAgICAgICAgICAgIFwiY3BmXCI6IF9jcGYsXG4gICAgICAgICAgICBcInBob25lXCI6IF9waG9uZSxcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBfYWRkcmVzcyxcbiAgICAgICAgICAgIFwiZmlsZVwiOiBfZmlsZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2F2ZURhdGEoe1xuICAgICAgICAgICAgXCJub21lXCIgOiBfbmFtZSxcbiAgICAgICAgICAgIFwiY3BmXCIgOiBfY3BmLFxuICAgICAgICAgICAgXCJwaG9uZVwiIDogX3Bob25lLFxuICAgICAgICAgICAgXCJhZGRyZXNzXCIgOiBfYWRkcmVzcyxcbiAgICAgICAgICAgIFwiZmlsZVwiIDogX2ZpbGVcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==