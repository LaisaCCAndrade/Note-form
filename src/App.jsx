import React, { useState } from "react";
import "./App.css";

const MultiStepForm = () => {
  const [steps, setSteps] = useState([
    { startDate: "", endDate: "", valueType: "", amount: "" },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [summaryVisible, setSummaryVisible] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const handleAddStep = () => {
    setSteps([
      ...steps,
      { startDate: "", endDate: "", valueType: "", amount: "" },
    ]);
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSummaryVisible(true);
  };

  const handleEditChoices = () => {
    setSummaryVisible(false);
  };

  return (
    <div className="container">
      <h1>Note Form</h1>
      {summaryVisible ? (
        <>
          <h2>Summary</h2>
          <ul className="list">
            {steps.map((step, index) => (
              <li key={index}>
                <strong>Date Interval:</strong> {step.startDate} -{" "}
                {step.endDate}
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
      ) : (
        <form onSubmit={handleSubmit} className="form">
          {steps.map((step, index) => (
            <div key={index} className="containerForm">
              <h2>Annotation {index + 1}</h2>
              <div>
                <label>Start Date:</label>
                <input
                  type="date"
                  value={step.startDate}
                  onChange={(e) =>
                    handleInputChange(index, "startDate", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label>End Date:</label>
                <input
                  type="date"
                  value={step.endDate}
                  onChange={(e) =>
                    handleInputChange(index, "endDate", e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <label>Value Type:</label>
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
                <label>Amount:</label>
                <input
                  type="number"
                  value={step.amount}
                  onChange={(e) =>
                    handleInputChange(index, "amount", e.target.value)
                  }
                  required
                />
              </div>

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
          ))}
          <div className="buttons">
            <button type="button" onClick={handleAddStep}>
              Add Step
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
