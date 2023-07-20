import {
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import OptionComponent from "./OptionComponent";

import s from "./SelectComponent.module.scss";

type SelectProps = {
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
  options,
  selected,
  placeholder,
  onClose,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

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
  };

  const handleClickPlaceholder: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div ref={ref} className={s.root} data-is-active={isOpen}>
        <div
          data-selected={!!selected?.value}
          onClick={handleClickPlaceholder}
          tabIndex={0}
        >
          {selected?.title || placeholder}
        </div>
        {isOpen && (
          <ul>
            {options.map((item) => {
              <OptionComponent
                key={item.value}
                option={item}
                onClick={handleClickOption}
              />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
