import {
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import OptionComponent from "./OptionComponent";
import ArrowDown from "./assets/ChevronDown.svg";

import s from "./SelectComponent.module.scss";
import { useFormikContext } from "formik";

type SelectProps = {
  label: string;
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
};

type Option = {
  title: string;
  value: string;
};

const SelectComponent: FunctionComponent<SelectProps> = ({
  label,
  options,
  selected,
  placeholder,
  onClose,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && !ref.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  const handleClickOption = (value: Option["value"]): void => {
    setIsOpen(false);
    onChange?.(value);
    setFieldValue("sex", value);
  };

  const handleClickSelect: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={s.root}>
        <div className={s.label}>{label}</div>
        <div
          ref={ref}
          className={s.field}
          data-is-active={isOpen}
          onClick={handleClickSelect}
        >
          {selected?.title ? (
            <div data-selected={!!selected?.value} tabIndex={0}>
              {selected?.title}
            </div>
          ) : (
            <div
              className={s.placeholder}
              data-selected={!!selected?.value}
              tabIndex={0}
            >
              {placeholder}
            </div>
          )}
          <img
            src={ArrowDown}
            alt="arrow"
            className={clsx({
              [s.arrow]: isOpen,
            })}
          />
        </div>
        {isOpen && (
          <ul className={s.list}>
            {options.map<ReactNode>((item: Option) => (
              <OptionComponent
                key={item.value}
                option={item}
                onClick={handleClickOption}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
