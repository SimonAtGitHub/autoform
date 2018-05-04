
import * as basicValidators from './basicValidators'

let Validators = {};

Validators =Object.assign(Validators,basicValidators)



//入参 Object 类型
export const registerValidators = (valids) => {
    let innerKeys = Object.keys(Validators)
    let repeatKeys = Object
        .keys(valids)
        .filter(item => innerKeys.includes(item));

    if(repeatKeys.length){
        console.warn(`重复的校验名有：${repeatKeys}`)
    }

    Validators =Object.assign(Validators,basicValidators)
}

export default Validators