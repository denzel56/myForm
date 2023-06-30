import MyForm from "../../components/MyForm";
import Input from "../../components/Input";
import Button from "../../components/Button";
import s from "./MainPage.module.scss";

function MainPage() {
  return (
    <>
      <div className={s.root}>
        <MyForm>
          <Input
            id="phone"
            type="text"
            name="phone"
            placeholder="+7(999) 999-99-99"
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="example@jim.com"
          />
          <Button type="submit" id="button-start" text="Начать" />
        </MyForm>
      </div>
    </>
  );
}

export default MainPage;
