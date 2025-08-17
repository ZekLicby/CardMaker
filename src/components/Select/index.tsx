import { ViewSelect } from "./ViewSelect";
import { useSelect } from "./useSelect";
import { ISelect } from "./types";

export const Select = ({ optionsArray, setValue, currentValue, label }: ISelect) => {
  return (
    <ViewSelect
      {...useSelect()}
      setValue={setValue}
      optionsArray={optionsArray}
      currentValue={currentValue}
      label={label}
    />
  );
};
