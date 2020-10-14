import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { shallow, mount } from "enzyme";
import DisplayMealsContainer from "../Containers/displayMealsContainer";
configure({ adapter: new Adapter() });

describe("App component", () => {
  const wrapper = mount(<DisplayMealsContainer />);
  it("test for component render", () => {
    wrapper.find("#inputbox").simulate("keyup");
    expect(wrapper).toBeDefined();
  });
  it("test for onSearchEnter()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onSearchEnter");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onSearchEnter(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });

  it("test for onMealSelect()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onMealSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onMealSelect(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
  it("test for onMealSearch()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onMealSearch");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onMealSearch(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
});
