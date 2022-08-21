import { mount } from "@vue/test-utils";
import Footer from './footer.vue'

describe('测试footer组件', () => {
  it('default height', () => {
    const wrapper = mount(Footer)
    expect(wrapper.attributes('style')).toContain('height: 60px;')
  })
  it('set height', () => {
    const height = '120px'
    const wrapper = mount(Footer, {
      props: {
        height
      }
    })
    expect(wrapper.attributes('style')).toContain('height: 120px;')
  })
})