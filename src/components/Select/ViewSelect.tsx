import { TCardTypeLabel, TCardTypeValue } from "@/types/card";
import { CustomOption, CustomSelect, SelectContainer } from "./styles";
import { IViewSelect } from "./types";

export const ViewSelect = <V extends TCardTypeValue, L extends TCardTypeLabel>({
  optionsArray,
  setValue,
}: IViewSelect<V, L>) => {
  return (
    <SelectContainer>
      <CustomSelect
        onChange={({ currentTarget: { value } }) => {
          setValue(value as V);
        }}
      >
        {optionsArray.map((option) => {
          return (
            <CustomOption
              key={option.value}
              selected={option.selected}
              value={option.value}
            >
              {option.label}
            </CustomOption>
          );
        })}
      </CustomSelect>
    </SelectContainer>
  );
};
