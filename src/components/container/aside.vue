<script lang="ts">
  export default {
    name: 'ElAside'
  }
</script>
<script lang="ts" setup>
  import { withDefaults } from 'vue'
  interface Props {
    width?: string
  }
  withDefaults(defineProps<Props>(), {
    width:'300px'
  })
</script>

<template>
  <aside
    class="el-aside"
    :style="{width}"
  >
    <slot />
  </aside>
</template>

<style lang="scss">
  @import '../../style/mixin.scss';
  @include className(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>
