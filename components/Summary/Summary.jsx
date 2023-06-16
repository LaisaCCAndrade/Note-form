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
            {/* Exibe o intervalo de datas */}
            <strong>Date Interval:</strong> {step.startDate} / {step.endDate}
            <br />
            {/* Exibe o tipo de valor */}
            <strong>Value Type:</strong> {step.valueType}
            <br />
            {/* Exibe o valor */}
            <strong>Amount:</strong> {step.amount}
            <br />
          </li>
        ))}
      </ul>
      <div className="buttonComplete">
        {/* Botão para voltar e editar as escolhas */}
        <button className="back" onClick={handleEditChoices}>
          Go back and edit choices
        </button>
        {/* Botão para completar o envio do formulário */}
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
