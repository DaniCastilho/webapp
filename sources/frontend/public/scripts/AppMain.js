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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    }]);

    return AppService;
}();

exports.default = AppService;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataBaseService = function () {
    function DataBaseService() {
        _classCallCheck(this, DataBaseService);
    }

    _createClass(DataBaseService, [{
        key: 'saveData',
        value: function saveData(userdata) {
            var _storage = localStorage;
            var _data = void 0;

            for (_data in userdata) {

                localStorage.setItem(_data, userdata[_data]);
            }
        }
    }, {
        key: 'getData',
        value: function getData() {
            var _data = {
                'nome': localStorage.getItem("name"),
                'cpf': localStorage.getItem("cpf"),
                'telephone': localStorage.getItem("phone"),
                'endereco': localStorage.getItem("address"),
                'imagem': localStorage.getItem("file")
            };

            return _data;
        }
    }]);

    return DataBaseService;
}();

exports.default = DataBaseService;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapController = function () {
    function MapController() {
        _classCallCheck(this, MapController);
    }

    _createClass(MapController, [{
        key: "initMap",
        value: function initMap() {
            var _mapContainer = document.getElementById("map");
            var _map = new google.maps.Map(_mapContainer, {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 13
            });

            var _input = document.getElementById("txtAddress");
            var _searchbox = new google.maps.places.SearchBox(_input);

            _map.addListener('bounds_changed', function () {
                _searchbox.setBounds(_map.getBounds());
            });

            var _markers = [];

            _searchbox.addListener('places_changed', function () {
                var _place = _searchbox.getPlaces()[0];

                if (_place.length == 0) {
                    return;
                }
                var _bounds = new google.maps.LatLngBounds();
                _markers.forEach(function (_place) {
                    if (!_place.geometry) {
                        return;
                    }
                });
                var _icon = {
                    url: _place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                _markers.push(new google.maps.Marker({
                    map: _map,
                    icon: _icon,
                    title: _place.name,
                    position: _place.geometry.location
                }));

                if (_place.geometry.viewport) {
                    _bounds.union(_place.geometry.viewport);
                } else {
                    _bounds.extend(_place.geometry.location);
                }
                _map.fitBounds(_bounds);
            });
        }
    }]);

    return MapController;
}();

exports.default = MapController;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(0);

var _AppService2 = _interopRequireDefault(_AppService);

var _AppController = __webpack_require__(5);

var _AppController2 = _interopRequireDefault(_AppController);

var _FormController = __webpack_require__(6);

var _FormController2 = _interopRequireDefault(_FormController);

var _ListDataController = __webpack_require__(7);

var _ListDataController2 = _interopRequireDefault(_ListDataController);

var _MapController = __webpack_require__(2);

var _MapController2 = _interopRequireDefault(_MapController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppMain = function AppMain() {
    _classCallCheck(this, AppMain);

    new _AppService2.default();
    new _AppController2.default();
    new _FormController2.default();
    new _ListDataController2.default();
    new _MapController2.default();
};

window.onload = function () {
    new AppMain();
};

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppService = __webpack_require__(0);

var _AppService2 = _interopRequireDefault(_AppService);

var _DataBaseService = __webpack_require__(1);

var _DataBaseService2 = _interopRequireDefault(_DataBaseService);

var _MapController = __webpack_require__(2);

var _MapController2 = _interopRequireDefault(_MapController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormController = function () {
    function FormController() {
        _classCallCheck(this, FormController);

        this.service = new _AppService2.default();
        this.dataBase = new _DataBaseService2.default();
        this.map = new _MapController2.default();
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

            var _map = document.createElement("div");
            _map.setAttribute("id", "map");

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

                    if (_field.type == "address") {
                        _form.appendChild(_map);
                    }
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

            this.setListeners();
            this.map.initMap();
        }
    }, {
        key: 'setListeners',
        value: function setListeners() {
            var _this2 = this;

            var _form = document.getElementById("form");

            _form.addEventListener("submit", function (e) {
                e.preventDefault();
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
            _file = document.getElementById("uplImage").value;

            this.dataBase.saveData({
                "name": _name,
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataBaseService = __webpack_require__(1);

var _DataBaseService2 = _interopRequireDefault(_DataBaseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListDataController = function () {
    function ListDataController() {
        _classCallCheck(this, ListDataController);

        this.database = new _DataBaseService2.default();
        this.setListener();
    }

    _createClass(ListDataController, [{
        key: "setListener",
        value: function setListener() {
            var _this = this;

            var _buttonGetData = document.getElementById("btn");
            _buttonGetData.addEventListener("click", function (e) {
                e.preventDefault();
                _this.listData();
            });
        }
    }, {
        key: "listData",
        value: function listData() {
            console.log(this.database.getData());
        }
    }]);

    return ListDataController;
}();

exports.default = ListDataController;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZkOGQwNWY5NGQ4OWJhZjQ5NDkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcFNlcnZpY2UiLCJCQVNFX1VSTCIsIkVORFBPSU5UX0ZJRUxEUyIsInN1Y2Nlc3MiLCJmYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZXJyIiwiRGF0YUJhc2VTZXJ2aWNlIiwidXNlcmRhdGEiLCJfc3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsIl9kYXRhIiwic2V0SXRlbSIsImdldEl0ZW0iLCJNYXBDb250cm9sbGVyIiwiX21hcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfbWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJfaW5wdXQiLCJfc2VhcmNoYm94IiwicGxhY2VzIiwiU2VhcmNoQm94IiwiYWRkTGlzdGVuZXIiLCJzZXRCb3VuZHMiLCJnZXRCb3VuZHMiLCJfbWFya2VycyIsIl9wbGFjZSIsImdldFBsYWNlcyIsImxlbmd0aCIsIl9ib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJmb3JFYWNoIiwiZ2VvbWV0cnkiLCJfaWNvbiIsInVybCIsImljb24iLCJzaXplIiwiU2l6ZSIsIm9yaWdpbiIsIlBvaW50IiwiYW5jaG9yIiwic2NhbGVkU2l6ZSIsInB1c2giLCJNYXJrZXIiLCJtYXAiLCJ0aXRsZSIsIm5hbWUiLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwidmlld3BvcnQiLCJ1bmlvbiIsImV4dGVuZCIsImZpdEJvdW5kcyIsIkFwcE1haW4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJBcHBDb250cm9sZXIiLCJGb3JtQ29udHJvbGxlciIsInNlcnZpY2UiLCJkYXRhQmFzZSIsImdldEZpZWxkcyIsImdldCIsIm9uU3VjY2VzcyIsIm9uRmFpbCIsImJ1aWxkRm9ybSIsImxvZyIsImZpZWxkcyIsIl9maWVsZCIsIl9jb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX2Zvcm0iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInNldExpc3RlbmVycyIsImluaXRNYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZFVzZXJEYXRhIiwiZXZlbnQiLCJfbmFtZSIsIl9jcGYiLCJfcGhvbmUiLCJfYWRkcmVzcyIsIl9maWxlIiwidmFsdWUiLCJzYXZlRGF0YSIsIkxpc3REYXRhQ29udHJvbGxlciIsImRhdGFiYXNlIiwic2V0TGlzdGVuZXIiLCJfYnV0dG9uR2V0RGF0YSIsImxpc3REYXRhIiwiZ2V0RGF0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtB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U0FBU0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q2dGLEtBQS9DO0FBQ0FKLG1CQUFPN0UsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ2dGLEtBQXpDO0FBQ0FILHFCQUFTOUUsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ2dGLEtBQTdDO0FBQ0FGLHVCQUFXL0UsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ2dGLEtBQWpEO0FBQ0FELG9CQUFRaEYsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ2dGLEtBQTVDOztBQUdBLGlCQUFLOUIsUUFBTCxDQUFjK0IsUUFBZCxDQUF1QjtBQUNuQix3QkFBUU4sS0FEVztBQUVuQix1QkFBT0MsSUFGWTtBQUduQix5QkFBU0MsTUFIVTtBQUluQiwyQkFBV0MsUUFKUTtBQUtuQix3QkFBUUM7QUFMVyxhQUF2QjtBQU9IOzs7Ozs7a0JBTVUvQixjOzs7Ozs7Ozs7Ozs7Ozs7QUM5RmY7Ozs7Ozs7O0lBRU1rQyxrQjtBQUVGLGtDQUFhO0FBQUE7O0FBQ1QsYUFBS0MsUUFBTCxHQUFnQiwrQkFBaEI7QUFDQSxhQUFLQyxXQUFMO0FBQ0g7Ozs7c0NBQ1k7QUFBQTs7QUFDVCxnQkFBSUMsaUJBQWlCdEYsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyQjtBQUNBcUYsMkJBQWVmLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUNDLENBQUQsRUFBSztBQUMxQ0Esa0JBQUVDLGNBQUY7QUFDQSxzQkFBS2MsUUFBTDtBQUNILGFBSEQ7QUFJSDs7O21DQUNTO0FBQ1BsRyxvQkFBUW9FLEdBQVIsQ0FBWSxLQUFLMkIsUUFBTCxDQUFjSSxPQUFkLEVBQVo7QUFDRjs7Ozs7O2tCQUdVTCxrQiIsImZpbGUiOiJBcHBNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGZkOGQwNWY5NGQ4OWJhZjQ5NDkiLCJjbGFzcyBBcHBTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5CQVNFX1VSTCA9IFwiaHR0cDovL3ByaXZhdGUtZGE5MzdhLWl6aXRlc3QxLmFwaWFyeS1tb2NrLmNvbS9cIjtcclxuICAgICAgICB0aGlzLkVORFBPSU5UX0ZJRUxEUyA9IFwiZmllbGRzXCJcclxuICAgIH1cclxuXHJcbiAgICBnZXQoc3VjY2VzcywgZmFpbCl7XHJcblxyXG4gICAgICAgIGZldGNoKGAke3RoaXMuQkFTRV9VUkx9JHt0aGlzLkVORFBPSU5UX0ZJRUxEU31gLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCByZXRyaWV2aW5nIGluZm9ybWF0aW9uJywgZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwU2VydmljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9BcHBTZXJ2aWNlLmpzIiwiY2xhc3MgRGF0YUJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuICAgIHNhdmVEYXRhKHVzZXJkYXRhKXtcclxuICAgICAgICBsZXQgX3N0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgbGV0IF9kYXRhO1xyXG5cclxuICAgICAgICBmb3IoX2RhdGEgaW4gdXNlcmRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2RhdGEsIHVzZXJkYXRhW19kYXRhXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCl7XHJcbiAgICAgICAgbGV0IF9kYXRhID17XHJcbiAgICAgICAgICAgICdub21lJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSxcclxuICAgICAgICAgICAgJ2NwZicgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNwZlwiKSxcclxuICAgICAgICAgICAgJ3RlbGVwaG9uZScgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBob25lXCIpLFxyXG4gICAgICAgICAgICAnZW5kZXJlY28nIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICAgICAgICAnaW1hZ2VtJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsZVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIF9kYXRhO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFCYXNlU2VydmljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJjbGFzcyBNYXBDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1hcCgpIHtcclxuICAgICAgICBsZXQgX21hcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpO1xyXG4gICAgICAgIGxldCBfbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChfbWFwQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogeyBsYXQ6IC0zMy44Njg4LCBsbmc6IDE1MS4yMTk1IH0sXHJcbiAgICAgICAgICAgIHpvb206IDEzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IF9zZWFyY2hib3ggPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlNlYXJjaEJveChfaW5wdXQpO1xyXG5cclxuICAgICAgICBfbWFwLmFkZExpc3RlbmVyKCdib3VuZHNfY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgX3NlYXJjaGJveC5zZXRCb3VuZHMoX21hcC5nZXRCb3VuZHMoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBfbWFya2VycyA9IFtdO1xyXG5cclxuICAgICAgICBfc2VhcmNoYm94LmFkZExpc3RlbmVyKCdwbGFjZXNfY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IF9wbGFjZSA9IF9zZWFyY2hib3guZ2V0UGxhY2VzKClbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoX3BsYWNlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IF9ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcbiAgICAgICAgICAgIF9tYXJrZXJzLmZvckVhY2goKF9wbGFjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfcGxhY2UuZ2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBfaWNvbiA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogX3BsYWNlLmljb24sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MSwgNzEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgxNywgMzQpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjUsIDI1KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfbWFya2Vycy5wdXNoKG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgbWFwOiBfbWFwLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogX2ljb24sXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogX3BsYWNlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfcGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcclxuICAgICAgICAgICAgICAgIF9ib3VuZHMudW5pb24oX3BsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9ib3VuZHMuZXh0ZW5kKF9wbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX21hcC5maXRCb3VuZHMoX2JvdW5kcyk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9NYXBDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9BcHBTZXJ2aWNlJztcclxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9BcHBDb250cm9sbGVyJztcclxuaW1wb3J0IEZvcm1Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgTGlzdERhdGFDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyJztcclxuaW1wb3J0IE1hcENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9NYXBDb250cm9sbGVyJztcclxuXHJcblxyXG5jbGFzcyBBcHBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG5ldyBBcHBTZXJ2aWNlKCk7XHJcbiAgICAgICAgbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICBuZXcgRm9ybUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBuZXcgTGlzdERhdGFDb250cm9sbGVyKCk7XHJcbiAgICAgICAgbmV3IE1hcENvbnRyb2xsZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIG5ldyBBcHBNYWluKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvQXBwTWFpbi5qcyIsIlxyXG5jbGFzcyBBcHBDb250cm9sZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQXBwU2VydmljZS5qcyc7XHJcbmltcG9ydCBEYXRhQmFzZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRGF0YUJhc2VTZXJ2aWNlLmpzJ1xyXG5pbXBvcnQgTWFwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9NYXBDb250cm9sbGVyLmpzJ1xyXG5cclxuY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBBcHBTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhQmFzZSA9IG5ldyBEYXRhQmFzZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXBDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRGaWVsZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldChcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7IHRoaXMub25TdWNjZXNzKHJlc3BvbnNlKTsgfSxcclxuICAgICAgICAgICAgKGZhaWwpID0+IHsgdGhpcy5vbkZhaWwoZmFpbCk7IH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRGb3JtKHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmFpbChmYWlsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmFpbClcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEZvcm0oZmllbGRzKSB7XHJcblxyXG4gICAgICAgIGxldCBfZmllbGQ7XHJcbiAgICAgICAgbGV0IF9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uX19jb250ZW50JylbMF07XHJcbiAgICAgICAgbGV0IF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgX2Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2Zvcm0pO1xyXG5cclxuICAgICAgICBsZXQgX21hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgX21hcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcFwiKTtcclxuXHJcbiAgICAgICAgZm9yIChfZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBfZmllbGQudHlwZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBfZmllbGQuaWQpO1xyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBfZmllbGQubmFtZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBfZmllbGQucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICAgICAgX2Zvcm0uYXBwZW5kQ2hpbGQoX2lucHV0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoX2ZpZWxkLnR5cGUgPT0gXCJhZGRyZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtLmFwcGVuZENoaWxkKF9tYXApOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdE1hcCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgbGV0IF9mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG5cclxuICAgICAgICBfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVXNlckRhdGEoZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZW5kVXNlckRhdGEoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lLCBfY3BmLCBfcGhvbmUsIF9hZGRyZXNzLCBfZmlsZTtcclxuXHJcbiAgICAgICAgX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEZ1bGxuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9jcGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENQRlwiKS52YWx1ZTtcclxuICAgICAgICBfcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBob25lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgIF9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxJbWFnZVwiKS52YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUJhc2Uuc2F2ZURhdGEoe1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXHJcbiAgICAgICAgICAgIFwiY3BmXCI6IF9jcGYsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogX3Bob25lLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIFwiZmlsZVwiOiBfZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyLmpzIiwiaW1wb3J0IERhdGFCYXNlU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMnXHJcblxyXG5jbGFzcyBMaXN0RGF0YUNvbnRyb2xsZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IERhdGFCYXNlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuICAgIHNldExpc3RlbmVyKCl7XHJcbiAgICAgICAgbGV0IF9idXR0b25HZXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5cIik7XHJcbiAgICAgICAgX2J1dHRvbkdldERhdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdERhdGEoKXtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YWJhc2UuZ2V0RGF0YSgpKVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RGF0YUNvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==