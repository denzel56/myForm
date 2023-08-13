import { Field } from "formik";
import { FunctionComponent } from "react";
import s from "./CheckboxGroup.module.scss";

interface ICheckbox {
  label: string;
}

const anyCheckbox: number[] = [1, 2, 3];

const CheckboxGroup: FunctionComponent<ICheckbox> = ({ label }) => {
  return (
    <>
      <div className={s.label}>
        {label && label.charAt(0).toUpperCase() + label.slice(1)}
      </div>

      {anyCheckbox.map((item: any, index: number) => (
        <div key={index} className={s.fieldWrap}>
          <label>
            <Field type="checkbox" name="checked" value={`${item}`} />
            {item}
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckboxGroup;
