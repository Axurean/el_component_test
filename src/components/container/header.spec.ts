import { mount } from "@vue/test-utils";
import Header from './header.vue'

describe('test Header component', () => {
  it('test default height', () => {
    const wrapper = mount(Header)
    expect(wrapper.attributes('style')).toContain('height: 60px;')
  })
  it('test set height', () => {
    const height= '120px'
    const wrapper = mount(Header, {
      props: {
        height
      }
    })
    expect(wrapper.attributes('style')).toContain('height: 120px;')
  })
})