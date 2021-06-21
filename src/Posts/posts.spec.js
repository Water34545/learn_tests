import React from 'react'
import Posts from './posts'

describe('Post components', () => {
  it('should render post component', () =>{
    const component = shallow(<Posts/>)
    expect(component).toMatchSnapshot()
  })
})