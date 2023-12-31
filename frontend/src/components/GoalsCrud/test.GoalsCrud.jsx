import React from 'react'
import { shallow } from 'enzyme'

import GoalsCrud from './GoalsCrud'

describe('GoalsCrud', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<GoalsCrud {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})