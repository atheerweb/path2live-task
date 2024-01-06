import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MetricCard from '@/components/charts/MetricCard.vue'


const title = 'test title'
const data = '20000'

const wrapper = mount(MetricCard , {props:{title , data }})

describe('MetricCard', () => {
  it('renders properly', () => {
    expect(wrapper)
  })
  it('it passes title', () => {
    expect(wrapper.find("[data-test='title']").text()).toBe(title)
  })
  it('it passes data', () => {
    expect(wrapper.find("[data-test='data']").text()).toBe(data)
  })
})
