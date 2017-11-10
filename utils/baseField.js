export default
{
    props: [
        'form',
        'field',
        'model',
        'to',
        'span'
    ],
    icon: 'el-icon-edit',
    methods: {
        runFunction: function (action, e) {
            if (typeof this.to[action] === 'function') this.to[action].call(this, e);
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
        }
    }
};
