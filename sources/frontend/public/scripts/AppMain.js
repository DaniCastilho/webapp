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

var _ListDataController = __webpack_require__(8);

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

var _MaskController = __webpack_require__(7);

var _MaskController2 = _interopRequireDefault(_MaskController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormController = function () {
    function FormController() {
        _classCallCheck(this, FormController);

        this.service = new _AppService2.default();
        this.dataBase = new _DataBaseService2.default();
        this.map = new _MapController2.default();
        this.mask = new _MaskController2.default();
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
                    _input.required = true;

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
            this.setPatterns();
            this.map.initMap();
        }
    }, {
        key: 'setListeners',
        value: function setListeners() {
            var _this2 = this;

            var _form = document.getElementById("form");
            var _fieldCpf = document.getElementById("txtCPF");
            var _fieldPhone = document.getElementById("txtPhone");

            _form.addEventListener("submit", function (e) {
                e.preventDefault();
                _this2.sendUserData(event);
            });

            _fieldCpf.addEventListener("keyup", function (e) {
                _this2.mask.setMask(e.currentTarget, "cpfMask");
            });
        }
    }, {
        key: 'setPatterns',
        value: function setPatterns() {
            var _fieldName = document.getElementById("txtFullname");
            var _fieldCpf = document.getElementById("txtCPF");
            var _fieldPhone = document.getElementById("txtPhone");

            _fieldName.setAttribute("pattern", "[A-Za-z]");
            _fieldCpf.setAttribute("pattern", "[0-9]");
            _fieldPhone.setAttribute("pattern", "[0-9]");
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MaskController = function () {
    function MaskController() {
        _classCallCheck(this, MaskController);
    }

    _createClass(MaskController, [{
        key: "setMask",
        value: function setMask(obj, fn) {
            var _obj = obj;
            var _fn = fn;

            setTimeout(this.initMask(_obj, _fn), 1);
        }
    }, {
        key: "initMask",
        value: function initMask(obj, fn) {
            var _obj = obj;
            var _fn = fn;

            _obj.value = this._fn(_obj.value);
            console.log(_obj.value);
        }
    }, {
        key: "phoneMask",
        value: function phoneMask(val) {
            console.log(val);
            val = val.replace(/\D/g, "");
            val = val.replace(/^(\d{2})(\d)/g, "($1) $2");
            val = val.replace(/(\d)(\d{4})$/, "$1-$2");
            return val;
        }
    }, {
        key: "cpfMask",
        value: function cpfMask(val) {
            val = val.replace(/\D/g, "");
            val = val.replace(/(\d{3})(\d)/, "$1.$2");
            val = val.replace(/(\d{3})(\d)/, "$1.$2");
            val = val.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            return val;
        }
    }]);

    return MaskController;
}();

exports.default = MaskController;

/***/ }),
/* 8 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQzOTlhYWFmMTJiZGE5MDUxYzkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcFNlcnZpY2UiLCJCQVNFX1VSTCIsIkVORFBPSU5UX0ZJRUxEUyIsInN1Y2Nlc3MiLCJmYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZXJyIiwiRGF0YUJhc2VTZXJ2aWNlIiwidXNlcmRhdGEiLCJfc3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsIl9kYXRhIiwic2V0SXRlbSIsImdldEl0ZW0iLCJNYXBDb250cm9sbGVyIiwiX21hcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfbWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJfaW5wdXQiLCJfc2VhcmNoYm94IiwicGxhY2VzIiwiU2VhcmNoQm94IiwiYWRkTGlzdGVuZXIiLCJzZXRCb3VuZHMiLCJnZXRCb3VuZHMiLCJfbWFya2VycyIsIl9wbGFjZSIsImdldFBsYWNlcyIsImxlbmd0aCIsIl9ib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJmb3JFYWNoIiwiZ2VvbWV0cnkiLCJfaWNvbiIsInVybCIsImljb24iLCJzaXplIiwiU2l6ZSIsIm9yaWdpbiIsIlBvaW50IiwiYW5jaG9yIiwic2NhbGVkU2l6ZSIsInB1c2giLCJNYXJrZXIiLCJtYXAiLCJ0aXRsZSIsIm5hbWUiLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwidmlld3BvcnQiLCJ1bmlvbiIsImV4dGVuZCIsImZpdEJvdW5kcyIsIkFwcE1haW4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJBcHBDb250cm9sZXIiLCJGb3JtQ29udHJvbGxlciIsInNlcnZpY2UiLCJkYXRhQmFzZSIsIm1hc2siLCJnZXRGaWVsZHMiLCJnZXQiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJidWlsZEZvcm0iLCJsb2ciLCJmaWVsZHMiLCJfZmllbGQiLCJfY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9mb3JtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNldExpc3RlbmVycyIsInNldFBhdHRlcm5zIiwiaW5pdE1hcCIsIl9maWVsZENwZiIsIl9maWVsZFBob25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRVc2VyRGF0YSIsImV2ZW50Iiwic2V0TWFzayIsImN1cnJlbnRUYXJnZXQiLCJfZmllbGROYW1lIiwiX25hbWUiLCJfY3BmIiwiX3Bob25lIiwiX2FkZHJlc3MiLCJfZmlsZSIsInZhbHVlIiwic2F2ZURhdGEiLCJNYXNrQ29udHJvbGxlciIsIm9iaiIsImZuIiwiX29iaiIsIl9mbiIsInNldFRpbWVvdXQiLCJpbml0TWFzayIsInZhbCIsInJlcGxhY2UiLCJMaXN0RGF0YUNvbnRyb2xsZXIiLCJkYXRhYmFzZSIsInNldExpc3RlbmVyIiwiX2J1dHRvbkdldERhdGEiLCJsaXN0RGF0YSIsImdldERhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RNQSxVO0FBRUYsMEJBQWE7QUFBQTs7QUFDVCxhQUFLQyxRQUFMLEdBQWdCLGlEQUFoQjtBQUNBLGFBQUtDLGVBQUwsR0FBdUIsUUFBdkI7QUFDSDs7Ozs0QkFFR0MsTyxFQUFTQyxJLEVBQUs7O0FBRWRDLHVCQUFTLEtBQUtKLFFBQWQsR0FBeUIsS0FBS0MsZUFBOUIsRUFBZ0Q7QUFDNUNJLHdCQUFRO0FBRG9DLGFBQWhELEVBR0NDLElBSEQsQ0FHTSxVQUFTQyxRQUFULEVBQW1CO0FBQ2xCQSx5QkFBU0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBcUIsVUFBU0csSUFBVCxFQUFjO0FBQ2hDUCw0QkFBUU8sSUFBUjtBQUNGLGlCQUZEO0FBR04sYUFQRCxFQVFDQyxLQVJELENBUU8sVUFBU0MsS0FBVCxFQUFlO0FBQ2xCQyx3QkFBUUQsS0FBUixDQUFjLCtCQUFkLEVBQStDRSxHQUEvQztBQUNILGFBVkQ7QUFXSDs7Ozs7O2tCQUlVZCxVOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCVGUsZTtBQUVGLCtCQUFh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LEdBQVA7QUFDSDs7O2dDQUVPQSxHLEVBQUk7QUFDUkEsa0JBQUlBLElBQUlDLE9BQUosQ0FBWSxLQUFaLEVBQWtCLEVBQWxCLENBQUo7QUFDQUQsa0JBQUlBLElBQUlDLE9BQUosQ0FBWSxhQUFaLEVBQTBCLE9BQTFCLENBQUo7QUFDQUQsa0JBQUlBLElBQUlDLE9BQUosQ0FBWSxhQUFaLEVBQTBCLE9BQTFCLENBQUo7QUFDQUQsa0JBQUlBLElBQUlDLE9BQUosQ0FBWSxtQkFBWixFQUFnQyxPQUFoQyxDQUFKO0FBQ0EsbUJBQU9ELEdBQVA7QUFDSDs7Ozs7O2tCQUVVUCxjOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ2Y7Ozs7Ozs7O0lBRU1TLGtCO0FBRUYsa0NBQWE7QUFBQTs7QUFDVCxhQUFLQyxRQUFMLEdBQWdCLCtCQUFoQjtBQUNBLGFBQUtDLFdBQUw7QUFDSDs7OztzQ0FDWTtBQUFBOztBQUNULGdCQUFJQyxpQkFBaUJ2RyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXJCO0FBQ0FzRywyQkFBZTNCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUNDLENBQUQsRUFBSztBQUMxQ0Esa0JBQUVDLGNBQUY7QUFDQSxzQkFBSzBCLFFBQUw7QUFDSCxhQUhEO0FBSUg7OzttQ0FDUztBQUNQbkgsb0JBQVFxRSxHQUFSLENBQVksS0FBSzJDLFFBQUwsQ0FBY0ksT0FBZCxFQUFaO0FBQ0Y7Ozs7OztrQkFHVUwsa0IiLCJmaWxlIjoiQXBwTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0Mzk5YWFhZjEyYmRhOTA1MWM5IiwiY2xhc3MgQXBwU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuQkFTRV9VUkwgPSBcImh0dHA6Ly9wcml2YXRlLWRhOTM3YS1peml0ZXN0MS5hcGlhcnktbW9jay5jb20vXCI7XHJcbiAgICAgICAgdGhpcy5FTkRQT0lOVF9GSUVMRFMgPSBcImZpZWxkc1wiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHN1Y2Nlc3MsIGZhaWwpe1xyXG5cclxuICAgICAgICBmZXRjaChgJHt0aGlzLkJBU0VfVVJMfSR7dGhpcy5FTkRQT0lOVF9GSUVMRFN9YCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgcmV0cmlldmluZyBpbmZvcm1hdGlvbicsIGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcFNlcnZpY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsImNsYXNzIERhdGFCYXNlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBzYXZlRGF0YSh1c2VyZGF0YSl7XHJcbiAgICAgICAgbGV0IF9zdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIGxldCBfZGF0YTtcclxuXHJcbiAgICAgICAgZm9yKF9kYXRhIGluIHVzZXJkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9kYXRhLCB1c2VyZGF0YVtfZGF0YV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIGxldCBfZGF0YSA9e1xyXG4gICAgICAgICAgICAnbm9tZScgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICdjcGYnIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcGZcIiksXHJcbiAgICAgICAgICAgICd0ZWxlcGhvbmUnIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwaG9uZVwiKSxcclxuICAgICAgICAgICAgJ2VuZGVyZWNvJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRkcmVzc1wiKSxcclxuICAgICAgICAgICAgJ2ltYWdlbScgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbGVcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBfZGF0YTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXRhQmFzZVNlcnZpY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvRGF0YUJhc2VTZXJ2aWNlLmpzIiwiY2xhc3MgTWFwQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXAoKSB7XHJcbiAgICAgICAgbGV0IF9tYXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKTtcclxuICAgICAgICBsZXQgX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoX21hcENvbnRhaW5lciwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IHsgbGF0OiAtMzMuODY4OCwgbG5nOiAxNTEuMjE5NSB9LFxyXG4gICAgICAgICAgICB6b29tOiAxM1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRBZGRyZXNzXCIpO1xyXG4gICAgICAgIGxldCBfc2VhcmNoYm94ID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3goX2lucHV0KTtcclxuXHJcbiAgICAgICAgX21hcC5hZGRMaXN0ZW5lcignYm91bmRzX2NoYW5nZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIF9zZWFyY2hib3guc2V0Qm91bmRzKF9tYXAuZ2V0Qm91bmRzKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgX21hcmtlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgX3NlYXJjaGJveC5hZGRMaXN0ZW5lcigncGxhY2VzX2NoYW5nZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfcGxhY2UgPSBfc2VhcmNoYm94LmdldFBsYWNlcygpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKF9wbGFjZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBfYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgICAgICAgICBfbWFya2Vycy5mb3JFYWNoKChfcGxhY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghX3BsYWNlLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgX2ljb24gPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IF9wbGFjZS5pY29uLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzEsIDcxKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTcsIDM0KSxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1LCAyNSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX21hcmtlcnMucHVzaChuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIG1hcDogX21hcCxcclxuICAgICAgICAgICAgICAgIGljb246IF9pY29uLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IF9wbGFjZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IF9wbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoX3BsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBfYm91bmRzLnVuaW9uKF9wbGFjZS5nZW9tZXRyeS52aWV3cG9ydCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfYm91bmRzLmV4dGVuZChfcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9tYXAuZml0Qm91bmRzKF9ib3VuZHMpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsIlxyXG5pbXBvcnQgQXBwU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL0FwcFNlcnZpY2UnO1xyXG5pbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXInO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlcic7XHJcbmltcG9ydCBMaXN0RGF0YUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9MaXN0RGF0YUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgTWFwQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL01hcENvbnRyb2xsZXInO1xyXG5cclxuXHJcbmNsYXNzIEFwcE1haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbmV3IEFwcFNlcnZpY2UoKTtcclxuICAgICAgICBuZXcgQXBwQ29udHJvbGxlcigpO1xyXG4gICAgICAgIG5ldyBGb3JtQ29udHJvbGxlcigpO1xyXG4gICAgICAgIG5ldyBMaXN0RGF0YUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBuZXcgTWFwQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgbmV3IEFwcE1haW4oKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwiXHJcbmNsYXNzIEFwcENvbnRyb2xlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQXBwU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9BcHBTZXJ2aWNlJztcclxuaW1wb3J0IERhdGFCYXNlU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UnXHJcbmltcG9ydCBNYXBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL01hcENvbnRyb2xsZXInXHJcbmltcG9ydCBNYXNrQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9NYXNrQ29udHJvbGxlcidcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQXBwU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YUJhc2UgPSBuZXcgRGF0YUJhc2VTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMubWFzayA9IG5ldyBNYXNrQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0RmllbGRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0KFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHsgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UpOyB9LFxyXG4gICAgICAgICAgICAoZmFpbCkgPT4geyB0aGlzLm9uRmFpbChmYWlsKTsgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZEZvcm0ocmVzcG9uc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25GYWlsKGZhaWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWlsKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRm9ybShmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgbGV0IF9maWVsZDtcclxuICAgICAgICBsZXQgX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlY3Rpb25fX2NvbnRlbnQnKVswXTtcclxuICAgICAgICBsZXQgX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICBfZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XHJcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChfZm9ybSk7XHJcblxyXG4gICAgICAgIGxldCBfbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfbWFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFwXCIpO1xyXG5cclxuICAgICAgICBmb3IgKF9maWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgICAgICAgbGV0IF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIF9maWVsZC50eXBlKTtcclxuICAgICAgICAgICAgX2lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIF9maWVsZC5pZCk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIF9maWVsZC5uYW1lKTtcclxuICAgICAgICAgICAgX2lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIF9maWVsZC5wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgIF9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBfZm9ybS5hcHBlbmRDaGlsZChfaW5wdXQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYgKF9maWVsZC50eXBlID09IFwiYWRkcmVzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybS5hcHBlbmRDaGlsZChfbWFwKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0UGF0dGVybnMoKTtcclxuICAgICAgICB0aGlzLm1hcC5pbml0TWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGxldCBfZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgICAgICBsZXQgX2ZpZWxkQ3BmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRDUEZcIik7XHJcbiAgICAgICAgbGV0IF9maWVsZFBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQaG9uZVwiKTtcclxuXHJcbiAgICAgICAgX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFVzZXJEYXRhKGV2ZW50KTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgX2ZpZWxkQ3BmLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PntcclxuICAgICAgICAgICAgdGhpcy5tYXNrLnNldE1hc2soZS5jdXJyZW50VGFyZ2V0LCBcImNwZk1hc2tcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGF0dGVybnMoKXtcclxuICAgICAgICBsZXQgX2ZpZWxkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RnVsbG5hbWVcIik7XHJcbiAgICAgICAgbGV0IF9maWVsZENwZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0Q1BGXCIpO1xyXG4gICAgICAgIGxldCBfZmllbGRQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGhvbmVcIik7XHJcbiBcclxuICAgICAgICBfZmllbGROYW1lLnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgXCJbQS1aYS16XVwiKTtcclxuICAgICAgICBfZmllbGRDcGYuc2V0QXR0cmlidXRlKFwicGF0dGVyblwiLCBcIlswLTldXCIpO1xyXG4gICAgICAgIF9maWVsZFBob25lLnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgXCJbMC05XVwiKTtcclxuICAgIH1cclxuICAgIHNlbmRVc2VyRGF0YSgpIHtcclxuICAgICAgICBsZXQgX25hbWUsIF9jcGYsIF9waG9uZSwgX2FkZHJlc3MsIF9maWxlO1xyXG5cclxuICAgICAgICBfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RnVsbG5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgX2NwZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0Q1BGXCIpLnZhbHVlO1xyXG4gICAgICAgIF9waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGhvbmVcIikudmFsdWU7XHJcbiAgICAgICAgX2FkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEFkZHJlc3NcIikudmFsdWU7XHJcbiAgICAgICAgX2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbEltYWdlXCIpLnZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhQmFzZS5zYXZlRGF0YSh7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBfbmFtZSxcclxuICAgICAgICAgICAgXCJjcGZcIjogX2NwZixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBfcGhvbmUsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBfYWRkcmVzcyxcclxuICAgICAgICAgICAgXCJmaWxlXCI6IF9maWxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyLmpzIiwiY2xhc3MgTWFza0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRNYXNrKG9iaiwgZm4pe1xyXG4gICAgICAgIGxldCBfb2JqID0gb2JqO1xyXG4gICAgICAgIGxldCBfZm4gPSBmbjtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCB0aGlzLmluaXRNYXNrKF9vYmosIF9mbiksIDEpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1hc2sob2JqLCBmbil7XHJcbiAgICAgICAgbGV0IF9vYmogPSBvYmo7XHJcbiAgICAgICAgbGV0IF9mbiA9IGZuO1xyXG5cclxuICAgICAgICBfb2JqLnZhbHVlID0gdGhpcy5fZm4oX29iai52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhfb2JqLnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwaG9uZU1hc2sodmFsKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgdmFsPXZhbC5yZXBsYWNlKC9cXEQvZyxcIlwiKTsgICAgICAgICAgICBcclxuICAgICAgICB2YWw9dmFsLnJlcGxhY2UoL14oXFxkezJ9KShcXGQpL2csXCIoJDEpICQyXCIpOyBcclxuICAgICAgICB2YWw9dmFsLnJlcGxhY2UoLyhcXGQpKFxcZHs0fSkkLyxcIiQxLSQyXCIpO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgY3BmTWFzayh2YWwpe1xyXG4gICAgICAgIHZhbD12YWwucmVwbGFjZSgvXFxEL2csXCJcIik7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhbD12YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkKS8sXCIkMS4kMlwiKTtcclxuICAgICAgICB2YWw9dmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZCkvLFwiJDEuJDJcIik7XHJcbiAgICAgICAgdmFsPXZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGR7MSwyfSkkLyxcIiQxLSQyXCIpOyBcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1hc2tDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL01hc2tDb250cm9sbGVyLmpzIiwiaW1wb3J0IERhdGFCYXNlU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMnXHJcblxyXG5jbGFzcyBMaXN0RGF0YUNvbnRyb2xsZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IERhdGFCYXNlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuICAgIHNldExpc3RlbmVyKCl7XHJcbiAgICAgICAgbGV0IF9idXR0b25HZXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5cIik7XHJcbiAgICAgICAgX2J1dHRvbkdldERhdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdERhdGEoKXtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YWJhc2UuZ2V0RGF0YSgpKVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RGF0YUNvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==