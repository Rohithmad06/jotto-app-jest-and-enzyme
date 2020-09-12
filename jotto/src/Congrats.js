import React from "react";
import Proptypes from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="congrats-component" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations. You got the correct word
        </span>
      </div>
    );
  } else {
    return <div data-test="congrats-component" />;
  }
};

Congrats.propTypes = { success: Proptypes.bool.isRequired };
export default Congrats;
