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
      if (autoform.eventBus && typeof autoform.eventBus === 'object') {

        let c_autoform = [];
        _deepChildren(vm, c_autoform);

        //event  keys
        Object.keys(autoform.eventBus).forEach(eventKey => {
          c_autoform.forEach(item => {
            item.eventBus.$on(eventKey, autoform.eventBus[eventKey].bind(vm));
          });
        });
      }
    }
  }
}
