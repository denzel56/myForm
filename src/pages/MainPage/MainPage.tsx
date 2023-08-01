import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import MyForm from "../../components/MyForm";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FolderIcon from "./assets/Vector.svg";
import s from "./MainPage.module.scss";

const myName = "Иван";
const mySurname = "Иванов";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleClickStart = (): void => {
    navigate("/create");
  };

  return (
    <>
      <div className={s.root}>
        <div className={s.header}>
          <div className={s.avatar}>{`${myName
            .split("")
            .splice(0, 1)}${mySurname.split("").splice(0, 1)}`}</div>
          <div className={s.userInfo}>
            <span>{`${myName} ${mySurname}`}</span>
            <div className={s.userLinks}>
              <div className={s.link}>
                <div className={s.icon}>
                  <img src={FolderIcon} alt="folder icon" />
                </div>
                <div className={s.linkItem}>
                  <a href="s#" target="blank">
                    Telegram
                  </a>
                </div>
              </div>
              <div className={s.link}>
                <div className={s.icon}>
                  <img src={FolderIcon} alt="folder icon" />
                </div>
                <div className={s.linkItem}>
                  <a href="https://github.com/denzel56" target="blank">
                    GitHub
                  </a>
                </div>
              </div>
              <div className={s.link}>
                <div className={s.icon}>
                  <img src={FolderIcon} alt="folder icon" />
                </div>
                <div className={s.linkItem}>
                  <a href="s#" target="blank">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.line} />
        <MyForm>
          <Input
            id="phone"
            type="text"
            name="phone"
            isLabel
            placeholder="+7(999) 999-99-99"
            value="+7(999) 999-99-99"
            disabled
          />
          <Input
            id="email"
            type="email"
            name="email"
            isLabel
            placeholder="example@jim.com"
            value="example@jim.com"
            disabled
          />
          <div className={s.buttonBlock}>
            <Button
              type="button"
              id="button-start"
              text="Начать"
              onClick={handleClickStart}
            />
          </div>
        </MyForm>
      </div>
    </>
  );
};

export default MainPage;
