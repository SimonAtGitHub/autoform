/**
 * Created by dubaoxing on 2017/3/30.
 */
var Resolve = {};
var Print = require('./print');
var File = require('./file');
var webpackContextCount = {};

// 拼接 Source ，Head + Source + Foot
Resolve.joinSource = function (source, parent) {
    var ret = '';
    parent.forEach(function (s) {
        if (typeof s === 'string') {
            ret += s;
        } else {
            ret += source;
        }
    });
    return ret;
};

// 结构体中 获得实际 Module Source
Resolve.getModuleSource = function (o) {
    var source = '';
    if (o._cachedSource) {
        source = o._cachedSource;
    } else if (o.source._value) {
        source = o._source._value;
    } else if (o._value) {
        source = Resolve.webpackContextSource(o._value);
    } else {
        source = o._source.source._value;
    }
    return source;
};

// Webpack context 解析
Resolve.webpackContextName = function (last, source, rootPath) {
    var ret = null;
    if (last && source.indexOf('webpackContextResolve') !== -1) {
        var count = 0;
        if (webpackContextCount.hasOwnProperty(last)) {
            count = webpackContextCount[last];
        } else {
            webpackContextCount[last] = 0;
        }
        ret = rootPath + '/node_modules/' + last + '/__webpack_context__/' + count;
        webpackContextCount[last]++;
    }
    return ret;
};

// Webpack context 解析
Resolve.webpackContextSource = function (source) {
    if (source.indexOf('webpackContextResolve') === -1) return source;
    return '/* __webpack_with_context__ */' + (source.replace(/(\d+)(,\n)/g, "'__webpack_$1_id__',\n").replace(/(\d+);$/, "'__webpack_$1_id__';").replace(/(\d+)\n}/, "'__webpack_$1_id__'\n}"));
};

// 结构体中 获得实际 Module Name
Resolve.getModuleName = function (o, last, source, rootPath) {
    if (!o._source) {
        var context = Resolve.webpackContextName(last, source, rootPath);
        if (!context) Print.error('组件解析失败');
        return context;
    }
    var s = o._source._name ? o._source._name : o._source._source._name;
    /* 对于 bundle-loader 进行重命名，确保跟原 Module 隔离 */
    if (s.indexOf('bundle-loader/index.js') !== -1) {
        s = Resolve.insertBundleLoader(s, rootPath);
    }
    if (s.substr(-4) === '.vue') {
        s = Resolve.vueLoader(s);
    }
    return s;
};

/* 解析 Vue 文件，单个同目录 Vue 文件包含四个 Module， 需根据类型重命名 */
Resolve.vueLoader = function (name) {
    var ret = '';
    if (name.indexOf('vue-loader/index.js') === -1) {
        if (name.indexOf('vue-loader/lib/selector.js?type=script') !== -1) {
            ret = '.script';
        } else if (name.indexOf('vue-loader/lib/selector.js?type=template') !== -1) {
            ret = '.template';
        } else if (name.indexOf('vue-loader/lib/selector.js?type=styles') !== -1) {
            ret = '.style';
        }
    }
    return name + ret;
};

/* bundler loader 生成的跳转 Module 统一添加私有目录 */
Resolve.insertBundleLoader = function (s, root) {
    var p = s.split(root);
    // 实际文件路径
    var real = p[p.length - 1];
    var index = real.lastIndexOf('node_modules');
    // 返回结果
    var full = null;
    // bundle 实际分割标识符
    var bundle = '__webpack_bundle_loader__';
    // 不包含 node_module
    if (index === -1) {
        full = root + '/' + bundle + real;
        // 包含 node_module
    } else {
        // 前缀
        var spliter = index + 13;
        var tring = root + real.slice(0, spliter);
        var left = real.slice(spliter);
        var pathArr = left.split('/');
        // 是否获得实际包名
        var getName = false;
        pathArr.forEach(function (l) {
            tring += l + '/';
            if (!getName && File.exist(tring + 'package.json')) {
                tring += bundle + '/';
                getName = true;
            }
        });
        if (!getName) Print.error('bundle-loader 依赖解析错误 ~');
        full = tring;
    }
    return full;
};

// 解析 Chunk 对应 ID 列表
Resolve.getChunkIds = function (head) {
    return head.split('[')[1].split(']')[0].split(',');
};

// 获得当前组件生成代码入口 Module ID
Resolve.getEntryId = function (source) {
    var src = '';
    if (!source._source && !source._source._value && typeof source !== 'string') {
        Print.error('无法正确解析组件');
    } else {
        src = source._source._value;
    }
    var tail = src.substr(-20);
    var useful = tail.split('= ')[1];
    return useful.split(')')[0];
};

module.exports = Resolve;
