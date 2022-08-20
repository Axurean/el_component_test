<script lang="ts">
  export default {
    name: 'ElMain'
  }
</script>
<template>
  <main
    class="el-main"
  >
    <slot />
  </main>
</template>
<style lang="scss">
  @import '../../style/mixin.scss';
  @include className(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
  }
</style>