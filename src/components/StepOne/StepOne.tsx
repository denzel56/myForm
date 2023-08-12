import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/stepSlice";

import CustomSelect from "../CustomSelect";
import Input from "../Input";
import Button from "../Button";

import s from "./StepOne.module.scss";
import { FormikValues, useFormikContext } from "formik";

const StepOne: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values } = useFormikContext<FormikValues>();

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
        isLabel
        placeholder="nickname"
        value={values.nickname}
      />
      <Input
        id="field-name"
        type="text"
        name="name"
        isLabel
        placeholder="name"
        value={values.name}
      />
      <Input
        id="field-surname"
        type="text"
        name="surname"
        isLabel
        placeholder="surname"
        value={values.surname}
      />
      <CustomSelect />
      <div className={s.buttonBlock}>
        <Button
          type="button"
          id="button-back"
          text="Назад"
          isBack
          onClick={handleClickBack}
        />
        <Button
          type="button"
          id="button-next"
          text="Далее"
          onClick={handleClickNext}
        />
      </div>
    </>
  );
};

export default StepOne;
