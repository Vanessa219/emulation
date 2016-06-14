(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2012-2016, b3log.org & hacpai.com & fangstar.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file modules - app3.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.0, Jun 13, 2016 
 */
"use strict";

var _mathplusplus = require("./mathplusplus");

var _mathplusplus2 = _interopRequireDefault(_mathplusplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("e^π = " + (0, _mathplusplus2.default)(_mathplusplus.pi));
console.log("pi + e = " + (0, _mathplusplus.sum)(_mathplusplus.pi, _mathplusplus.e));

},{"./mathplusplus":3}],2:[function(require,module,exports){
/*
 * Copyright (c) 2012-2016, b3log.org & hacpai.com & fangstar.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file modules - math.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.0, Jun 13, 2016 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = add;
var pi = exports.pi = 3.141593;;

function add(x, y) {
  return x + y;
};

},{}],3:[function(require,module,exports){
/*
 * Copyright (c) 2012-2016, b3log.org & hacpai.com & fangstar.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file modules - exp.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.0, Feb 5, 2016 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = require("./math");

var _loop = function _loop(_key2) {
  if (_key2 === "default") return "continue";
  Object.defineProperty(exports, _key2, {
    enumerable: true,
    get: function get() {
      return _math[_key2];
    }
  });
};

for (var _key2 in _math) {
  var _ret = _loop(_key2);

  if (_ret === "continue") continue;
}

exports.default = function (x) {
  return Math.exp(x);
};

var e = exports.e = 2.71828182846;

},{"./math":2}]},{},[1]);
