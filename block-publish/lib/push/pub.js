'use strict';

var through = require('through2');
var exec = require('child_process').exec;
var color = require('colors');
var path = require('path');
var progressBar = require('progress');

function sortFile (p) {
    var temp = [];
    for (var i = 0, len = p.length; i < len; i++) {
        if (path.extname(p[i]) === '.html') {
            temp.unshift('success: ' + p[i]);
        } else {
            temp.push('success: ' + p[i]);
        }
    }
    return temp;
}


function Prepub (num, sucCount, errCount, c, _cb) {
    var cfg = c || {};
    console.log('\nStatic file uploading...\n'.blue);
    return through.obj(function (file, env, callback) {
        var assetsPubType = cfg.assetsPubType;
        var htmlPubType = cfg.htmlPubType;
        var group = cfg.group.toLowerCase();
        var repoName = cfg.repoName;
        var version = cfg.version;
        var filePath = file.path.split('/build/')[1];

        if (filePath) {
            var suffix = path.extname(filePath);
            if (suffix === '.html' || suffix === '.htm') {
                publish(file.path,
                    htmlPubType,
                    group,
                    repoName,
                    filePath,
                    undefined,
                    true);
            } else {
                publish(file.path,
                    assetsPubType,
                    group,
                    repoName,
                    filePath,
                    version,
                    false);
            }
        } else {
            var errorMsg = 'Oops! publish fails, check the dir you want to' +
                ' publish named `build`';
            console.log(errorMsg.red);
            return;
        }

        function publish (path,
            publishType,
            group,
            repoName,
            filePath,
            version,
            clearCache) {
            var command = 'curl -F "file=@' + path +
                '" -F "publishType=' + publishType +
                '" -F "group=' + group +
                '" -F "clearCache=' + clearCache +
                '" -F "repoName=' + repoName +
                '" -F "filePath=' + filePath +
                (version ? '" -F "version=' + version : '') +
                '"  http://hfe.sankuai.com/cdn/upload';

            exec(command, {
                'timeout': cfg.timeout || 10000
            }, function (err, stdout, stderr) {
                if (err || stdout === '500') {
                    console.log(err.red);
                    var errorMsg = 'Failed: ' + filePath;
                    errCount.push(errorMsg);
                    console.log(errorMsg.red);
                } else {
                    sucCount.push(stdout);
                }

                var len = sucCount.length + errCount.length;

                if (len === num.length) {
                    var log = sortFile(sucCount);
                    console.log('\n' + log.join('\n').green);
                    if (errCount.length >= sucCount.length) {
                        var failedMsg = 'server has some problem, re-publish' +
                            ' and if there are still problems, contact ' +
                            'maquan[x]meituan.com';
                        console.log(failedMsg.red);
                    }
                    if (sucCount.length === num.length) {
                        _cb(true);
                    } else {
                        _cb(false);
                    }
                }
            });
        }
        callback();
    });
}
module.exports = Prepub;
