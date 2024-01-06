import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DynamicChart from '@/components/charts/DynamicChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'

const title = 'test title'
const data = [
  { label: '',
  backgroundColor: '',
  data: [1]}
]
const labels = ['a', 'b', 'c']



describe('DynamicChart', () => {
  it('renders properly', () => {
    const wrapper = mount(DynamicChart , {props:{title , data , labels , type:'bar'}})
    expect(wrapper)
  })
  it('it shows bar chart if type is bar', () => {
    const wrapper = mount(DynamicChart , {props:{title , data , labels , type:'bar'}})
    expect(wrapper.findComponent(BarChart).exists()).toBe(true)
  })
  it('it shows line chart if type is line', () => {
    const wrapper = mount(DynamicChart , {props:{title , data , labels , type:'line'}})
    expect(wrapper.findComponent(LineChart).exists()).toBe(true)
  })
})
