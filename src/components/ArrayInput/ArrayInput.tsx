import { FunctionComponent, ReactNode, useState } from "react";

import Button from "../Button";
import Input from "../Input";
import RemoveIcon from "./assets/Remove.svg";

import s from "./ArrayInput.module.scss";

interface IArrayInput {
  label: string;
  name: string;
  id: string;
  placeholder: string;
}

const ArrayInput: FunctionComponent<IArrayInput> = ({
  label,
  // name,
  id,
  placeholder,
}) => {
  const [fieldArray, setFieldArray] = useState([""]);

  const handleClickAdd = (): void => {
    setFieldArray((prevState): string[] => {
      const newArray = [...prevState, ""];

      return newArray;
    });
    // console.log(fieldArray);
  };
  return (
    <>
      <div className={s.label}>
        {label && label.charAt(0).toUpperCase() + label.slice(1)}
      </div>
      <div>
        {fieldArray.map<ReactNode>((item: any, index: number) => {
          const uid = self.crypto.randomUUID().slice(0, 8);
          return (
            <div key={uid} className={s.fieldWrap}>
              <Input
                type="text"
                id={`${id}-${index + 1}`}
                placeholder={placeholder}
              />
              <img src={RemoveIcon} alt="trash icon" className={s.removeIcon} />
            </div>
          );
        })}
        <div className={s.addButton}>
          <Button
            type="button"
            id="button-add"
            text="+"
            isBack
            onClick={handleClickAdd}
          />
        </div>
      </div>
      {console.log(fieldArray)}
    </>
  );
};

export default ArrayInput;
