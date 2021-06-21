import React from "react";
import Counter from "./counter";

const setUp = () => shallow(<Counter />);

describe('Counter component', () => {
  let component
  let instance

  beforeEach(() => {
    component = setUp();
    instance = component.instance()
  })

  it('should render Counter component without props', () => {
    expect(component).toMatchSnapshot()
  })

  describe('Counter handlers', () => {
    it('should change count value to plus 1', () => {
      const btn = component.find('.plusOneBtn')
      btn.simulate('click')
      expect(component.state().count).toBe(1)
    })

    it('should reset counter value to 10', () => {
      const btn = component.find('.resetBtn')
      btn.simulate('click')
      expect(component.state().count).toBe(10)
    })

    it('should reset counter value to 20', () => {
      instance.handleReset(20)
      expect(component.state().count).toBe(20)
    })
  })
})