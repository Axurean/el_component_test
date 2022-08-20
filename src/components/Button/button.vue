<script lang="ts">
  export default {
    name: 'ElButton'
  }
</script>

<script setup lang="ts">
  import { withDefaults, computed } from 'vue'
  interface Props {
    size?: '' | 'small' | 'medium' | 'mini',
    type?: '' | 'primary' | 'success' | 'danger'
  }
  const props = withDefaults(defineProps<Props>(), {
    size: '',
    type: ''
  })
  const buttonSize = computed(() => props.size || '')
  const buttonType = computed(() => props.type || '')
</script>
<template>
  <button
    class="el-button"
    :class="[
      buttonSize ? `el-button--${buttonSize}` : '',
      buttonType ? `el-button--${buttonType}` : ''
    ]"
  >
    <slot />
  </button>
</template>
<style lang="scss">
</style>