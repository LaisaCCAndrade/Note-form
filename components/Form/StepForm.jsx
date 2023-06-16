// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Input from "../Inputs";

const StepForm = ({ step, index, handleInputChange, handleRemoveStep }) => {
  return (
    <div className="containerForm">
      <h2>Annotation {index + 1}</h2>
      <div>
        {/* Campo de entrada para a data de início */}
        <Input
          id="startDate"
          label="Start Date:"
          type="date"
          value={step.startDate}
          onChange={(e) =>
            handleInputChange(index, "startDate", e.target.value)
          }
          required
        />
      </div>
      <div>
        {/* Campo de entrada para a data de término */}
        <Input
          id="endDate"
          label="End Date:"
          type="date"
          value={step.endDate}
          onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
          min={step.startDate}
          required
        />
      </div>

      <div>
        <label>Value Type:</label>
        {/* Dropdown para selecionar o tipo de valor */}
        <select
          value={step.valueType}
          onChange={(e) =>
            handleInputChange(index, "valueType", e.target.value)
          }
          required
        >
          <option value="">Select value type</option>
          <option value="Fixed">Fixed</option>
          <option value="Percentage">Percentage</option>
        </select>
      </div>
      <div>
        {/* Campo de entrada para o valor */}
        <Input
          id="amount"
          label="Amount:"
          type="number"
          value={step.amount}
          onChange={(e) => handleInputChange(index, "amount", e.target.value)}
          min={step.valueType === "Percentage" ? 0 : ""}
          max={step.valueType === "Percentage" ? 100 : ""}
          required
        />
      </div>

      {/* Botão para remover o passo */}
      {index > 0 && (
        <button
          className="removed"
          type="button"
          onClick={() => handleRemoveStep(index)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

StepForm.propTypes = {
  step: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    valueType: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleRemoveStep: PropTypes.func.isRequired,
};

export default StepForm;
