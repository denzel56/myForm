import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import MyForm from "../../components/MyForm";
import Input from "../../components/Input";
import Button from "../../components/Button";
import s from "./MainPage.module.scss";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleClickStart = (): void => {
    navigate("/create");
  };

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
          <Button
            type="submit"
            id="button-start"
            text="Начать"
            onClick={handleClickStart}
          />
        </MyForm>
      </div>
    </>
  );
};

export default MainPage;
