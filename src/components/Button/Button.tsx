import clsx from "clsx";
import { FunctionComponent } from "react";

import s from "./Button.module.scss";

interface IButton {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  id?: string;
  text: string;
  isBack?: boolean;
  onClick?: VoidFunction;
}

const Button: FunctionComponent<IButton> = ({
  type,
  id,
  text,
  isBack,
  onClick,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <>
      <button
        type={type}
        id={id}
        className={clsx(s.root, {
          [s.back]: isBack,
        })}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
