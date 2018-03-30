<template>
  
    <div class="editor-container">
        <gallery></gallery>
        <viewport></viewport>
        <props-editor></props-editor>
    </div>

</template>

<script>
import Gallery from "./left/left-component-galary";
import Viewport from "./mid/mid-editor";
import PropsEditor from "./right/right-prop-editor";
export default {
  components: {
    Gallery,
    Viewport,
    PropsEditor
  }
};
</script>

<style scoped>

    .editor-container{
        display: flex;
    }

    

</style>
