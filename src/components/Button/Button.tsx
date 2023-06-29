import clsx from "clsx";

import s from "./Button.module.scss";

interface IButton {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  isBack?: boolean;
}

function Button({ type, text, isBack }: IButton) {
  return (
    <>
      <button
        type={type}
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
