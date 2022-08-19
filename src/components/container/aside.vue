<script lang="ts">
  export default {
    name: 'ElAside'
  }
</script>
<script setup lang="ts">
  import { withDefaults } from 'vue'
  type propsValue = {
    width: string
  }
  withDefaults(defineProps<propsValue>(), {
    width: '300px'
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
