import { FunctionComponent } from "react";
import { Field } from "formik";
import s from "./Input.module.scss";

interface IInput {
  id: string;
  type: string;
  name: string;
  placeholder: string;
}

const Input: FunctionComponent<IInput> = ({ id, type, name, placeholder }) => {
  return (
    <div className={s.root}>
      <label htmlFor={id} className={s.label}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={s.field}
      />
    </div>
  );
};

export default Input;
