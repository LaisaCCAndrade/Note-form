import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepForm from "../components/Form/StepForm";
import Summary from "../components/Summary/Summary";
import "./App.css";

const MultiStepForm = () => {
  const [steps, setSteps] = useState([
    { startDate: "", endDate: "", valueType: "", amount: "" },
  ]);
  const [summaryVisible, setSummaryVisible] = useState(false);

  // Função para lidar com a alteração de entrada nos campos do formulário
  const handleInputChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  // Função para adicionar um novo passo ao formulário
  const handleAddStep = () => {
    setSteps([
      ...steps,
      { startDate: "", endDate: "", valueType: "", amount: "" },
    ]);
  };

  // Função para remover um passo do formulário
  const handleRemoveStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos passos do formulário
    const isValid = steps.every((step) => {
      if (
        step.startDate === "" ||
        step.endDate === "" ||
        step.valueType === "" ||
        step.amount === ""
      ) {
        toast.error("Please fill in all fields.");
        return false;
      } else if (
        step.valueType === "Percentage" &&
        (step.amount < 0 || step.amount > 100)
      ) {
        toast.error("Invalid percentage value.");
        return false;
      } else if (step.endDate < step.startDate) {
        toast.error("End date must be after start date.");
        return false;
      }
      return true;
    });

    if (isValid) {
      // Salvando o formulário
      setSummaryVisible(true);
      toast.success("Form saved successfully!");
    }
  };

  // Função para editar as escolhas do formulário
  const handleEditChoices = () => {
    setSummaryVisible(false);
  };

  return (
    <div className="container">
      <h1>Note Form</h1>
      {summaryVisible ? (
        <Summary steps={steps} handleEditChoices={handleEditChoices} />
      ) : (
        <form onSubmit={handleSubmit} className="form">
          {steps.map((step, index) => (
            <StepForm
              key={index}
              step={step}
              index={index}
              handleInputChange={handleInputChange}
              handleRemoveStep={handleRemoveStep}
            />
          ))}
          <div className="buttons">
            <button type="button" onClick={handleAddStep}>
              Add Step
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default MultiStepForm;
