import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropTypesFunction } from "./test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
const setup = (props = {}, state) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("doesnot throw warning with expected props", () => {
  checkPropTypesFunction(GuessedWords, defaultProps);
});
describe("If there are no words guessed", () => {
  let wrapper;
  let guessedWordComponent;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const guessedWordComponent = findByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(guessedWordComponent.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const guessedWordComponent = findByTestAttr(wrapper, "guess-instructions");
    expect(guessedWordComponent.text().length).not.toBe(0);
  });
});
describe("If there are words guessed", () => {});
