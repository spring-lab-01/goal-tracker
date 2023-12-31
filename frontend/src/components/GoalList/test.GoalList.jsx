import React from 'react'
import { shallow } from 'enzyme'

import GoalList from './GoalList'

describe('GoalList', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<GoalList {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})