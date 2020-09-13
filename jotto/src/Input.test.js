import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "./test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  console.log(initialState);
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};
describe("render without errors", () => {
  describe("word has not been guesssed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("component without error", () => {
      const inputComponent = findByTestAttr(wrapper, "input-component");
      expect(inputComponent.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBoxComponent = findByTestAttr(wrapper, "input-box");
      expect(inputBoxComponent.length).toBe(1);
    });
    test("renders submit button", () => {
      const searchComponent = findByTestAttr(wrapper, "submit-button");
      expect(searchComponent.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("component without error", () => {
      const inputComponent = findByTestAttr(wrapper, "input-component");
      expect(inputComponent.length).toBe(1);
    });
    test("doesnot render input box", () => {
      const inputComponent = findByTestAttr(wrapper, "input-box");
      expect(inputComponent.length).toBe(0);
    });
    test("doesnot render submit button", () => {
      const inputComponent = findByTestAttr(wrapper, "submit-button");
      expect(inputComponent.length).toBe(0);
    });
  });
});
describe("update state", () => {});
