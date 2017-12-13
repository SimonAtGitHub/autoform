import config from '../all-components.json'
import {
    mapModule,
    getAllModules
} from './utils/map-module'
import program from 'commander'


import upgradeDependencies from './utils/upgrade-dependencies'

program
.version('1.0.0')
.option('-u, --update', '更新')
// .option('-p, --push', '提交')
// .option('-t, --travis', '持续集成')
// .option('-tk, --token', 'github的token')
// .option('-m, --message [value]', '提交时带的信息', 'quick push')
.parse(process.argv)


import update from './update'


const allModules = getAllModules(config)

if (program.update) {
    // 更新
    mapModule(config, (info) => {
        //私有  跳过内部组件
        if (info.categoryInfo.access === 'private') {
            return
        }
       
        update(info)
    })
}



    console.log(allModules)

    // 解析 import 语句,添加依赖
    upgradeDependencies(allModules)

    // 更新版本依赖,对有修改的或者被依赖的发布新版本
    versionPatch(allModules)
