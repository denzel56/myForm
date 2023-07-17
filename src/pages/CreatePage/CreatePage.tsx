import { FunctionComponent, useState } from "react";
import MyForm from "../../components/MyForm";
import StepOne from "../../components/StepOne";
import StepThree from "../../components/StepThree";
import StepTwo from "../../components/StepTwo";
import Steps from "../../components/Steps";

import s from "./CreatePage.module.scss";

const CreatePage: FunctionComponent = () => {
  const [currentStep] = useState("one");

  const showCurrentStep = () => {
    switch (currentStep) {
      case "two":
        return <StepTwo />;

      case "three":
        return <StepThree />;

      default:
        return <StepOne />;
    }
  };

  return (
    <div className={s.root}>
      <Steps currentStep={currentStep} />
      <MyForm>{showCurrentStep()}</MyForm>
    </div>
  );
};

export default CreatePage;
