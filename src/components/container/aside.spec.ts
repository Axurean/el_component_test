import Aside from './aside.vue'
import { mount } from '@vue/test-utils'

describe('测试侧边栏', () => {
  it ('测试默认宽度', () => {
    const wrapper = mount(Aside, {
      props: {}
    })
    expect(wrapper.attributes('style')).toContain('width: 300px;')
  })
  it ('测试传参宽度', () => {
    const width = '200px'
    const wrapper = mount(Aside, {
      props: {
        width
      }
    })
    expect(wrapper.attributes('style')).toContain('width: 200px;')
  })
})