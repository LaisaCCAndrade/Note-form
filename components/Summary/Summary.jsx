// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Summary = ({ steps, handleEditChoices }) => {
  return (
    <>
      <h2>Summary</h2>
      <ul className="list">
        {steps.map((step, index) => (
          <li key={index}>
            <strong>Date Interval:</strong> {step.startDate} / {step.endDate}
            <br />
            <strong>Value Type:</strong> {step.valueType}
            <br />
            <strong>Amount:</strong> {step.amount}
            <br />
          </li>
        ))}
      </ul>
      <div className="buttonComplete">
        <button className="back" onClick={handleEditChoices}>
          Go back and edit choices
        </button>
        <button className="finish">Complete the form submission</button>
      </div>
    </>
  );
};

Summary.propTypes = {
  steps: PropTypes.array.isRequired,
  handleEditChoices: PropTypes.func.isRequired,
};

export default Summary;
