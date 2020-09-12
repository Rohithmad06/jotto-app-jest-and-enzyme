import React from "react";
import PropTypes from "prop-types";
const GuessedWords = (props) => {
  return (
    <div data-test="guessed-words-component">
      if(props.guessedWords.length===0)
      {<span data-test="guess-instructions">Please guess a word</span>}
    </div>
  );
};
GuessedWords.protoTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
