'use strict';
var vfs = require('vinyl-fs');
var upload = require('./pub');
var cal = require('./count');
var num = [];
var sucCount = [];
var errCount = [];

module.exports = function (dir, cfg, cb) {
    vfs.src(dir)
        .pipe(cal(num))
        .on('finish', function () {
            vfs.src(dir)
                .pipe(upload(num, sucCount, errCount, cfg, cb));
        });
};
