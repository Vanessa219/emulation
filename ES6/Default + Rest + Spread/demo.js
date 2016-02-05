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
var demo1 = function (animals2="tigers", animals3 = (animals2 === "bears") ? "sealions" : "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
};
console.log('demo1: ' + demo1('bears'));
console.log('demo1: ' + demo1(undefined, 'unicorns'));

// Rest
var demo2 = function f(x, ...y) {
    // y is an Array
    return x * y.length;
};
console.log('demo2: ' + demo2(3, "hello", true));

// Spread
var demo3 = function f(x, y, z) {
    return x + y + z;
};
// Pass each elem of array as argument
console.log('demo3: ' + demo3(...[1, 2, 3]));

// contain words?
var demo4 = function (sentence, ...words) {
    for (var word of words) {   // For..Of
        if (sentence.indexOf(word) === -1) {
            return false;
        }
    }
    return true;
};
console.log('demo4: ' + demo4('happy new year!', 'happy', 'new', 'year'));