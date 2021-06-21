import React from 'react'
import Title from './title'

describe('Ешеду component', () => {
  it('should render Ешеду component with props', () =>{
    const component = shallow(<Title title='test '/>)
    expect(component).toMatchSnapshot()
  })
  it('should render Ешеду component without props', () =>{
    const component = shallow(<Title/>)
    expect(component).toMatchSnapshot()
  })
})