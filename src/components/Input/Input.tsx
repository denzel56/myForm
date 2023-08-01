import { FunctionComponent } from "react";
import { Field } from "formik";
import s from "./Input.module.scss";

interface IInput {
  id: string;
  type: string;
  name?: string;
  isLabel?: boolean;
  placeholder: string;
  value?: string;
  disabled?: boolean;
}

const Input: FunctionComponent<IInput> = ({
  id,
  type,
  name,
  isLabel,
  placeholder,
  value,
  disabled,
}) => {
  return (
    <div className={s.root}>
      {isLabel && (
        <label htmlFor={id} className={s.label}>
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : null}
        </label>
      )}
      <Field
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={s.field}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
