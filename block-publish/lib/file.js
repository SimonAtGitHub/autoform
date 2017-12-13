/**
 * Created by dubaoxing on 2017/3/29.
 */
var FS = require('fs');
var File = {};
var Print = require('./print');

File.readJson = function (file) {
    var info = {};
    try {
        info = JSON.parse(FS.readFileSync(file, 'utf8'));
    } catch (e) {
        Print.error('文件' + file + '读取错误');
    }
    return info;
};

File.exist = function (file) {
    return FS.existsSync(file);
};

File.write = function (dir, con) {
    FS.writeFileSync(dir, con);
};

File.delete = function (dir) {
    if (File.exist(dir)) {
        FS.unlinkSync(dir);
    }
};

// 清空目录
File.clearDir = function (path) {
    if (File.exist(path)) {
        FS.readdirSync(path).forEach(function (file) {
            var curPath = path + '/' + file;
            if (FS.lstatSync(curPath).isDirectory()) {
                File.clearDir(curPath);
            } else {
                File.delete(curPath);
            }
        });
        FS.rmdirSync(path);
    }
};

// 清空静态资源目录
File.clearStatic = function (base) {
    File.clearDir(base + 'static');
    File.delete(base + 'index.html');
};
module.exports = File;
