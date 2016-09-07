import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../App'

describe('App', () => {
  it('should render the App', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<App />)
    const actual = renderer.getRenderOutput().props.children.props.children
    const expected = 'Hello, world'
    expect(actual).to.contain(expected)
  })
})
