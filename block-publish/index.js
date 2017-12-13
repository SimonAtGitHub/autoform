'use strict';

var File = require('./lib/file');
var Print = require('./lib/print');
var Resolve = require('./lib/resolve');
var Helper = require('./lib/helper');
var PublishStatic = require('./lib/publish-static');
var PublishComponent = require('./lib/publish-component');

// 项目根路径
var rootPath = '';
// 项目版本
var rootVersion = '';
// 项目名称
var rootName = '';
// 全部 Module 列表
var rootModules = {};
// Module ID --> Hash 映射
var rootModuleIdMap = {};
// 同步 Module Hash 列表
var rootModuleSynList = [];
// 分片关系映射 分片 ID --> Chunk Hash 映射
var rootChunkIdMap = {};
// 分片关系映射 分片 Hash --> Module Hash 列表
var rootChunkModuleMap = {};
// 项目入口 Hash
var rootEntry = '';
// 上传组件服务器地址
var rootServer = '';
// 执行过程中最近 Pacake Name
var runtimeName = null;
// 组件命名规则
var namePrefix = null;
// 移除 Prefix
var removePrefix = false;
// Module 规则
var moduleRules = {
    include: [],
    exclude: []
};


function Poster (options) {
    if (options.server) {
        rootServer = options.server;
    }
    if (options.prefix && typeof options.prefix === 'object') {
        var prefix = options.prefix;
        if (prefix.hasOwnProperty('name') && prefix.name) namePrefix = prefix.name;
        if (prefix.hasOwnProperty('remove') && prefix.remove) removePrefix = true;
    }
    if (options.module && typeof options.module === 'object') {
        var module = options.module;
        if (module.hasOwnProperty('include')) {
            if (module.include instanceof RegExp) {
                moduleRules.include = [module.include];
            } else if (Array.isArray(module.include)) {
                module.include.forEach(function (n) {
                    if (n instanceof RegExp) moduleRules.include.push(n);
                });
            }
        }
        if (module.hasOwnProperty('exclude')) {
            if (module.exclude instanceof RegExp) {
                moduleRules.exclude = [module.exclude];
            } else if (Array.isArray(module.exclude)) {
                module.exclude.forEach(function (n) {
                    if (n instanceof RegExp) moduleRules.exclude.push(n);
                });
            }
        }
    }
}

// 获得实际路径
function getRealPath (mix) {
    var path = mix.split(rootPath);
    var length = path.length;
    return path[length - 1];
}

// 获得路径信息
function getPath (path) {
    var index = path.lastIndexOf('node_modules');
    var ret = '';
    if (index === -1) {
        ret = '/' + rootName + path;
    } else {
        ret = path.slice(13);
    }
    return ret;
}

// 获得版本信息
function getVersion (path) {
    var version = '';
    var index = path.lastIndexOf('node_modules');
    var prefix = path.slice(0, index) + 'node_modules';
    var suffix = path.slice(index + 13);
    var suffixs = suffix.split('/');
    if (index !== -1) {
        var root = rootPath + prefix + '/';
        var packadd = root + suffixs[0] + '/package.json';
        if (File.exist(packadd)) {
            var packageInfo = File.readJson(packadd);
            version = packageInfo.version;
            runtimeName = packageInfo.name;
        } else {
            packadd = root + suffixs[0] + '/' + suffixs[1] + '/package.json';
            if (File.exist(packadd)) {
                var deepPackageInfo = File.readJson(packadd);
                version = deepPackageInfo.version;
                runtimeName = deepPackageInfo.name;
            }
        }
    } else {
        version = rootVersion;
    }
    return version;
}

// 获得 Module 列表
function getModules (node, isEntry, entryId) {
    var l = node.length;
    var ret = [];
    var tpl = {
        id: 0,
        path: '',
        hash: '',
        version: '',
        source: ''
    };
    var hash = [];
    // 数据结构形式
    var isObject = node[0] === '{\n';

    for (var n = 0; n < l; n++) {
        var c = node[n];
        if (typeof c === 'string') {
            // 以对象形式设置 Module 加载列表
            if (isObject && c.substr(0, 3) === '\n/*') {
                tpl.id = c.slice(7, c.length - 2);
            }
            // 以数组形式设置 Module 加载列表
            if (!isObject && c.substr(0, 3) === '/* ') {
                tpl.id = c.slice(3, c.length - 3);
            }
        }
        if (typeof c === 'object' && c.children && c.children.length) {
            var parent = c.children;
            var clen = parent.length;
            var offset = clen - 2;
            if (typeof parent[offset] === 'object' && tpl.id !== entryId) {
                var o = parent[offset];
                var source = Resolve.getModuleSource(o);
                // 获得附带 Loader 信息的路径
                var name = Resolve.getModuleName(o, runtimeName, source, rootPath);
                // 获得去除 Loader 信息的路径
                var realPath = getRealPath(name);
                // 获得路径信息，/PackageName/realpath
                tpl.path = getPath(realPath);
                // 封装 source
                tpl.source = Resolve.joinSource(source, parent);
                // 依据 Package Name 解析 package.json 获取版本信息
                tpl.version = getVersion(realPath);
                // Module Hash 由主版本 + 包相对路径组成
                var hashSeed = Helper.getMainVersion(tpl.version) + tpl.path;
                tpl.hash = Helper.getHash(hashSeed);
                // 设置入口组件文件 Hash，不加入版本进行 Hash；
                var entryName = rootName + '/src/index.vue';
                var entryNameLength = entryName.length;
                if (rootEntry === '' && tpl.path.substr(-entryNameLength) === entryName) {
                    rootEntry = tpl.hash;
                }
                ret.push(JSON.parse(JSON.stringify(tpl)));
            }
        }
    }

    // 转成 Module 对象
    var len = ret.length;
    for (var i = 0; i < len; i++) {
        var con = ret[i];
        // 如果已存在该 Module 比较版本 更新版本及源码
        if (rootModules.hasOwnProperty(con.hash)) {
            if (Helper.compareVersion(rootModules[con.hash].version, con.version)) {
                Print.warning('依赖分析中存在嵌套不同版本依赖，有风险 ！');
                rootModules[con.hash].version = con.version;
                rootModules[con.hash].source = con.source;
            }
        } else {
            rootModules[con.hash] = {
                path: con.path,
                version: con.version,
                source: con.source
            };
        }
        // 储存 同步 Module 列表
        if (isEntry) {
            rootModuleSynList.push(con.hash);
        }
        // 当前 File 关联 Module 列表
        hash.push(con.hash);
        // 存储 Module ID 与 Hash 映射
        rootModuleIdMap[con.id] = con.hash;
    }
    return hash;
}

// 替换 webpack context 中 module Id
function setModuleWebpackContext (module) {
    var m = module;
    var match = m.match(/__webpack_\d+_id__/g);
    var list = [];
    if (match && match.length) {
        match.forEach(c => {
            var l = c.length;
            list.push(c.slice(10, l - 5));
        });
    }
    list.forEach(v => {
        var hash = rootModuleIdMap[v];
        m = Helper.replace(m, '__webpack_' + v + '_id__', hash);
    });
    return m;
}

// 模块局部 ID 转换为全局 Hash
function setModuleGlobal (module) {
    var m = module;
    var synMatches = m.match(/__webpack_require__\(\d{0,9999}\)/g);
    var syn = [];
    var asynMatches = m.match(/__webpack_require__.e\/\* require.ensure \*\/\(\d{0,999}\)/g);
    var asyn = [];
    if (synMatches && synMatches.length) {
        synMatches.forEach(function (match) {
            var l = match.length;
            syn.push(match.slice(20, l - 1));
        });
    }
    if (asynMatches && asynMatches.length) {
        asynMatches.forEach(function (match) {
            var l = match.length;
            asyn.push(match.slice(42, l - 1));
        });
    }
    syn.forEach(function (s) {
        var hash = rootModuleIdMap[s];
        m = Helper.replace(m, '__webpack_require__(' + s + ')', "__webpack_require__('" + hash + "')");
    });
    asyn.forEach(function (a) {
        var hash = rootChunkIdMap[a];
        m = Helper.replace(m, '__webpack_require__.e/* require.ensure */(' + a + ')', "__webpack_require__.e/* require.ensure */('" + hash + "')");
    });
    if (m.indexOf('__webpack_with_context__') !== -1) {
        m = setModuleWebpackContext(m);
    }
    return m;
}

// 替换 JS 中静态资源地址为统一静态资源地址
function changeStaticPath (source, others) {
    var result = source;
    if (others && others.length) {
        others.forEach(function (i) {
            var key = '__webpack_require__.p + "' + i;
            if (result.indexOf(key) !== -1) {
                result = Helper.replace(result, key, '"//awp-assets.meituan.net/hfe/block/' + i);
            }
        });
    }
    return result;
}

// 局部 ID 最终转换为 全局 Hash
function finalFormat (data, others) {
    for (var i in data.modules) {
        if (data.modules.hasOwnProperty(i)) {
            data.modules[i].source = setModuleGlobal(data.modules[i].source);
            data.modules[i].source = changeStaticPath(data.modules[i].source, others);
        }
    }
    return data;
}

// 设置 Chunk Id Map
function setRootChunkIdMap (chunkIds, hash) {
    if (chunkIds.length) {
        chunkIds.forEach(function (c) {
            rootChunkIdMap[c] = hash;
        });
    }
}

Poster.prototype.apply = function apply (compiler) {
    compiler.plugin('after-emit', function onAfterEmit (compilation, done) {
        var component = {};
        var assets = compilation.assets;
        var root = rootPath = compilation.options.context;
        var packageJson = File.readJson(root + '/package.json');
        // 设置版本信息
        component.version = rootVersion = packageJson.version;
        // 保存根名称
        rootName = packageJson.name;
        // 检查名称
        Helper.checkName(rootName, namePrefix);
        // 设置名称
        component.name = Helper.getName(rootName, namePrefix, removePrefix);
        // Module 列表
        component.modules = {};
        // Chunk 分片关联信息
        component.chunks = {};
        // 组件样式
        component.style = ' ';
        // 描述文件
        component.description = File.readJson(root + '/description.json');
        // Other Static
        var otherStatic = false;
        var otherStaticList = [];
        var staticDir = root + '/build/';
        // 生成同步模块列表 地址 hash 为 key 包含模块版本 模块内容
        // 生成异步模块列表
        for (var i in assets) {
            if (assets.hasOwnProperty(i)) {
                var c = assets[i];
                // JS asset 处理
                if (/\.js$/.test(i)) {
                    if (c._source && c._source.children.length && c._source.children[0] && c._source.children[0].children) {
                        var s = c._source.children[0].children;
                        if (typeof s[0] === 'string') {
                            // 主入口 JS
                            if (typeof s[5] === 'object' && s[5].children.length) {
                                getModules(s[5].children, true, Resolve.getEntryId(s[1]));
                                // 分片 JS
                            } else {
                                var chunks = getModules(s[1].children, false, -1);
                                // 生成 Chunk 分片 Hash
                                var hash = Helper.getModuleListHash(chunks);
                                // 分片结果 Id
                                var chunkIds = Resolve.getChunkIds(s[0]);
                                // 存储 Chunk 分片 Hash 与 Module 列表映射
                                rootChunkModuleMap[hash] = chunks;
                                // 分片 Id 映射 Chunk Map
                                setRootChunkIdMap(chunkIds, hash);
                            }
                        }
                    }
                }
                // CSS asset 处理
                if (/\.css$/.test(i)) {
                    var style = '';
                    if (c._value) {
                        style += c._value;
                    }
                    component.style = style;
                }
                if ((/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(i) || /\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(i))) {
                    otherStaticList.push(i);
                    if (!otherStatic) otherStatic = true;
                }
            }
        }
        // 清空 CSS JS 目录
        File.clearStatic(staticDir);
        // 分片关联 Module 信息
        component.chunks = rootChunkModuleMap;
        // Module 列表
        component.modules = rootModules;
        // 默认加载 Module Hash 列表
        component.default = rootModuleSynList;
        // 默认入口 Module Hash
        component.entry = rootEntry;
        // 操作用户
        component.user = Helper.getMis(packageJson);
        // 最终格式化
        finalFormat(component, otherStaticList);
        // 上传剩余静态文件到 CDN
        PublishStatic.static(staticDir, otherStatic, function () {
            // 发布组件信息到组件管理 Server
            PublishComponent(rootServer, component, function (err, res) {
                let msg = null;
                if (err) {
                    msg = '请求错误，请检查网络连接或联系管理员';
                } else {
                    if (res && res.body && res.body.hasOwnProperty('code')) {
                        if (parseInt(res.body.code) === 0) {
                            // Print.success('组件发布完成');
                        } else {
                            msg = res.body.msg;
                        }
                    } else {
                        msg = '服务器错误，请重试或联系管理员';
                    }
                }
                return done(msg);
            });
        });
    });
};




module.exports = Poster;
