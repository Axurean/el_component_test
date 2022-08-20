import Button from './button.vue'
import { mount } from '@vue/test-utils'

describe('测试按钮', () => {
  it('按钮能够显示文本', () => {
    const content = '文本'
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    })
    expect(wrapper.text()).toBe(content)
  })
  it('通过size属性控制大小', () => {
    const size = 'mini'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain('el-button--mini')
  })
  it('通过type控制类型', () => {
    const type = 'primary'
    const warpper = mount(Button, {
      props: {
        type
      }
    })
    expect(warpper.classes()).toContain('el-button--primary')
  })
})