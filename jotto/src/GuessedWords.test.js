import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropTypesFunction } from "./test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };

  console.log(setupProps);
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
describe("If there are words guessed", () => {
  const guessedWords = {
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 },
    ],
  };
  let wrapper;
  beforeEach(() => {
    wrapper = setup(guessedWords);
  });
  test("renders without errors", () => {
    const guessedWordComponent = findByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(guessedWordComponent.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedWordsTablesComponent = findByTestAttr(
      wrapper,
      "guessed-words-table-component"
    );
    expect(guessedWordsTablesComponent.length).not.toBe(0);
  });
  test("correct number of guessed words", () => {
    const guessedWordsRow = findByTestAttr(wrapper, "guessed-words-table-row");
    console.log(guessedWordsRow.debug());
    expect(guessedWordsRow.length).toBe(guessedWords.length);
  });
});
