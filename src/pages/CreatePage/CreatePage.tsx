import MyForm from "../../components/MyForm";
import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import StepThree from "../../components/StepThree";
import Steps from "../../components/Steps";

// import s from "./CreatePage.module.scss";

function CreatePage() {
  const currentStep: string = "";

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
    <>
      <Steps />
      <MyForm>{showCurrentStep()}</MyForm>
    </>
  );
}

export default CreatePage;
