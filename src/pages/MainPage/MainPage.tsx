import MyForm from "../../components/MyForm";
import s from "./MainPage.module.scss";

function MainPage() {
  return (
    <>
      <div className={s.root}>
        <MyForm />
      </div>
    </>
  );
}

export default MainPage;
