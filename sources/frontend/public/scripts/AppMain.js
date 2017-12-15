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
            var _autocomplete = new google.maps.places.Autocomplete(_input);

            _autocomplete.addListener('place_changed', function () {
                _autocomplete.bindTo('bounds', _mapContainer);
                var _place = _autocomplete.getPlace();

                if (_place.geometry.viewport) {
                    _map.fitBounds(_place.geometry.viewport);
                } else {
                    _map.setCenter(_place.geometry.location);
                    _map.setZoom(17);
                }
            });

            var _marker = new google.maps.Marker({
                map: _map,
                anchorPoint: new google.maps.Point(0, -29)
            });

            _marker.setIcon( /** @type {google.maps.Icon} */{
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRhMjk4ZGM4NmI2NDc2NzQxNzciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZXMvQXBwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9BcHBNYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTGlzdERhdGFDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcFNlcnZpY2UiLCJCQVNFX1VSTCIsIkVORFBPSU5UX0ZJRUxEUyIsInN1Y2Nlc3MiLCJmYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZXJyIiwiRGF0YUJhc2VTZXJ2aWNlIiwidXNlcmRhdGEiLCJfc3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsIl9kYXRhIiwic2V0SXRlbSIsImdldEl0ZW0iLCJNYXBDb250cm9sbGVyIiwiX21hcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfbWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJfaW5wdXQiLCJfYXV0b2NvbXBsZXRlIiwicGxhY2VzIiwiQXV0b2NvbXBsZXRlIiwiYWRkTGlzdGVuZXIiLCJiaW5kVG8iLCJfcGxhY2UiLCJnZXRQbGFjZSIsImdlb21ldHJ5Iiwidmlld3BvcnQiLCJmaXRCb3VuZHMiLCJzZXRDZW50ZXIiLCJsb2NhdGlvbiIsInNldFpvb20iLCJfbWFya2VyIiwiTWFya2VyIiwibWFwIiwiYW5jaG9yUG9pbnQiLCJQb2ludCIsInNldEljb24iLCJ1cmwiLCJwbGFjZSIsImljb24iLCJzaXplIiwiU2l6ZSIsIm9yaWdpbiIsImFuY2hvciIsInNjYWxlZFNpemUiLCJBcHBNYWluIiwid2luZG93Iiwib25sb2FkIiwiQXBwQ29udHJvbGVyIiwiRm9ybUNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiZGF0YUJhc2UiLCJnZXRGaWVsZHMiLCJnZXQiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJidWlsZEZvcm0iLCJsb2ciLCJmaWVsZHMiLCJfZmllbGQiLCJfY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9mb3JtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwic2V0TGlzdGVuZXJzIiwiaW5pdE1hcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kVXNlckRhdGEiLCJldmVudCIsIl9uYW1lIiwiX2NwZiIsIl9waG9uZSIsIl9hZGRyZXNzIiwiX2ZpbGUiLCJ2YWx1ZSIsInNhdmVEYXRhIiwiTGlzdERhdGFDb250cm9sbGVyIiwiZGF0YWJhc2UiLCJzZXRMaXN0ZW5lciIsIl9idXR0b25HZXREYXRhIiwibGlzdERhdGEiLCJnZXREYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDVCxnQkFBSUMsaUJBQWlCaEYsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyQjtBQUNBK0UsMkJBQWVmLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUNDLENBQUQsRUFBSztBQUMxQ0Esa0JBQUVDLGNBQUY7QUFDQSxzQkFBS2MsUUFBTDtBQUNILGFBSEQ7QUFJSDs7O21DQUNTO0FBQ1A1RixvQkFBUTZELEdBQVIsQ0FBWSxLQUFLNEIsUUFBTCxDQUFjSSxPQUFkLEVBQVo7QUFDRjs7Ozs7O2tCQUdVTCxrQiIsImZpbGUiOiJBcHBNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmRhMjk4ZGM4NmI2NDc2NzQxNzciLCJjbGFzcyBBcHBTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5CQVNFX1VSTCA9IFwiaHR0cDovL3ByaXZhdGUtZGE5MzdhLWl6aXRlc3QxLmFwaWFyeS1tb2NrLmNvbS9cIjtcclxuICAgICAgICB0aGlzLkVORFBPSU5UX0ZJRUxEUyA9IFwiZmllbGRzXCJcclxuICAgIH1cclxuXHJcbiAgICBnZXQoc3VjY2VzcywgZmFpbCl7XHJcblxyXG4gICAgICAgIGZldGNoKGAke3RoaXMuQkFTRV9VUkx9JHt0aGlzLkVORFBPSU5UX0ZJRUxEU31gLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCByZXRyaWV2aW5nIGluZm9ybWF0aW9uJywgZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwU2VydmljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9BcHBTZXJ2aWNlLmpzIiwiY2xhc3MgRGF0YUJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuICAgIHNhdmVEYXRhKHVzZXJkYXRhKXtcclxuICAgICAgICBsZXQgX3N0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgbGV0IF9kYXRhO1xyXG5cclxuICAgICAgICBmb3IoX2RhdGEgaW4gdXNlcmRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2RhdGEsIHVzZXJkYXRhW19kYXRhXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCl7XHJcbiAgICAgICAgbGV0IF9kYXRhID17XHJcbiAgICAgICAgICAgICdub21lJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSxcclxuICAgICAgICAgICAgJ2NwZicgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNwZlwiKSxcclxuICAgICAgICAgICAgJ3RlbGVwaG9uZScgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBob25lXCIpLFxyXG4gICAgICAgICAgICAnZW5kZXJlY28nIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICAgICAgICAnaW1hZ2VtJyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsZVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIF9kYXRhO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFCYXNlU2VydmljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9EYXRhQmFzZVNlcnZpY2UuanMiLCJjbGFzcyBNYXBDb250cm9sbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgaW5pdE1hcCgpe1xyXG4gICAgICAgIGxldCBfbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIik7XHJcbiAgICAgICAgbGV0IF9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKF9tYXBDb250YWluZXIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiB7bGF0OiAtMzMuODY4OCwgbG5nOiAxNTEuMjE5NX0sXHJcbiAgICAgICAgICAgIHpvb206IDEzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IF9hdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShfaW5wdXQpO1xyXG5cclxuICAgICAgICBfYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCk9PntcclxuICAgICAgICAgICAgX2F1dG9jb21wbGV0ZS5iaW5kVG8oJ2JvdW5kcycsIF9tYXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICBsZXQgX3BsYWNlID0gX2F1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChfcGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcclxuICAgICAgICAgICAgX21hcC5maXRCb3VuZHMoX3BsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9tYXAuc2V0Q2VudGVyKF9wbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIF9tYXAuc2V0Wm9vbSgxNyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBtYXA6IF9tYXAsXHJcbiAgICAgICAgICAgIGFuY2hvclBvaW50OiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgLTI5KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9tYXJrZXIuc2V0SWNvbigvKiogQHR5cGUge2dvb2dsZS5tYXBzLkljb259ICovKHtcclxuICAgICAgICAgICAgdXJsOiBwbGFjZS5pY29uLFxyXG4gICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MSwgNzEpLFxyXG4gICAgICAgICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTcsIDM0KSxcclxuICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMzUsIDM1KVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcyIsImltcG9ydCBBcHBTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvQXBwU2VydmljZSc7XHJcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvQXBwQ29udHJvbGxlcic7XHJcbmltcG9ydCBGb3JtQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcclxuaW1wb3J0IExpc3REYXRhQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0xpc3REYXRhQ29udHJvbGxlcic7XHJcbmltcG9ydCBNYXBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTWFwQ29udHJvbGxlcic7XHJcblxyXG5cclxuY2xhc3MgQXBwTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBuZXcgQXBwU2VydmljZSgpO1xyXG4gICAgICAgIG5ldyBBcHBDb250cm9sbGVyKCk7XHJcbiAgICAgICAgbmV3IEZvcm1Db250cm9sbGVyKCk7XHJcbiAgICAgICAgbmV3IExpc3REYXRhQ29udHJvbGxlcigpO1xyXG4gICAgICAgIG5ldyBNYXBDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBuZXcgQXBwTWFpbigpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL0FwcE1haW4uanMiLCJcclxuY2xhc3MgQXBwQ29udHJvbGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsImltcG9ydCBBcHBTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0FwcFNlcnZpY2UuanMnO1xyXG5pbXBvcnQgRGF0YUJhc2VTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0RhdGFCYXNlU2VydmljZS5qcydcclxuaW1wb3J0IE1hcENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvTWFwQ29udHJvbGxlci5qcydcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IEFwcFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRhdGFCYXNlID0gbmV3IERhdGFCYXNlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmdldEZpZWxkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpZWxkcygpe1xyXG4gICAgICAgdGhpcy5zZXJ2aWNlLmdldChcclxuICAgICAgICAgICAocmVzcG9uc2UpID0+IHsgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UpOyB9LFxyXG4gICAgICAgICAgIChmYWlsKSA9PiB7IHRoaXMub25GYWlsKGZhaWwpOyB9XHJcbiAgICAgICApXHJcblxyXG4gICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKXtcclxuICAgICAgIHRoaXMuYnVpbGRGb3JtKHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmFpbChmYWlsKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWlsKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRm9ybShmaWVsZHMpe1xyXG5cclxuICAgICAgICBsZXQgX2ZpZWxkO1xyXG4gICAgICAgIGxldCBfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VjdGlvbl9fY29udGVudCcpWzBdO1xyXG4gICAgICAgIGxldCBfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIF9mb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVwiKTtcclxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9mb3JtKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IoX2ZpZWxkIG9mIGZpZWxkcyl7XHJcbiAgICAgICAgICAgIGxldCBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBfZmllbGQudHlwZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBfZmllbGQuaWQpO1xyXG4gICAgICAgICAgICBfaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBfZmllbGQubmFtZSk7XHJcbiAgICAgICAgICAgIF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBfZmllbGQucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2Zvcm0uYXBwZW5kQ2hpbGQoX2lucHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdE1hcCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICBsZXQgX2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICBfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKT0+e1xyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICB0aGlzLnNlbmRVc2VyRGF0YShldmVudCk7XHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VuZFVzZXJEYXRhKCl7XHJcbiAgICAgICAgbGV0IF9uYW1lLCBfY3BmLCBfcGhvbmUsIF9hZGRyZXNzLCBfZmlsZTtcclxuXHJcbiAgICAgICAgX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEZ1bGxuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9jcGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENQRlwiKS52YWx1ZTtcclxuICAgICAgICBfcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBob25lXCIpLnZhbHVlO1xyXG4gICAgICAgIF9hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRBZGRyZXNzXCIpLnZhbHVlO1xyXG4gICAgICAgIF9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxJbWFnZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kYXRhQmFzZS5zYXZlRGF0YSh7XHJcbiAgICAgICAgICAgIFwibmFtZVwiIDogX25hbWUsXHJcbiAgICAgICAgICAgIFwiY3BmXCIgOiBfY3BmLFxyXG4gICAgICAgICAgICBcInBob25lXCIgOiBfcGhvbmUsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiIDogX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIFwiZmlsZVwiIDogX2ZpbGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlci5qcyIsImltcG9ydCBEYXRhQmFzZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRGF0YUJhc2VTZXJ2aWNlLmpzJ1xyXG5cclxuY2xhc3MgTGlzdERhdGFDb250cm9sbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBEYXRhQmFzZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnNldExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICBzZXRMaXN0ZW5lcigpe1xyXG4gICAgICAgIGxldCBfYnV0dG9uR2V0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xyXG4gICAgICAgIF9idXR0b25HZXREYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxpc3REYXRhKCl7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFiYXNlLmdldERhdGEoKSlcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlzdERhdGFDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL2NvbnRyb2xsZXJzL0xpc3REYXRhQ29udHJvbGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=