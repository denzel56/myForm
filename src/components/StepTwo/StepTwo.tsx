import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/stepSlice";

import Button from "../Button";
import s from "./StepTwo.module.scss";

const StepTwo: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClickBack = (): void => {
    dispatch(setCurrentStep("one"));
  };

  const handleClickNext = (): void => {
    dispatch(setCurrentStep("three"));
  };
  return (
    <>
      <div className={s.buttonBlock}>
        <Button
          type="button"
          id="button-back"
          text="Назад"
          isBack
          onClick={handleClickBack}
        />
        <Button
          type="submit"
          id="button-next"
          text="Далее"
          onClick={handleClickNext}
        />
      </div>
    </>
  );
};

export default StepTwo;
