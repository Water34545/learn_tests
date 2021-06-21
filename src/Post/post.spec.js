import React from "react";
import Post from "./post";

const setUp = (props) => shallow(<Post {...props}/>)

describe("should render Post component", () => {
  let component

  beforeEach(() => {
    component = setUp()
  })

  it("should render .post wrapper", () => {
    const wrapper = component.find('.post')
    expect(wrapper.length).toBe(1)
  });
  
  it("should contain link", () => {
    const wrapper = component.find('a')
    expect(wrapper.length).toBe(1)
  });

  it("should render created date", () => {
    const created_at = '01-03-2021'
    component = setUp({created_at})
    const wrapper = component.find('.date')
    expect(wrapper.text()).toBe(new Date(created_at).toLocaleDateString())
  });
})