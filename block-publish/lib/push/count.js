'use strict';

var through = require('through2');

function count (num) {
    return through.obj(function (file, env, callback) {
        num.push(file.path);
        callback();
    });
}
module.exports = count;
