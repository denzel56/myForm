import { FunctionComponent } from "react";
import { Field } from "formik";
import s from "./RadioGroup.module.scss";

interface IRadio {
  label: string;
}

const anyRadio: number[] = [1, 2, 3];

const RadioGroup: FunctionComponent<IRadio> = ({ label }) => {
  return (
    <>
      <div className={s.label}>
        {label && label.charAt(0).toUpperCase() + label.slice(1)}
      </div>

      {anyRadio.map((item: any, index: number) => (
        <div key={index} className={s.fieldWrap}>
          <label>
            <Field type="radio" name="picked" value={`${item}`} />
            {item}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;
