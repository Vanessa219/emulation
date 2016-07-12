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
 * @file Exponentiation Operator.
 * 
 * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
 * @version 0.1.0.0, Jul 12, 2016 
 */
"use strict";
// The exponentiation operator is defined to have a higher precedence than unary operators such as unary + and unary -, but there are a few exceptions. 
// For example, in Bash the ** operator is defined to have a lower precedence than unary operators. 
// In JavaScript, it is impossible to write an ambiguous exponentiation expression, 
// i.e. you cannot put a unary operator (+/-/~/!/delete/void/typeof) immediately before the base number.
console.log('2 ** 3 = ', 2 ** 3); // 8
console.log('3 ** 2.5 = ', 3 ** 2.5 ); // 15.588457268119896
console.log('10 ** -1 = ', 10 ** -1); // 0.1
console.log('NaN ** 2 = ', NaN ** 2); // NaN

console.log('2 ** 3 ** 2 = ', 2 ** 3 ** 2); // 512
console.log('2 ** (3 ** 2) = ', 2 ** (3 ** 2)); // 512
console.log('(2 ** 3) ** 2 = ', (2 ** 3) ** 2); // 64

console.log('-(2 ** 2) = ', -(2 ** 2)); // -4
// (-2) ** 2 babel bug: https://github.com/babel/babylon/issues/26
// -2 ** 2 This is invalid in JavaScript, as the operation is ambiguous. 