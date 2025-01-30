import { FC } from "react";
import { CustomOption, CustomSelect, SelectContainer } from "./styles";
import { IViewSelect } from "./types";
import { TCardTypeValue } from "@/types/card";

export const ViewSelect: FC<IViewSelect> = ({ setCardType, optionsArray }) => {
  return (
    <SelectContainer>
      <CustomSelect
        onChange={({ currentTarget: { value } }) => {
          setCardType(value as TCardTypeValue);
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
