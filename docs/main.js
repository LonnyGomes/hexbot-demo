!function(e){function n(n){for(var r,s,i=n[0],l=n[1],c=n[2],d=0,p=[];d<i.length;d++)s=i[d],o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(n);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={0:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;a.push([1293,1,2]),t()}({1013:function(module,exports,__webpack_require__){eval("\nvar content = __webpack_require__(1014);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(491)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/styles.css?")},1014:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(71)(false);\n// Module\nexports.push([module.i, "html,\\nbody,\\n#cesiumContainer {\\n    width: 100%;\\n    height: 100%;\\n    margin: 0;\\n    padding: 0;\\n    overflow: hidden;\\n}\\n\\n.top-bar {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    align-items: center;\\n    height: 50px;\\n    margin: 0px;\\n    padding: 0px;\\n}\\n\\n.title {\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-size: 28px;\\n    line-height: 50px;\\n    color: #007000;\\n}\\n\\n.header-info {\\n    height: 100%;\\n}\\n\\n#clrBtn {\\n    margin: 0px;\\n    background-color: #007200; /* Green */\\n    border: none;\\n    color: white;\\n    padding: 15px 20px;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 16px;\\n}\\n\\n#clrVal {\\n    height: 30px;\\n    width: 100px;\\n    font-size: 18px;\\n    text-align: right;\\n}\\n\\n.fork-img {\\n    position: absolute;\\n    top: 0px;\\n    left: 0px;\\n    z-index: 100000;\\n}\\n\\n.github-corner {\\n    position: absolute;\\n    top: 0px;\\n    left: 0px;\\n    z-index: 100000;\\n}\\n\\n.github-corner:hover .octo-arm {\\n    animation: octocat-wave 560ms ease-in-out;\\n}\\n@keyframes octocat-wave {\\n    0%,\\n    100% {\\n        transform: rotate(0);\\n    }\\n    20%,\\n    60% {\\n        transform: rotate(-25deg);\\n    }\\n    40%,\\n    80% {\\n        transform: rotate(10deg);\\n    }\\n}\\n@media (max-width: 500px) {\\n    .github-corner:hover .octo-arm {\\n        animation: none;\\n    }\\n    .github-corner .octo-arm {\\n        animation: octocat-wave 560ms ease-in-out;\\n    }\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js')},1293:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/css/styles.css\nvar styles = __webpack_require__(1013);\n\n// EXTERNAL MODULE: ./node_modules/@babel/polyfill/lib/index.js\nvar lib = __webpack_require__(1016);\n\n// EXTERNAL MODULE: ./node_modules/cesium/Source/Cesium.js\nvar Cesium = __webpack_require__(49);\nvar Cesium_default = /*#__PURE__*/__webpack_require__.n(Cesium);\n\n// CONCATENATED MODULE: ./src/cesium.controller.js\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// styles\n__webpack_require__(1202); // load Cesium viewer\n\n\n\nvar cesium_controller_CesiumController =\n/*#__PURE__*/\nfunction () {\n  function CesiumController() {\n    _classCallCheck(this, CesiumController);\n\n    this.viewer = null;\n  }\n\n  _createClass(CesiumController, [{\n    key: "initViewer",\n    value: function initViewer(idName, opts) {\n      return this.viewer = new Cesium_default.a.Viewer(idName, opts);\n    }\n  }, {\n    key: "updateDataSource",\n    value: function updateDataSource(dataSource) {\n      dataSource.seriesToDisplay = \'defaultSeries\';\n      this.viewer.dataSources.removeAll(true);\n      this.viewer.dataSources.add(dataSource);\n    }\n  }]);\n\n  return CesiumController;\n}();\n// EXTERNAL MODULE: ./node_modules/axios/index.js\nvar axios = __webpack_require__(1012);\nvar axios_default = /*#__PURE__*/__webpack_require__.n(axios);\n\n// CONCATENATED MODULE: ./src/HexBot.js\nfunction HexBot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction HexBot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction HexBot_createClass(Constructor, protoProps, staticProps) { if (protoProps) HexBot_defineProperties(Constructor.prototype, protoProps); if (staticProps) HexBot_defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar END_POINT = \'https://api.noopschallenge.com/hexbot\';\nvar EXOSPHERE_DISTANCE = 5000000; // in meters\n\nvar HexBot_HexBot =\n/*#__PURE__*/\nfunction () {\n  function HexBot() {\n    HexBot_classCallCheck(this, HexBot);\n  }\n  /**\n   * Retrieves array of color values\n   * @param {number} count Number of colors\n   * @return {object} list of color values in the format {colors: [{values: \'#XXXXXX\'}]}\n   */\n\n\n  HexBot_createClass(HexBot, [{\n    key: "getColors",\n    value: function getColors() {\n      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n      if (isNaN(count)) {\n        throw new Error(\'A number must be supplied\');\n      }\n\n      if (count < 1 || count > 1000) {\n        throw new Error(\'Invalid value. Values must be between 1-1000\');\n      }\n\n      var url = "".concat(END_POINT, "?count=").concat(count);\n      return axios_default.a.get(url).then(function (results) {\n        return results.data;\n      });\n    }\n    /**\n     * Extracts RGB value from hex string\n     * @param {string} hexColor hex color in the format #XXXXXX\n     * @return {array} r, g, b values\n     */\n\n  }, {\n    key: "extractRGB",\n    value: function extractRGB(hexColor) {\n      var re = /^\\#[A-Fa-f0-9]{6}$/;\n\n      if (!hexColor) {\n        throw new Error(\'Must supply a hex color\');\n      }\n\n      if (!hexColor.match(re)) {\n        throw new Error(\'Invalid color\');\n      }\n\n      var colorVal = parseInt(hexColor.replace(/#/, \'0x\'));\n      var red = colorVal >> 16;\n      var green = colorVal >> 8 & 0xff;\n      var blue = colorVal & 0xff;\n      return [red, green, blue];\n    }\n    /**\n     * Converts an RBG value to a latitude, longitude, and altitude\n     * The latitude/longitude is interpolated from the 0-255 rgb value\n     * The altitude is computed based off of the start of the exosphere\n     * @param {array} rgb array of red, green, blue colors\n     * @return {array} array of latitude, longitude, and altitude\n     */\n\n  }, {\n    key: "rgbToCoords",\n    value: function rgbToCoords(rgb) {\n      if (!rgb) {\n        throw new Error(\'Must supply array of rgb coords\');\n      }\n\n      if (!Array.isArray(rgb)) {\n        throw new Error(\'Must supply an array\');\n      }\n\n      if (rgb.length !== 3) {\n        throw new Error(\'Array length should be 3\');\n      }\n\n      var longitude = rgb[0] / 255 * 360 - 180;\n      var latitude = rgb[1] / 255 * 180 - 90;\n      var altitude = rgb[2] / 255 * EXOSPHERE_DISTANCE;\n      return [longitude, latitude, altitude];\n    }\n  }]);\n\n  return HexBot;\n}();\n// CONCATENATED MODULE: ./src/index.controller.js\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction index_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction index_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction index_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) index_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) index_controller_defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar index_controller_IndexController =\n/*#__PURE__*/\nfunction () {\n  function IndexController() {\n    index_controller_classCallCheck(this, IndexController);\n\n    this.hexBot = new HexBot_HexBot();\n  }\n  /**\n   * Retrieves geo coordinate/color pairs\n   * @param {number} count total number of geocoords/colors to return, with a max of 1,000\n   * @returns {Array} array of color/geocoord pairs in for format `{color: \'#XXXXXX\', gecoords: [0,0,0]}`\n   */\n\n\n  index_controller_createClass(IndexController, [{\n    key: "getGeoColors",\n    value: function () {\n      var _getGeoColors = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(count) {\n        var _this = this;\n\n        var geoColors, _ref, colors;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!count) {\n                  count = 1000;\n                }\n\n                if (!isNaN(count)) {\n                  _context.next = 3;\n                  break;\n                }\n\n                throw new Error(\'A number between 1-1,000 must be provided\');\n\n              case 3:\n                if (!(count < 1 || count > 1000)) {\n                  _context.next = 5;\n                  break;\n                }\n\n                throw new Error(\'Invalid range provided. Numbers must be between 1 and 1000\');\n\n              case 5:\n                geoColors = null;\n                _context.prev = 6;\n                _context.next = 9;\n                return this.hexBot.getColors(count);\n\n              case 9:\n                _ref = _context.sent;\n                colors = _ref.colors;\n                geoColors = colors.map(function (curObj) {\n                  var rgb = _this.hexBot.extractRGB(curObj.value);\n\n                  return {\n                    color: curObj.value,\n                    geocoords: _this.hexBot.rgbToCoords(rgb)\n                  };\n                });\n                _context.next = 17;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context["catch"](6);\n                throw _context.t0;\n\n              case 17:\n                return _context.abrupt("return", geoColors);\n\n              case 18:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[6, 14]]);\n      }));\n\n      function getGeoColors(_x) {\n        return _getGeoColors.apply(this, arguments);\n      }\n\n      return getGeoColors;\n    }()\n  }]);\n\n  return IndexController;\n}();\n// CONCATENATED MODULE: ./src/ColorsDataSource.js\nfunction ColorsDataSource_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction ColorsDataSource_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction ColorsDataSource_createClass(Constructor, protoProps, staticProps) { if (protoProps) ColorsDataSource_defineProperties(Constructor.prototype, protoProps); if (staticProps) ColorsDataSource_defineProperties(Constructor, staticProps); return Constructor; }\n\n// load Cesium viewer\n\n/**\n * This class is an example of a custom DataSource.  It loads JSON data as\n * defined by Google\'s WebGL Globe, https://github.com/dataarts/webgl-globe.\n * @alias ColorsDataSource\n * @constructor\n *\n * @param {String} [name] The name of this data source.  If undefined, a name\n *                        will be derived from the url.\n *\n * @example\n * var dataSource = new Cesium.ColorsDataSource();\n * dataSource.loadUrl(\'sample.json\');\n * viewer.dataSources.add(dataSource);\n */\n\nvar ColorsDataSource_ColorsDataSource =\n/*#__PURE__*/\nfunction () {\n  function ColorsDataSource(name) {\n    ColorsDataSource_classCallCheck(this, ColorsDataSource);\n\n    //All public configuration is defined as ES5 properties\n    //These are just the "private" variables and their defaults.\n    this._name = name;\n    this._changed = new Cesium_default.a.Event();\n    this._error = new Cesium_default.a.Event();\n    this._isLoading = false;\n    this._loading = new Cesium_default.a.Event();\n    this._entityCollection = new Cesium_default.a.EntityCollection();\n    this._seriesNames = [];\n    this._seriesToDisplay = undefined;\n    this._heightScale = 10000000;\n    this._entityCluster = new Cesium_default.a.EntityCluster();\n  } //The below properties must be implemented by all DataSource instances\n\n  /**\n   * Gets a human-readable name for this instance.\n   * @memberof ColorsDataSource.prototype\n   * @type {String}\n   */\n\n\n  ColorsDataSource_createClass(ColorsDataSource, [{\n    key: "loadUrl",\n\n    /*********\n     * Methods\n     *********/\n\n    /**\n     * Asynchronously loads the GeoJSON at the provided url, replacing any existing data.\n     * @param {Object} url The url to be processed.\n     * @returns {Promise} a promise that will resolve when the GeoJSON is loaded.\n     */\n    value: function loadUrl(url) {\n      if (!Cesium_default.a.defined(url)) {\n        throw new Cesium_default.a.DeveloperError(\'url is required.\');\n      } //Create a name based on the url\n\n\n      var name = Cesium_default.a.getFilenameFromUri(url); //Set the name if it is different than the current name.\n\n      if (this._name !== name) {\n        this._name = name;\n\n        this._changed.raiseEvent(this);\n      } //Use \'when\' to load the URL into a json object\n      //and then process is with the `load` function.\n\n\n      var that = this;\n      return Cesium_default.a.Resource.fetchJson(url).then(function (json) {\n        return that.load(json, url);\n      }).otherwise(function (error) {\n        //Otherwise will catch any errors or exceptions that occur\n        //during the promise processing. When this happens,\n        //we raise the error event and reject the promise.\n        this._setLoading(false);\n\n        that._error.raiseEvent(that, error);\n\n        return Cesium_default.a.when.reject(error);\n      });\n    }\n    /**\n     * Loads the provided data, replacing any existing data.\n     * @param {Array} data The object to be processed.\n     */\n\n  }, {\n    key: "load",\n    value: function load(data) {\n      //>>includeStart(\'debug\', pragmas.debug);\n      if (!Cesium_default.a.defined(data)) {\n        throw new Cesium_default.a.DeveloperError(\'data is required.\');\n      } //>>includeEnd(\'debug\');\n      //Clear out any data that might already exist.\n\n\n      this._setLoading(true);\n\n      this._seriesNames.length = 0;\n      this._seriesToDisplay = undefined;\n      var heightScale = this.heightScale;\n      var entities = this._entityCollection; //It\'s a good idea to suspend events when making changes to a\n      //large amount of entities.  This will cause events to be batched up\n      //into the minimal amount of function calls and all take place at the\n      //end of processing (when resumeEvents is called).\n\n      entities.suspendEvents();\n      entities.removeAll(); //WebGL Globe JSON is an array of series, where each series itself is an\n      //array of two items, the first containing the series name and the second\n      //being an array of repeating latitude, longitude, height values.\n      //\n      //Here\'s a more visual example.\n      //[["series1",[latitude, longitude, height, ... ]\n      // ["series2",[latitude, longitude, height, ... ]]\n      //var series = data[x];\n\n      var seriesName = \'defaultSeries\'; //Add the name of the series to our list of possible values.\n\n      this._seriesNames.push(seriesName); //Make the first series the visible one by default\n\n\n      var show = 0;\n\n      if (show) {\n        this._seriesToDisplay = seriesName;\n      } // Loop over each series\n\n\n      for (var x = 0; x < data.length; x++) {\n        var curItem = data[x];\n        var coordinates = curItem.geocoords; //Now loop over each coordinate in the series and create\n        // our entities from the data.\n\n        var longitude = coordinates[0];\n        var latitude = coordinates[1];\n        var height = coordinates[2]; // console.log(\'height:\', height * heightScale);\n        //Ignore lines of zero height.\n\n        if (height === 0) {\n          continue;\n        }\n\n        var color = Cesium_default.a.Color.fromCssColorString(curItem.color);\n        var surfacePosition = Cesium_default.a.Cartesian3.fromDegrees(longitude, latitude, 0);\n        var heightPosition = Cesium_default.a.Cartesian3.fromDegrees(longitude, latitude, height); //WebGL Globe only contains lines, so that\'s the only graphics we create.\n\n        var polyline = new Cesium_default.a.PolylineGraphics();\n        polyline.material = new Cesium_default.a.ColorMaterialProperty(color);\n        polyline.width = new Cesium_default.a.ConstantProperty(5);\n        polyline.arcType = new Cesium_default.a.ConstantProperty(Cesium_default.a.ArcType.NONE);\n        polyline.positions = new Cesium_default.a.ConstantProperty([surfacePosition, heightPosition]); //The polyline instance itself needs to be on an entity.\n\n        var entity = new Cesium_default.a.Entity({\n          id: "color: ".concat(curItem.color, ", [").concat(Math.round(latitude * 100) / 100, ", ").concat(Math.round(longitude * 100) / 100, "], ").concat(Math.round(height / 1000), " km"),\n          show: show,\n          polyline: polyline,\n          seriesName: seriesName //Custom property to indicate series name\n\n        }); //Add the entity to the collection.\n\n        entities.add(entity);\n      } //Once all data is processed, call resumeEvents and raise the changed event.\n\n\n      entities.resumeEvents();\n\n      this._changed.raiseEvent(this);\n\n      this._setLoading(false);\n    }\n  }, {\n    key: "_setLoading",\n    value: function _setLoading(isLoading) {\n      if (this._isLoading !== isLoading) {\n        this._isLoading = isLoading;\n\n        this._loading.raiseEvent(this, isLoading);\n      }\n    }\n  }, {\n    key: "name",\n    get: function get() {\n      return this._name;\n    }\n    /**\n     * Since WebGL Globe JSON is not time-dynamic, this property is always undefined.\n     * @memberof ColorsDataSource.prototype\n     * @type {DataSourceClock}\n     */\n\n  }, {\n    key: "clock",\n    get: function get() {\n      return undefined;\n    }\n    /**\n     * Gets the collection of Entity instances.\n     * @memberof ColorsDataSource.prototype\n     * @type {EntityCollection}\n     */\n\n  }, {\n    key: "entities",\n    get: function get() {\n      return this._entityCollection;\n    }\n    /**\n     * Gets a value indicating if the data source is currently loading data.\n     * @memberof ColorsDataSource.prototype\n     * @type {Boolean}\n     */\n\n  }, {\n    key: "isLoading",\n    get: function get() {\n      return this._isLoading;\n    }\n    /**\n     * Gets an event that will be raised when the underlying data changes.\n     * @memberof ColorsDataSource.prototype\n     * @type {Event}\n     */\n\n  }, {\n    key: "changedEvent",\n    get: function get() {\n      return this._changed;\n    }\n    /**\n     * Gets an event that will be raised if an error is encountered during\n     * processing.\n     * @memberof ColorsDataSource.prototype\n     * @type {Event}\n     */\n\n  }, {\n    key: "errorEvent",\n    get: function get() {\n      return this._error;\n    }\n    /**\n     * Gets an event that will be raised when the data source either starts or\n     * stops loading.\n     * @memberof ColorsDataSource.prototype\n     * @type {Event}\n     */\n\n  }, {\n    key: "loadingEvent",\n    get: function get() {\n      return this._loading;\n    } //These properties are specific to this DataSource.\n\n    /**\n     * Gets the array of series names.\n     * @memberof ColorsDataSource.prototype\n     * @type {String[]}\n     */\n\n  }, {\n    key: "seriesNames",\n    get: function get() {\n      return this._seriesNames;\n    }\n    /**\n     * Gets or sets the name of the series to display.  WebGL JSON is designed\n     * so that only one series is viewed at a time.  Valid values are defined\n     * in the seriesNames property.\n     * @memberof ColorsDataSource.prototype\n     * @type {String}\n     */\n\n  }, {\n    key: "seriesToDisplay",\n    get: function get() {\n      return this._seriesToDisplay;\n    },\n    set: function set(value) {\n      this._seriesToDisplay = value; //Iterate over all entities and set their show property\n      //to true only if they are part of the current series.\n\n      var collection = this._entityCollection;\n      var entities = collection.values;\n      collection.suspendEvents();\n\n      for (var i = 0; i < entities.length; i++) {\n        var entity = entities[i];\n        entity.show = value === entity.seriesName;\n      }\n\n      collection.resumeEvents();\n    }\n    /**\n     * Gets or sets the scale factor applied to the height of each line.\n     * @memberof ColorsDataSource.prototype\n     * @type {Number}\n     */\n\n  }, {\n    key: "heightScale",\n    get: function get() {\n      return this._heightScale;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        throw new Cesium_default.a.DeveloperError(\'value must be greater than 0\');\n      }\n\n      this._heightScale = value;\n    }\n    /**\n     * Gets whether or not this data source should be displayed.\n     * @memberof ColorsDataSource.prototype\n     * @type {Boolean}\n     */\n\n  }, {\n    key: "show",\n    get: function get() {\n      return this._entityCollection;\n    },\n    set: function set(value) {\n      this._entityCollection = value;\n    }\n    /**\n     * Gets or sets the clustering options for this data source. This object can be shared between multiple data sources.\n     * @memberof ColorsDataSource.prototype\n     * @type {EntityCluster}\n     */\n\n  }, {\n    key: "clustering",\n    get: function get() {\n      return this._entityCluster;\n    },\n    set: function set(value) {\n      if (!Cesium_default.a.defined(value)) {\n        throw new Cesium_default.a.DeveloperError(\'value must be defined.\');\n      }\n\n      this._entityCluster = value;\n    }\n  }]);\n\n  return ColorsDataSource;\n}();\n// CONCATENATED MODULE: ./src/index.js\nfunction src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar controller = new index_controller_IndexController();\nvar cesium = new cesium_controller_CesiumController();\nvar dataSource = new ColorsDataSource_ColorsDataSource();\ncesium.initViewer(\'cesiumContainer\', {\n  animation: false,\n  timeline: false\n});\nvar timeoutId = null; // DOM references\n\nvar btn = document.getElementById(\'clrBtn\');\nvar colorCount = document.getElementById(\'clrCount\');\nvar colorValLbl = document.getElementById(\'clrVal\');\n\nvar updateHandler = function updateHandler() {\n  var curVal = colorCount.value;\n  colorValLbl.value = "".concat(curVal, " color").concat(curVal > 1 ? \'s\' : \'\');\n  delayedGetColors();\n};\n\ncolorCount.addEventListener(\'input\', updateHandler);\nbtn.addEventListener(\'click\', function () {\n  updateGlobe(colorCount.value);\n}); // updates globe with new set of random colors from the HexBot API\n\nvar updateGlobe =\n/*#__PURE__*/\nfunction () {\n  var _ref = src_asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var count,\n        geoColors,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            count = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1000;\n            _context.prev = 1;\n            _context.next = 4;\n            return controller.getGeoColors(count);\n\n          case 4:\n            geoColors = _context.sent;\n            dataSource.load(geoColors);\n            cesium.updateDataSource(dataSource);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context["catch"](1);\n            console.error(\'Error\', _context.t0.message);\n\n          case 12:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function updateGlobe() {\n    return _ref.apply(this, arguments);\n  };\n}(); // add simple debounce logic for input range\n\n\nvar delayedGetColors = function delayedGetColors() {\n  if (timeoutId) {\n    window.clearTimeout(timeoutId);\n  }\n\n  timeoutId = window.setTimeout(function () {\n    return updateGlobe(colorCount.value);\n  }, 500);\n}; // invoke handler manually for the first time\n\n\nupdateHandler();\n\n//# sourceURL=webpack:///./src/index.js_+_4_modules?')},367:function(module,exports){eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = 367;\n\n//# sourceURL=webpack:///./node_modules/cesium/Source/Core_sync?")}});