import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    console.log(this.props.success);
    const content = !this.props.success && (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="input-component">{content}</div>;
  }
}

const mapStateToProps = (state) => {
  return { success: state.success };
};
export default connect(mapStateToProps)(Input);
