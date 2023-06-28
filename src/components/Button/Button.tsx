import clsx from "clsx";
import React from "react";
import s from "./Button.module.scss";

// const buttonType =
// React.ButtonHTMLAttributes<HTMLButtonElement> & { type: "submit" };

interface IButton {
  // type: ButtonType;
  text: string;
  isBack: boolean;
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
