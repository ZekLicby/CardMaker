import { CustomOption, CustomSelect, SelectContainer } from "./styles";
import { IViewSelect } from "./types";

export const ViewSelect = ({
  optionsArray,
  setValue,
  currentValue,
  label,
}: IViewSelect) => {
  return (
    <SelectContainer>
      <label htmlFor={label}>{label}</label>

      <CustomSelect
        id={label}
        onChange={({ currentTarget: { value } }) => {
          setValue(value);
        }}
        value={currentValue}
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
