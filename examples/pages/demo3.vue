


<template>
    <el-card>
        {{model6}}
        <auto-form ref="tagForm" :model="model6" :fields="fields8" :layout="layout6" watchChange="watch"></auto-form>
        <auto-form ref="tagForm2" :model="model5" :fields="fields7" :layout="layout6" watchChange="watch"></auto-form>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
      model6: {},
      fields8: null,
      layout6: null,
      model5: null,
      fields7: null
    };
  },
  autoform: {
    eventBus: {
      handleChange1(value, options, field) {
        console.log(value, options, field);
      },
      handleChange2(value, options, field) {
        console.log(value, options, field);
      },
      displayFn(field, model, cb) {
        //console.log(field, model);
        if (model.status) {
          cb(true);
        } else {
          cb(false);
        }
      },
      watch(keys, fields, model) {
        console.log("model发生变化", keys, fields, model);
      },
      name1KeyUP(){
          console.log(11)
      }
    }
  },
  mounted() {
    let aa = {
      model5: {
        name1: "111",
        name2: ""
      },
      model6: {
        name1: "111",
        name2: ""
      },
      layout6: {
        align: "left",
        labelWidth: "100px",
        inline: false,
        gutter: 30
      },
      fields8: [
        [
          {
            key: "name1",
            type: "input",
            templateOptions: {
              span: 12,
              label: "活动名称1111",
              onKeyup:"name1KeyUP"
            },
            isWatch: true
          },
          {
            key: "name2",
            type: "input",
            templateOptions: {
              span: 12,
              label: "活动名称21111"
            }
          }
        ]
      ],
      fields7: [
        [
          {
            key: "name1",
            type: "input",
            templateOptions: {
              span: 12,
              label: "活动名称1"
            }
          },
          {
            key: "name2",
            type: "input",
            templateOptions: {
              span: 12,
              label: "活动名称2"
            }
          }
        ]
      ]
    };

    setTimeout(() => {
      this.fields8 = aa.fields8;
      this.fields7 = aa.fields7;
    }, 1000);

    setTimeout(() => {
      this.layout6 = aa.layout6;
    }, 1000);
  }
};
</script>

<style>

</style>
