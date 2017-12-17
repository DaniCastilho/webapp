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
            // this.setPatterns();
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

            // _fieldCpf.addEventListener("keyup", (e)=>{
            //     this.mask.setMask(e.currentTarget, "cpfMask");
            // })
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
            var _data = this.database.getData();
            var _table = document.getElementById("dados");
            var _row = document.createElement("tr");
            var _item = void 0;
            console.log(_data);
            for (_item in _data) {
                var _collum = document.createElement("td");
                console.log(_data[_item]);
                _collum.innerHTML = _data[_item];
                _row.appendChild(_collum);
            }
            _table.appendChild(_row);
        }
    }]);

    return ListDataController;
}();

exports.default = ListDataController;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGEzOGFhZTM5ODQxNDkyYjBhMmIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcFNlcnZpY2UiLCJCQVNFX1VSTCIsIkVORFBPSU5UX0ZJRUxEUyIsInN1Y2Nlc3MiLCJmYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZXJyIiwiRGF0YUJhc2VTZXJ2aWNlIiwidXNlcmRhdGEiLCJfc3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsIl9kYXRhIiwic2V0SXRlbSIsImdldEl0ZW0iLCJNYXBDb250cm9sbGVyIiwiX21hcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfbWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJfaW5wdXQiLCJfc2VhcmNoYm94IiwicGxhY2VzIiwiU2VhcmNoQm94IiwiYWRkTGlzdGVuZXIiLCJzZXRCb3VuZHMiLCJnZXRCb3VuZHMiLCJfbWFya2VycyIsIl9wbGFjZSIsImdldFBsYWNlcyIsImxlbmd0aCIsIl9ib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJmb3JFYWNoIiwiZ2VvbWV0cnkiLCJfaWNvbiIsInVybCIsImljb24iLCJzaXplIiwiU2l6ZSIsIm9yaWdpbiIsIlBvaW50IiwiYW5jaG9yIiwic2NhbGVkU2l6ZSIsInB1c2giLCJNYXJrZXIiLCJtYXAiLCJ0aXRsZSIsIm5hbWUiLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwidmlld3BvcnQiLCJ1bmlvbiIsImV4dGVuZCIsImZpdEJvdW5kcyIsIkFwcE1haW4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJBcHBDb250cm9sZXIiLCJGb3JtQ29udHJvbGxlciIsInNlcnZpY2UiLCJkYXRhQmFzZSIsIm1hc2siLCJnZXRGaWVsZHMiLCJnZXQiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJidWlsZEZvcm0iLCJsb2ciLCJmaWVsZHMiLCJfZmllbGQiLCJfY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9mb3JtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNldExpc3RlbmVycyIsImluaXRNYXAiLCJfZmllbGRDcGYiLCJfZmllbGRQaG9uZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kVXNlckRhdGEiLCJldmVudCIsIl9maWVsZE5hbWUiLCJfbmFtZSIsIl9jcGYiLCJfcGhvbmUiLCJfYWRkcmVzcyIsIl9maWxlIiwidmFsdWUiLCJzYXZlRGF0YSIsIk1hc2tDb250cm9sbGVyIiwib2JqIiwiZm4iLCJfb2JqIiwiX2ZuIiwic2V0VGltZW91dCIsImluaXRNYXNrIiwidmFsIiwicmVwbGFjZSIsIkxpc3REYXRhQ29udHJvbGxlciIsImRhdGFiYXNlIiwic2V0TGlzdGVuZXIiLCJfYnV0dG9uR2V0RGF0YSIsImxpc3REYXRhIiwiZ2V0RGF0YSIsIl90YWJsZSIsIl9yb3ciLCJfaXRlbSIsIl9jb2xsdW0iLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RNQSxVO0FBRUYsMEJBQWE7QUFBQTs7QUFDVCxhQUFLQyxRQUFMLEdBQWdCLGlEQUFoQjtBQUNBLGFBQUtDLGVBQUwsR0FBdUIsUUFBdkI7QUFDSDs7Ozs0QkFFR0MsTyxFQUFTQyxJLEVBQUs7O0FBRWRDLHVCQUFTLEtBQUtKLFFBQWQsR0FBeUIsS0FBS0MsZUFBOUIsRUFBZ0Q7QUFDNUNJLHdCQUFRO0FBRG9DLGFBQWhELEVBR0NDLElBSEQsQ0FHTSxVQUFTQyxRQUFULEVBQW1CO0FBQ2xCQSx5QkFBU0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBcUIsVUFBU0csSUFBVCxFQUFjO0FBQ2hDUCw0QkFBUU8sSUFBUjtBQUNGLGlCQUZEO0FBR04sYUFQRCxFQVFDQyxLQVJELENBUU8sVUFBU0MsS0FBVCxFQUFlO0FBQ2xCQyx3QkFBUUQsS0FBUixDQUFjLCtCQUFkLEVBQStDRSxHQUEvQztBQUNILGFBVkQ7QUFXSDs7Ozs7O2tCQUlVZCxVOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCVGUsZTtBQUVG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IkFwcE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTM4YWFlMzk4NDE0OTJiMGEyYiIsImNsYXNzIEFwcFNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLkJBU0VfVVJMID0gXCJodHRwOi8vcHJpdmF0ZS1kYTkzN2EtaXppdGVzdDEuYXBpYXJ5LW1vY2suY29tL1wiO1xyXG4gICAgICAgIHRoaXMuRU5EUE9JTlRfRklFTERTID0gXCJmaWVsZHNcIlxyXG4gICAgfVxyXG5cclxuICAgIGdldChzdWNjZXNzLCBmYWlsKXtcclxuXHJcbiAgICAgICAgZmV0Y2goYCR7dGhpcy5CQVNFX1VSTH0ke3RoaXMuRU5EUE9JTlRfRklFTERTfWAse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKVxyXG4gICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHJldHJpZXZpbmcgaW5mb3JtYXRpb24nLCBlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBTZXJ2aWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL3NlcnZpY2VzL0FwcFNlcnZpY2UuanMiLCJjbGFzcyBEYXRhQmFzZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2F2ZURhdGEodXNlcmRhdGEpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBfc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICBsZXQgX2RhdGE7XHJcblxyXG4gICAgICAgIGZvcihfZGF0YSBpbiB1c2VyZGF0YSl7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfZGF0YSwgdXNlcmRhdGFbX2RhdGFdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERhdGEoKXtcclxuICAgICAgICBsZXQgX2RhdGEgPXtcclxuICAgICAgICAgICAgJ25vbWUnIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAnY3BmJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3BmXCIpLFxyXG4gICAgICAgICAgICAndGVsZXBob25lJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGhvbmVcIiksXHJcbiAgICAgICAgICAgICdlbmRlcmVjbycgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NcIiksXHJcbiAgICAgICAgICAgICdpbWFnZW0nIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxlXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gX2RhdGE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUJhc2VTZXJ2aWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL3NlcnZpY2VzL0RhdGFCYXNlU2VydmljZS5qcyIsImNsYXNzIE1hcENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0TWFwKCkge1xyXG4gICAgICAgIGxldCBfbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIik7XHJcbiAgICAgICAgbGV0IF9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKF9tYXBDb250YWluZXIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogLTMzLjg2ODgsIGxuZzogMTUxLjIxOTUgfSxcclxuICAgICAgICAgICAgem9vbTogMTNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0QWRkcmVzc1wiKTtcclxuICAgICAgICBsZXQgX3NlYXJjaGJveCA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuU2VhcmNoQm94KF9pbnB1dCk7XHJcblxyXG4gICAgICAgIF9tYXAuYWRkTGlzdGVuZXIoJ2JvdW5kc19jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBfc2VhcmNoYm94LnNldEJvdW5kcyhfbWFwLmdldEJvdW5kcygpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IF9tYXJrZXJzID0gW107XHJcblxyXG4gICAgICAgIF9zZWFyY2hib3guYWRkTGlzdGVuZXIoJ3BsYWNlc19jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX3BsYWNlID0gX3NlYXJjaGJveC5nZXRQbGFjZXMoKVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfcGxhY2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgX2JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcclxuICAgICAgICAgICAgX21hcmtlcnMuZm9yRWFjaCgoX3BsYWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV9wbGFjZS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IF9pY29uID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBfcGxhY2UuaWNvbixcclxuICAgICAgICAgICAgICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcxLCA3MSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDE3LCAzNCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNSwgMjUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF9tYXJrZXJzLnB1c2gobmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICBtYXA6IF9tYXAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBfaWNvbixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBfcGxhY2UubmFtZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBfcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF9wbGFjZS5nZW9tZXRyeS52aWV3cG9ydCkge1xyXG4gICAgICAgICAgICAgICAgX2JvdW5kcy51bmlvbihfcGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2JvdW5kcy5leHRlbmQoX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfbWFwLmZpdEJvdW5kcyhfYm91bmRzKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL01hcENvbnRyb2xsZXIuanMiLCJcclxuaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9BcHBTZXJ2aWNlJztcclxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9BcHBDb250cm9sbGVyJztcclxuaW1wb3J0IEZvcm1Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgTGlzdERhdGFDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyJztcclxuaW1wb3J0IE1hcENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9NYXBDb250cm9sbGVyJztcclxuXHJcblxyXG5jbGFzcyBBcHBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG5ldyBBcHBTZXJ2aWNlKCk7XHJcbiAgICAgICAgbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICBuZXcgRm9ybUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBuZXcgTGlzdERhdGFDb250cm9sbGVyKCk7XHJcbiAgICAgICAgbmV3IE1hcENvbnRyb2xsZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIG5ldyBBcHBNYWluKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvQXBwTWFpbi5qcyIsIlxyXG5jbGFzcyBBcHBDb250cm9sZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFwcFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQXBwU2VydmljZSc7XHJcbmltcG9ydCBEYXRhQmFzZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRGF0YUJhc2VTZXJ2aWNlJ1xyXG5pbXBvcnQgTWFwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9NYXBDb250cm9sbGVyJ1xyXG5pbXBvcnQgTWFza0NvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvTWFza0NvbnRyb2xsZXInXHJcblxyXG5jbGFzcyBGb3JtQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IEFwcFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRhdGFCYXNlID0gbmV3IERhdGFCYXNlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSBuZXcgTWFza0NvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmdldEZpZWxkcygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldChcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7IHRoaXMub25TdWNjZXNzKHJlc3BvbnNlKTsgfSxcclxuICAgICAgICAgICAgKGZhaWwpID0+IHsgdGhpcy5vbkZhaWwoZmFpbCk7IH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRGb3JtKHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmFpbChmYWlsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmFpbClcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEZvcm0oZmllbGRzKSB7XHJcblxyXG4gICAgICAgIGxldCBfZmllbGQ7XHJcbiAgICAgICAgbGV0IF9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uX19jb250ZW50JylbMF07XHJcbiAgICAgICAgbGV0IF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgX2Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2Zvcm0pO1xyXG5cclxuICAgICAgICBsZXQgX21hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgX21hcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcFwiKTtcclxuXHJcbiAgICAgICAgZm9yIChfZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBfZmllbGQudHlwZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBfZmllbGQuaWQpO1xyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBfZmllbGQubmFtZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBfZmllbGQucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICBfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgX2Zvcm0uYXBwZW5kQ2hpbGQoX2lucHV0KTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmIChfZmllbGQudHlwZSA9PSBcImFkZHJlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm0uYXBwZW5kQ2hpbGQoX21hcCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldFBhdHRlcm5zKCk7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3RlbmVycygpIHtcclxuICAgICAgICBsZXQgX2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAgICAgbGV0IF9maWVsZENwZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0Q1BGXCIpO1xyXG4gICAgICAgIGxldCBfZmllbGRQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGhvbmVcIik7XHJcblxyXG4gICAgICAgIF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRVc2VyRGF0YShldmVudCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIC8vIF9maWVsZENwZi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWFzay5zZXRNYXNrKGUuY3VycmVudFRhcmdldCwgXCJjcGZNYXNrXCIpO1xyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBhdHRlcm5zKCl7XHJcbiAgICAgICAgbGV0IF9maWVsZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEZ1bGxuYW1lXCIpO1xyXG4gICAgICAgIGxldCBfZmllbGRDcGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENQRlwiKTtcclxuICAgICAgICBsZXQgX2ZpZWxkUGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBob25lXCIpO1xyXG4gXHJcbiAgICAgICAgX2ZpZWxkTmFtZS5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIFwiW0EtWmEtel1cIik7XHJcbiAgICAgICAgX2ZpZWxkQ3BmLnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgXCJbMC05XVwiKTtcclxuICAgICAgICBfZmllbGRQaG9uZS5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIFwiWzAtOV1cIik7XHJcbiAgICB9XHJcbiAgICBzZW5kVXNlckRhdGEoKSB7XHJcbiAgICAgICAgbGV0IF9uYW1lLCBfY3BmLCBfcGhvbmUsIF9hZGRyZXNzLCBfZmlsZTtcclxuXHJcbiAgICAgICAgX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEZ1bGxuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9jcGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENQRlwiKS52YWx1ZTtcclxuICAgICAgICBfcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBob25lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgIF9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxJbWFnZVwiKS52YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUJhc2Uuc2F2ZURhdGEoe1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXHJcbiAgICAgICAgICAgIFwiY3BmXCI6IF9jcGYsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogX3Bob25lLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIFwiZmlsZVwiOiBfZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlci5qcyIsImNsYXNzIE1hc2tDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2V0TWFzayhvYmosIGZuKXtcclxuICAgICAgICBsZXQgX29iaiA9IG9iajtcclxuICAgICAgICBsZXQgX2ZuID0gZm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggdGhpcy5pbml0TWFzayhfb2JqLCBfZm4pLCAxKTtcclxuICAgIH1cclxuICAgIGluaXRNYXNrKG9iaiwgZm4pe1xyXG4gICAgICAgIGxldCBfb2JqID0gb2JqO1xyXG4gICAgICAgIGxldCBfZm4gPSBmbjtcclxuXHJcbiAgICAgICAgX29iai52YWx1ZSA9IHRoaXMuX2ZuKF9vYmoudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coX29iai52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGhvbmVNYXNrKHZhbCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgIHZhbD12YWwucmVwbGFjZSgvXFxEL2csXCJcIik7ICAgICAgICAgICAgXHJcbiAgICAgICAgdmFsPXZhbC5yZXBsYWNlKC9eKFxcZHsyfSkoXFxkKS9nLFwiKCQxKSAkMlwiKTsgXHJcbiAgICAgICAgdmFsPXZhbC5yZXBsYWNlKC8oXFxkKShcXGR7NH0pJC8sXCIkMS0kMlwiKTtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNwZk1hc2sodmFsKXtcclxuICAgICAgICB2YWw9dmFsLnJlcGxhY2UoL1xcRC9nLFwiXCIpOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB2YWw9dmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZCkvLFwiJDEuJDJcIik7XHJcbiAgICAgICAgdmFsPXZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGQpLyxcIiQxLiQyXCIpO1xyXG4gICAgICAgIHZhbD12YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkezEsMn0pJC8sXCIkMS0kMlwiKTsgXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYXNrQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9NYXNrQ29udHJvbGxlci5qcyIsImltcG9ydCBEYXRhQmFzZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRGF0YUJhc2VTZXJ2aWNlLmpzJ1xyXG5cclxuY2xhc3MgTGlzdERhdGFDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IERhdGFCYXNlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuICAgIHNldExpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBfYnV0dG9uR2V0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xyXG4gICAgICAgIF9idXR0b25HZXREYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdERhdGEoKSB7XHJcbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhYmFzZS5nZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IF90YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFkb3NcIilcclxuICAgICAgICBsZXQgX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBsZXQgX2l0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coX2RhdGEpXHJcbiAgICAgICAgZm9yIChfaXRlbSBpbiBfZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgX2NvbGx1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coX2RhdGFbX2l0ZW1dKVxyXG4gICAgICAgICAgICBfY29sbHVtLmlubmVySFRNTCA9IF9kYXRhW19pdGVtXTtcclxuICAgICAgICAgICAgX3Jvdy5hcHBlbmRDaGlsZChfY29sbHVtKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90YWJsZS5hcHBlbmRDaGlsZChfcm93KVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RGF0YUNvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==