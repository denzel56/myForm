import { FunctionComponent, MouseEventHandler } from "react";
import s from "./OptionComponent.module.scss";

type OptionProps = {
  option: Option;
  onClick: (value: Option["value"]) => void;
};

type Option = {
  title: string;
  value: string;
};

const OptionComponent: FunctionComponent<OptionProps> = ({
  option: { value, title },
  onClick,
}) => {
  const handleClick =
    (clickedValue: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <>
      <li
        className={s.root}
        value={value}
        onClick={handleClick(value)}
        tabIndex={0}
      >
        {title}
      </li>
    </>
  );
};

export default OptionComponent;
