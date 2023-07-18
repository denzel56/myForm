import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import MyForm from "../../components/MyForm";
import StepOne from "../../components/StepOne";
import StepThree from "../../components/StepThree";
import StepTwo from "../../components/StepTwo";
import Steps from "../../components/Steps";

import s from "./CreatePage.module.scss";
import { currentStepSelector } from "../../store/stepSlice";

const CreatePage: FunctionComponent = () => {
  const currentStep = useSelector(currentStepSelector);

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
