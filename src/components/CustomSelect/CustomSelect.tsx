import { FunctionComponent, useState } from "react";
import SelectComponent from "./SelectComponent";

import options from "./SelectComponent/option.json";
import { FormikValues, useFormikContext } from "formik";

const CustomSelect: FunctionComponent = () => {
  const { values } = useFormikContext<FormikValues>();
  const [selectValue, setSelectValue] = useState(values.sex);

  const handleSelectValue = (value: string) => {
    setSelectValue(value);
  };

  const selectedValue = options.find((item) => item.value === selectValue);

  return (
    <SelectComponent
      label="Sex"
      options={options}
      selected={selectedValue || null}
      onChange={handleSelectValue}
      placeholder="Не выбрано"
    />
  );
};

export default CustomSelect;
