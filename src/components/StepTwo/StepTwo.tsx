import { FunctionComponent } from "react";
import Input from "../Input";
import Button from "../Button";
import s from "./StepTwo.module.scss";

const StepTwo: FunctionComponent = () => {
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
        <Button type="button" id="button-back" text="Назад" isBack />
        <Button type="submit" id="button-next" text="Далее" />
      </div>
    </>
  );
};

export default StepTwo;
