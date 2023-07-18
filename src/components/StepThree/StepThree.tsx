import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/stepSlice";
import Button from "../Button";

import s from "./StepThree.module.scss";

const StepThree: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClickBack = (): void => {
    dispatch(setCurrentStep("two"));
  };

  const handleClickNext = (): void => {
    // dispatch(setCurrentStep("two"));
  };
  return (
    <>
      <h2>Step Three</h2>
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

export default StepThree;
