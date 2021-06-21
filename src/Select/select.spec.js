import { shallow } from 'enzyme'
import React from 'react'
import Select from './select'

const props = {
  options: [
    {value: 'test1', label: 'test1'},
    {value: 'test2', label: 'test2'},
  ],
  value: 0,
  handleChange:() => {}
}

const setUp = (props) => shallow(<Select {...props}/>)

describe('Select components', () => {
  describe('has props', () =>{
    const component = setUp(props)

    it('should render select element', () => {
      const select = component.find('select')
      expect(select).toHaveLength(1)
    })

    it('should render 2 options', () => {
      const options = component.find('option')
      
      expect(options).toHaveLength(2)
    })
  })
  describe('hasnt props', () =>{
    it('should render placeholder', () => {
      const component = shallow(<Select/>)
      const placeholder = component.find('.placeholder')
      expect(placeholder).toHaveLength(1)
    })
  })

  describe('defaultProps', () =>{
    it('should use default handleChange', () => {
      const result = Select.defaultProps.handleChange()
      expect(result).toBe(undefined)
    })
  }) 
})