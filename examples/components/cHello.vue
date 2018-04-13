<template>
  <div>
    <div>
      <!--<p>基本的变量可以通过"mixins"获取，这里有开发组件需要的一些变量</p>-->
      <!--<p>自定义子组件：Hello</p>-->
      <!--<p>field: {{field}}</p>-->
      <p>model: {{model}}</p>
      <!--<p>layout: {{layout}}</p>-->
      <!--<p>to: {{to}}</p>-->
      <el-input
              type="input"
              :rows="2"
              placeholder="请输入内容"
              v-model="hello1"
              @change="cece">
      </el-input>
      <el-input
              type="input"
              :rows="2"
              placeholder="请输入内容"
              v-model="hello2"
              @change="cece"
      >
      </el-input>
      <el-button @click="handleClick()">点击触发事件</el-button>
    </div>
  </div>
</template>

<script>
    import {baseField} from "@hfe/autoform";
    export default {
        mixins: [baseField],
        name: 'cHello',
        data () {
            this.validateFn = {
                onlyNumber: (val) => {
                    return /^[0-9]*$/.test(val);
                }
            };
            return {
                hello1: '123',
                hello2: '456'
            };
        },
        methods: {
            handleClick() {
                this.eventBus.$emit(this.to.action, '传递任意参数',1,2,3);
            },
            cece () {
                this.model.hello = this.hello1 + this.hello2;
                console.log(this.validateFn.onlyNumber(this.model.hello));
            }
        }
    };
</script>

<style>

</style>
