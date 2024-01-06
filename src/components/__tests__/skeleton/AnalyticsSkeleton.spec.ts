import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AnalyticsSkeleton from '@/components/skeleton/AnalyticsSkeleton.vue'



const wrapper = mount(AnalyticsSkeleton)

describe('AnalyticsSkeleton', () => {
  it('renders properly', () => {
    expect(wrapper)
  })

})
