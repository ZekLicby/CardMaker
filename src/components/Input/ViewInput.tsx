import { FC } from "react";
import { CustomInput, InputContainer } from "./styles";
import { TViewInput } from "./types";

export const ViewInput: FC<TViewInput> = ({ setValue, type, label, placeholder }) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>

      <CustomInput
        id={label}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </InputContainer>
  );
};
