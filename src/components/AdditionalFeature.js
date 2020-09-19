import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";
const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};
const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature.id)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
// Wu3nf7nKj4fJAt
