import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "enzyme";

class Input extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(Input);
