<template>
  <div>
    <div>
      <p>基本的变量可以通过"mixins"获取，这里有开发组件需要的一些变量</p>
      <p>自定义子组件：Hello</p>
      <p>field: {{field}}</p>
      <p>model: {{model}}</p>
      <p>layout: {{layout}}</p>
      <p>to: {{to}}</p>
    </div>
  </div>
</template>

<script>
    import {baseField} from "@hfe/autoform";
    export default {
        mixins: [baseField],
        name: 'cHello',
        data () {
            return {};
        },
        methods: {}
    };
</script>

<style>

</style>
