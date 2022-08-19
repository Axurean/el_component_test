<script lang="ts">
 export default {
  name: 'ElHeader'
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
  <header
    class="el-header"
    :style="{height}"
  >
    <slot />
  </header>
</template>