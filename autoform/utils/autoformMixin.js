function _deepChildren(components, result = []) {
  let $children = components.$children;
  if (!$children.length) {
    return;
  }
  $children.forEach(item => {

    if (item.__name__ === 'autoForm') {
      result.push(item);
    }
    _deepChildren(item, result)
  });
}


export default {
  mounted() {
    const vm = this
    const autoform = vm.$options.autoform;

    if (autoform) {
      let c_autoform = [];
      _deepChildren(vm, c_autoform);
      mountedEventBus(autoform, c_autoform, vm);
      mountedValidators(autoform, c_autoform, vm)
    }

  }
}


function mountedEventBus(autoform, c_autoform, vm) {

  //eventBus
  if (autoform.eventBus && typeof autoform.eventBus === 'object') {
    //event  keys
    Object
      .keys(autoform.eventBus)
      .forEach(eventKey => {
        c_autoform.forEach(item => {
          item
            .eventBus
            .$on(eventKey, autoform.eventBus[eventKey].bind(vm));
        });
      });
  }
}

function mountedValidators(autoForm, c_autoform, vm) {
  //校验
  if (autoform.validators && typeof autoform.validators === 'object') {
    c_autoform.forEach(item => {
      let format_validators = Object
        .keys(autoform.validators)
        .reduce((prev, nxt) => {
          //chkAge:change
          prev[nxt] = (str) => {
            return {
              validator: autoform.validators[nxt],
              trigger: str.split(':')[1] | 'change'
            };
          }
          return prev;
        }, {})
      item.validLib = format_validators
    });
  }
}