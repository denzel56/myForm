import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import s from "./StepOne.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/stepSlice";

const StepOne: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickBack = (): void => {
    navigate("/");
    dispatch(setCurrentStep("one"));
  };

  const handleClickNext = (): void => {
    dispatch(setCurrentStep("two"));
  };

  return (
    <>
      <Input
        id="field-nickname"
        type="text"
        name="nickname"
        placeholder="nickname"
      />
      <Input id="field-name" type="text" name="name" placeholder="name" />
      <Input
        id="field-surname"
        type="text"
        name="surname"
        placeholder="surname"
      />
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

export default StepOne;
