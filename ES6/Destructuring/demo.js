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
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log('深度嵌套: foo =', foo, '; bar =', bar, '; baz =', baz);

// 尾随元素
var [head, ...tail] = [1, 2, 3, 4];
console.log('尾随元素: head =', head, '; tail =', tail);

// list matching
var [,,third] = ["foo", "bar", "baz"];
console.log('list matching: third =', third);

// undefined. 
// Note: 不可以解构 null 或 undefined；赋值语句前必须有 let、const 或 var 关键字，否则需用括号包裹，e.g: ({ safe } = {})。
var [missing] = [];
console.log('undefined: missing =', missing);

// object matching
var { name: nameA } = { name: "Bender" };
var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log('object matching: nameA =', nameA, '; foo =', foo, '; ba r=', bar);

// 随意嵌套并进一步组合对象解构
var { arrayProp: [first, { second }] } = {
    arrayProp: [
        "Zapp",
        { second: "Brannigan" }
    ]
};
console.log('随意嵌套并进一步组合对象解构: first =', first, '; second =', second);

// 默认值
var { message: msg = "Something went wrong" } = {};
console.log('默认值: msg =', msg);

// 解构的实际应用-参数
var removeBreakpoint = function ({ url = 'http://symx.fangstar.net', line, column }) {
    console.log('解构的实际应用-参数: url =', url, '; line =', line, '; column =', column);
};
removeBreakpoint({line: 1, column: 2});

// 解构的实际应用-迭代
var map = new Map();
map.set(window, "the global");
for (var [key, value] of map) {
    console.log('解构的实际应用-迭代: key = ', key, "; value =" + value);
}

// 解构的实际应用-多重返回值
var returnMultipleValues = function (k) {
    return {
        foo: 1,
        bar: 2
    };
};
var { foo, bar } = returnMultipleValues();
console.log('解构的实际应用-多重返回值: foo = ', foo, "; bar =" + bar);

// 解构的实际应用-模块导入
import {sum, pi} from "./math";
console.log('解构的实际应用-模块导入', "sum(pi, pi) =", sum(pi, pi));