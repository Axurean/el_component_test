<script lang="ts">
  export default {
    name: 'ElFooter'
  }
</script>

<script lang="ts">
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