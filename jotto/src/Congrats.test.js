import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr, checkPropTypesFunction } from "./test/testUtils";
import checkPropTypes from "check-prop-types";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };
const setup = (props = {}, state) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  return wrapper;
};
test("renders without error", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});
test("renders no text when success props is false", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.text()).toBe("");
});
test("renders non-empty success message when success props is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessage = findByTestAttr(wrapper, "congrats-message");
  expect(congratsMessage.text().length).not.toBe(0);
});
test("doesnot throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkPropTypesFunction(Congrats, expectedProps);
});
test("throw warning with unexpected props", () => {});
