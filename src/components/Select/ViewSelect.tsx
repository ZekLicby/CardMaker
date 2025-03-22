import { CustomOption, CustomSelect, SelectContainer } from "./styles";
import { IViewSelect } from "./types";

export const ViewSelect = ({ optionsArray, setValue }: IViewSelect) => {
  return (
    <SelectContainer>
      <CustomSelect
        onChange={({ currentTarget: { value } }) => {
          setValue(value);
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
