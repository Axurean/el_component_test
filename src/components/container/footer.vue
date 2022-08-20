<script lang="ts">
  export default {
    name: 'ElFooter'
  }
</script>

<script lang="ts" setup>
  import { withDefaults } from 'vue'

  interface Props {
    height?: string
  }

  withDefaults(defineProps<Props>(), {
    height: '60px'
  })
</script>

<template>
  <footer
    class="el-footer"
    :style="{height}"
  >
    <slot />
  </footer>
</template>
<style lang="scss">
  @import '../../style/mixin.scss'; 
  @include className(footer) {
    padding: $--footer-padding;
    box-sizing: border-box;
    flex-shrink: 0;
    @include m(inner){
      width:300px;
    }
  }
</style>