import React from "react";
import PropTypes from "prop-types";
const GuessedWords = (props) => {
  const tableRows = props.guessedWords.map((word, index) => {
    return (
      <tr key={index} data-test="guessed-words-table-row">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    );
  });
  return (
    <div data-test="guessed-words-component">
      {props.guessedWords.length === 0 ? (
        <span data-test="guess-instructions">Please guess a word</span>
      ) : (
        <table data-test="guessed-words-table-component" className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      )}
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
