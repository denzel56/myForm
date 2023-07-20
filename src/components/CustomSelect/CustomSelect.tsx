import { FunctionComponent, useState } from "react";
import SelectComponent from "./SelectComponent";

import options from "./SelectComponent/option.json";

const CustomSelect: FunctionComponent = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleSelectValue = (value: string) => {
    setSelectValue(value);
  };

  const selectedValue = options.find((item) => item.value === selectValue);

  return (
    <SelectComponent
      options={options}
      selected={selectedValue || null}
      onChange={handleSelectValue}
      placeholder="Укажите ваш пол"
    />
  );
};

export default CustomSelect;
