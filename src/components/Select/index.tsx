import { ViewSelect } from "./ViewSelect";
import { useSelect } from "./useSelect";
import { ISelect } from "./types";

export const Select =({
  optionsArray,
  setValue,
}: ISelect) => {
  return (
    <ViewSelect
      {...useSelect()}
      setValue={setValue}
      optionsArray={optionsArray}
    />
  );
};
