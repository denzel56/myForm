import { FunctionComponent } from "react";
import { Field, FieldArray, FormikValues, useFormikContext } from "formik";

import RemoveIcon from "./assets/Remove.svg";

import s from "./ArrayInput.module.scss";

interface IArrayInput {
  label: string;
  name: string;
  id: string;
  placeholder: string;
}

const ArrayInput: FunctionComponent<IArrayInput> = ({ label, name }) => {
  const { values } = useFormikContext<FormikValues>();

  return (
    <>
      <div className={s.label}>
        {label && label.charAt(0).toUpperCase() + label.slice(1)}
      </div>
      <div>
        <FieldArray
          name={name}
          render={(arrayHelpers) => (
            <>
              {values[name].map((_item: any, index: number) => (
                <div key={index} className={s.fieldWrap}>
                  <Field name={`advantages.${index}`} className={s.field} />
                  <img
                    src={RemoveIcon}
                    alt="remove icon"
                    className={s.removeIcon}
                    onClick={() => arrayHelpers.remove(index)}
                  />
                </div>
              ))}
              <div>
                <button
                  type="button"
                  className={s.addButton}
                  onClick={() => arrayHelpers.push("")}
                >
                  +
                </button>
              </div>
            </>
          )}
        />
      </div>
    </>
  );
};

export default ArrayInput;
