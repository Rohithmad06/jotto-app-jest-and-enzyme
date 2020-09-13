import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "./test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
setup();
describe("render without errors", () => {
  describe("word has not been guesssed", () => {
    test("component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("component without error", () => {});
    test("doesnot render input box", () => {});
    test("doesnot render submit button", () => {});
  });
});
describe("update state", () => {});
