<script lang="ts">
export default {
  name: 'ElMain'
}
</script>
<script lang="ts" setup>
  import { useSlots, computed, VNode, Component } from 'vue'
  interface Props {
    direction?: string
  }
  const props = defineProps<Props>()
  const slots = useSlots()
  const isVertical = computed(() => {
    if (slots && slots.default) {
      return slots.default().some((vn:VNode) => {
        const tag = (vn.type as Component).name
        return tag === 'ElHeader' || tag === 'ElFooter'
      })
    } else {
      if (props.direction === 'vertical') {
        return true
      } else  {
        return false
      }
    }
  })
</script>
<template>
  <section
    class="el-container"
    :class="{'is-vertical': isVertical}"
  >
    <slot />
  </section>
</template>
<style lang="scss">
  @import '../../style/mixin';
  @include className(container) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    @include has(vertical) {
      flex-direction: column;
    }
  }
</style>