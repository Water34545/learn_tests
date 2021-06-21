import React from 'react'
import Posts from './posts'

const setUp = () => shallow(<Posts/>)

describe('Post components', () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance()
  })

  it('should render post component', () =>{
    expect(component).toMatchSnapshot()
  })

  describe('Post handlers', () => {
    it('should handel search input value', () =>{
      expect(component.state().searchQuery).toBe('')
      instance.handleInputChange({target: {value: 'test'}})
      expect(component.state().searchQuery).toBe('test')
    })

    it('should handel change per page', () =>{
      expect(component.state().hitsPerPage).toBe(20)
      instance.handleHitsChange({target: {value: String(DEFAULT_PAGE)}})
      expect(component.state().hitsPerPage).toBe(10)
    })

    it('should handel change per page if clicked "Enter"', () =>{
      instance.setState({page: DEFAULT_PAGE})
      instance.getSearch({key: 'Enter'})
      expect(component.state().page).toBe(0)
    })

    it('should handel change per page if clicked "a"', () =>{
      instance.setState({page: DEFAULT_PAGE})
      instance.getSearch({key: 'a'})
      expect(component.state().page).toBe(DEFAULT_PAGE)
    })
  })
})