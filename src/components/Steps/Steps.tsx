import { FunctionComponent } from "react";
import DoneIcon from "./assets/Vector.svg";
import clsx from "clsx";

import s from "./Steps.module.scss";

type TStep = {
  currentStep?: string;
};

const Steps: FunctionComponent<TStep> = ({ currentStep }) => {
  return (
    <>
      <div
        className={clsx(s.root, {
          [s.stepTwo]: currentStep === "two",
          [s.stepThree]: currentStep === "three",
        })}
      />
      <div className={s.steps}>
        <div className={clsx(s.stepItem, s.activeStep)}>
          {currentStep !== "one" ? (
            <img src={DoneIcon} alt="done" />
          ) : (
            <div className={s.point} />
          )}
        </div>
        <div
          className={clsx(s.stepItem, {
            [s.activeStep]: currentStep !== "one  ",
          })}
        >
          {currentStep === "two" && <div className={s.point} />}
          {currentStep === "three" && <img src={DoneIcon} alt="done" />}
        </div>
        <div
          className={clsx(s.stepItem, {
            [s.activeStep]: currentStep === "three",
          })}
        >
          {currentStep === "three" && <div className={s.point} />}
        </div>
      </div>
      <div className={s.stepsNum}>
        <div className={s.num}>1</div>
        <div className={s.num}>2</div>
        <div className={s.num}>3</div>
      </div>
    </>
  );
};

export default Steps;
