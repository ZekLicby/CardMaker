import { ViewSelect } from "./ViewSelect";
import { useSelect } from "./useSelect";
import { ISelect } from "./types";
import { TCardTypeLabel, TCardTypeValue } from "@/types/card";

export const Select = <V extends TCardTypeValue, L extends TCardTypeLabel>({
  optionsArray,
  setValue,
}: ISelect<V, L>) => {
  return (
    <ViewSelect<V, L>
      {...useSelect()}
      setValue={setValue}
      optionsArray={optionsArray}
    />
  );
};
