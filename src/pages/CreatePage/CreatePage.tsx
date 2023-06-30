import MyForm from "../../components/MyForm";
import Input from "../../components/Input";
import Button from "../../components/Button";

// import s from "./CreatePage.module.scss";

function CreatePage() {
  return (
    <>
      <MyForm>
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
      </MyForm>
    </>
  );
}

export default CreatePage;
