import clsx from "clsx";

import s from "./Button.module.scss";

interface IButton {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  id?: string;
  text: string;
  isBack?: boolean;
}

function Button({ type, id, text, isBack }: IButton) {
  return (
    <>
      <button
        type={type}
        id={id}
        className={clsx(s.root, {
          [s.back]: isBack,
        })}
      >
        {isBack ? "Назад" : text}
      </button>
    </>
  );
}

export default Button;
