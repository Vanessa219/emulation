"use strict";

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
 * @file Default + Rest + Spread.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.1, Feb 5, 2016 
 */
"use strict";
// Default

var demo1 = function demo1() {
    var animals2 = arguments.length <= 0 || arguments[0] === undefined ? "tigers" : arguments[0];
    var animals3 = arguments.length <= 1 || arguments[1] === undefined ? animals2 === "bears" ? "sealions" : "bears" : arguments[1];

    return "Lions and " + animals2 + " and " + animals3 + "! Oh my!";
};
console.log('demo1: ' + demo1('bears'));
console.log('demo1: ' + demo1(undefined, 'unicorns'));

// Rest
var demo2 = function f(x) {
    // y is an Array
    return x * (arguments.length - 1);
};
console.log('demo2: ' + demo2(3, "hello", true));

// Spread
var demo3 = function f(x, y, z) {
    return x + y + z;
};
// Pass each elem of array as argument
console.log('demo3: ' + demo3.apply(undefined, [1, 2, 3]));

// contain words?
var demo4 = function demo4(sentence) {
    for (var _len = arguments.length, words = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        words[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var word = _step.value;
            // For..Of
            if (sentence.indexOf(word) === -1) {
                return false;
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

    return true;
};
console.log('demo4: ' + demo4('happy new year!', 'happy', 'new', 'year'));