import Input from "../Input";
import Button from "../Button";
// import s from './StepOne.module.scss';

function StepOne() {
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
      <Button type="button" id="button-back" text="Назад" isBack />
      <Button type="submit" id="button-next" text="Далее" />
    </>
  );
}

export default StepOne;
