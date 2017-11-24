export default {
  props: [
    'form',
    'field',
    'model',
    'to',
    'span',
    "eventBus"
  ],
  icon: 'el-icon-edit',
  methods: {
    runFunction: function (action, e) {
      //
      switch (typeof this.to[action]) {
        case 'function':
          this.to[action].call(this, e);
          break;
        case "string":
          if (!this.eventBus) {
            console.warn('事件总线为空');
            return;
          }
          this.eventBus.$emit(this.to[action], e);
          break;
      }
    },
    onFocus: function (e) {
      this.runFunction('onFocus', e);
    },
    onBlur: function (e) {
      this.runFunction('onBlur', e);
    },
    onClick: function (e) {
      this.runFunction('onClick', e);
    },
    onChange: function (e) {
      this.runFunction('onChange', e);
    },
    onKeyup: function (e) {
      this.runFunction('onKeyup', e);
    },
    onKeydown: function (e) {
      this.runFunction('onKeydown', e);
    },
    onEmuChange: function (e) {
      let model;

      switch (Object.prototype.toString.call(e)) {
        case '[object String]':
        case '[object Number]':
          model = this.to.options.find(item => e === (item[this.to.optionKey] || item.value));
          break;
        case '[object Array]':
          model = this.to.options.filter(item => e.indexOf(item[this.to.optionKey] || item.value) >= 0);
          break;
      }

      switch (typeof this.to.onChange) {
        case 'string':
          if (!this.eventBus) {
            console.warn('事件总线为空');
            return;
          }
          this.eventBus.$emit(this.to.onChange, e, model);
          break;
        case 'function':
          this.to.onChange.call(this, e, model);
          break;
      }
    }
  }
};