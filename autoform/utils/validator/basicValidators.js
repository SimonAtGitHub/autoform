function _format_parameters(str) {
    let pemeters = str.split(':');

    return pemeters;
}

//required:change:请输入
export const required = (str) => {
    let pemeters = _format_parameters(str)
    return {
        required: true,
        message: pemeters[2],
        trigger: pemeters[1] | 'blur'
    }
}
//type:array:true:change:请至少选择一个活动性质
export const type = (str) => {
    let pemeters = _format_parameters(str)
    return {type: pemeters[1], required: pemeters[2], message: pemeters[4], trigger: pemeters[3]}
}
//range:3:5:blur:长度在 3 到 5 个字符
export const range = (str) => {
    let pemeters = _format_parameters(str)
    return {min: pemeters[1], max: pemeters[2], message: pemeters[4], trigger: pemeters[3]}
}

//len:3:blur:长度不小于
export const len = (str) => {
    let pemeters = _format_parameters(str)
    return {len: pemeters[1], message: pemeters[3], trigger: pemeters[2]}
}