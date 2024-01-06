import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'

import DashboardSideMenuVue from '@/components/layout/DashboardSideMenu.vue'
import NavigationBarVue from '@/components/layout/NavigationBar.vue'

describe('DashboardLayout', () => {
  it('renders properly', () => {
    const wrapper = mount(DashboardLayout)
    expect(wrapper)
  })
  it('has side menu', () => {
    const wrapper = mount(DashboardLayout)
    expect(wrapper.findComponent(DashboardSideMenuVue).exists()).toBe(true)
  })
  it('has navigation bar', () => {
    const wrapper = mount(DashboardLayout)
    expect(wrapper.findComponent(NavigationBarVue).exists()).toBe(true)
  })
})
