import checkPropTypes from "check-prop-types";
import rootReducer from "../reducers/index";
import { createStore } from "redux";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
export const checkPropTypesFunction = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
