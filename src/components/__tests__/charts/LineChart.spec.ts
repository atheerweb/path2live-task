import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LineChart from '@/components/charts/LineChart.vue'




describe('LineChart', () => {
  it('renders properly', () => {
    const wrapper = mount(LineChart , {props:{title:'test' , labels:[''] ,  data:[{backgroundColor:'' , data:[1] , label:''}]}})
    expect(wrapper)
  })
  it('passes title', () => {
    const wrapper = mount(LineChart , {props:{title:'testing title' , labels:[''] ,  data:[{backgroundColor:'' , data:[1] , label:''}]}})
    expect(wrapper.find("[data-test='title']").text()).toBe('testing title')
  })

})
