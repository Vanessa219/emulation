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
 * @file Destructuring.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.0, Feb 5, 2016 
 */
"use strict";
// 深度嵌套

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _math = require('./math');

var foo = 1;
var bar = 2;
var baz = 3;

console.log('深度嵌套: foo =', foo, '; bar =', bar, '; baz =', baz);

// 尾随元素
var head = 1;
var tail = [2, 3, 4];

console.log('尾随元素: head =', head, '; tail =', tail);

// list matching
var _ref = ["foo", "bar", "baz"];
var third = _ref[2];

console.log('list matching: third =', third);

// undefined.
// Note: 不可以解构 null 或 undefined；赋值语句前必须有 let、const 或 var 关键字，否则需用括号包裹，e.g: ({ safe } = {})。
var _ref2 = [];
var missing = _ref2[0];

console.log('undefined: missing =', missing);

// object matching
var _name = { name: "Bender" };
var nameA = _name.name;
var _foo$bar = { foo: "lorem", bar: "ipsum" };
var foo = _foo$bar.foo;
var bar = _foo$bar.bar;

console.log('object matching: nameA =', nameA, '; foo =', foo, '; ba r=', bar);

// 随意嵌套并进一步组合对象解构
var _arrayProp = {
    arrayProp: ["Zapp", { second: "Brannigan" }]
};

var _arrayProp$arrayProp = _slicedToArray(_arrayProp.arrayProp, 2);

var first = _arrayProp$arrayProp[0];
var second = _arrayProp$arrayProp[1].second;

console.log('随意嵌套并进一步组合对象解构: first =', first, '; second =', second);

// 默认值
var _ref3 = {};
var _ref3$message = _ref3.message;
var msg = _ref3$message === undefined ? "Something went wrong" : _ref3$message;

console.log('默认值: msg =', msg);

// 解构的实际应用-参数
var removeBreakpoint = function removeBreakpoint(_ref4) {
    var _ref4$url = _ref4.url;
    var url = _ref4$url === undefined ? 'http://symx.fangstar.net' : _ref4$url;
    var line = _ref4.line;
    var column = _ref4.column;

    console.log('解构的实际应用-参数: url =', url, '; line =', line, '; column =', column);
};
removeBreakpoint({ line: 1, column: 2 });

// 解构的实际应用-迭代
var map = new Map();
map.set(window, "the global");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log('解构的实际应用-迭代: key = ', key, "; value =" + value);
    }

    // 解构的实际应用-多重返回值
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

var returnMultipleValues = function returnMultipleValues(k) {
    return {
        foo: 1,
        bar: 2
    };
};

var _returnMultipleValues = returnMultipleValues();

var foo = _returnMultipleValues.foo;
var bar = _returnMultipleValues.bar;

console.log('解构的实际应用-多重返回值: foo = ', foo, "; bar =" + bar);

// 解构的实际应用-模块导入

console.log('解构的实际应用-模块导入', "sum(pi, pi) =", (0, _math.sum)(_math.pi, _math.pi));