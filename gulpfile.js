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
         * @file emulation tool.
         * 
         * @author <a href="mailto:liliyuan@fangstar.net">Liyuan Li</a>
         * @version 0.1.0.0, Feb 19, 2016 
         */
        var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    // browserify + babelify or webpack + babel-loader.
    var browserify = require("browserify");
    var fs = require("fs");
    browserify(["./ES6/Destructuring/demo.js"])
            .transform("babelify", {presets: ["es2015"]})
            .bundle()
            .pipe(fs.createWriteStream("./ES6/Destructuring/dist/demo.js"));
    
    return gulp.src("./ES6/*/demo.js")
            .pipe(babel({
                "presets": ["es2015"]
            }))
            .pipe(gulp.dest("./ES6/dist/"));
});