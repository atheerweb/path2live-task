import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BarChart from '@/components/charts/BarChart.vue'




describe('BarChart', () => {
  it('renders properly', () => {
    const wrapper = mount(BarChart , {props:{title:'test' , labels:[''] ,  data:[{backgroundColor:'' , data:[1] , label:''}]}})
    expect(wrapper)
  })
  it('passes title', () => {
    const wrapper = mount(BarChart , {props:{title:'testing title' , labels:[''] ,  data:[{backgroundColor:'' , data:[1] , label:''}]}})
    expect(wrapper.find("[data-test='title']").text()).toBe('testing title')
  })

})
