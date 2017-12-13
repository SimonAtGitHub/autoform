import path from 'path'
import mkdirp from 'mkdirp'
import fs from 'fs'

const createIfNotExist = (targetPath)=> {
    if (fs.existsSync(path.join(targetPath))) return
    mkdirp.sync(targetPath)
}


const createLibFolderIfNotExist = ()=> {
    createIfNotExist('lib')
}

const createCategoryFolderIfNotExist = (info)=> {
    createIfNotExist(path.join('lib', info.categoryName))
}




export default (info) => {
    // 创建 lib 文件夹
    createLibFolderIfNotExist()
    // 创建 分类 文件夹
    createCategoryFolderIfNotExist(info)
    // clone 组件
    // cloneModuleIfNotExist(info)
    // // 判断当前组件目录 git版本控制是否正确
    // checkGitControl(info)
    // // try pull
    // tryPull(getModulePath(info))
    // // 补上组件没有的文件
    // emptyModuleDefault(info)
}