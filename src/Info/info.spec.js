import { afterEach, expect, it } from '@jest/globals'
import { shallow } from 'enzyme'
import React from 'react'
import Info from './info'

const setUp = () => shallow(<Info />)
const componentDidMountSpy = jest.spyOn(Info.prototype, 'componentDidMount')
const componentDidUpdateSpy = jest.spyOn(Info.prototype, 'componentDidUpdate')
const componentWillUnmontSpy = jest.spyOn(Info.prototype, 'componentWillUnmount')

describe('info component', () => {
  let component

  beforeEach(() => {
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(window, 'removeEventListener')
    component = setUp()
  })

  afterEach(() => {
    window.addEventListener.mockRestore()
    window.removeEventListener.mockRestore()
  })

  it('should render Info component', () => {
    expect(component).toMatchSnapshot()
  })

  describe('lifecycle methods', () => {
    it('should call componentDidMount once', () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    })
    it('should not call componentWillUnmount when component just mounted', () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
      expect(componentWillUnmontSpy).toHaveBeenCalledTimes(0)
    })
    it('should call componentDidUpdate', () => {
      component.setProps()
      expect(componentDidUpdateSpy).toHaveBeenCalled()
    })
    it('should call componentWillUnmount', () => {
      component.unmount()
      expect(componentWillUnmontSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Component handlers', () => {
    it('should call addEventListner when component mounted', () => {
      expect(window.addEventListener).toHaveBeenCalledTimes(1) 
    })

    it('should call handleEventCange in component did update', () => {
      const instance = setUp().instance()
      instance.handleChangeTitle = jest.fn()
      instance.componentDidUpdate()
      expect(instance.handleChangeTitle).toHaveBeenCalled() 
    })

    it('should call removeEventListner when component unmounted', () => {
      component.unmount()
      expect(window.removeEventListener).toHaveBeenCalledTimes(1) 
    })

    it("should call handleWidth during window resize", () => {
      expect(component.state().width).toBe(0);
      global.dispatchEvent(new Event("resize"));
      expect(component.state().width).toBe(window.innerWidth);
    })
  })
})