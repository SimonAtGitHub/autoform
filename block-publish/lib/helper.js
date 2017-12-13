/**
 * Created by dubaoxing on 2017/3/30.
 */
var crypto = require('crypto');
var Print = require('./print');
var compareversion = require('compare-versions');
var Helper = {};

// 比较 NPM 版本
Helper.compareVersion = function (a, b) {
    return compareversion(a, b) > 0;
};

// 获得主版本号
Helper.getMainVersion = function (v) {
    return v.split('.')[0];
};

// 获得 Hash
Helper.getHash = function (str) {
    var hash = crypto.createHash('SHA1');
    hash.end(str);
    return hash.read().toString('hex').substr(0, 20);
};

// 获得 Module List 唯一 Hash，排序 --> 拼接 Hash --> 生成 List Hash
Helper.getModuleListHash = function (list) {
    var str = '';
    var l = list.length;
    // List 排序
    if (l) {
        list.sort(function (a, b) {
            return parseInt(a, 16) - parseInt(b, 16);
        });
    }
    for (var i = 0; i < l; i++) {
        str += list[i];
    }
    return Helper.getHash(str);
};

// 获得美团 MIS 通过 Package.json
Helper.getMis = function (packageInfo) {
    var user = '';
    if (packageInfo.author && packageInfo.author.email) {
        user = packageInfo.author.email.split('@')[0];
    }
    if (user === '') {
        Print.error('使用正确美团邮箱开发');
    }
    return user;
};

// 获得上传组件名
Helper.getName = function (name, prefix, remove) {
    var split = (String(name)).split(prefix);
    return (remove && prefix && split.length > 1) ? split[1] : name;
};

// 名称检查
Helper.checkName = function (name, prefix) {
    if (name.substr(0, prefix.length) !== prefix) Print.error('PackageName 名称不符合规范');
};

// 关键词替换
Helper.replace = function (str, sign, replace) {
    return str.split(sign).join(replace);
};

module.exports = Helper;
