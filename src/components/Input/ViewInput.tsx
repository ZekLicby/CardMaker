import { FC } from "react";
import { CustomInput, InputContainer } from "./styles";
import { TViewInput } from "./types";

export const ViewInput: FC<TViewInput> = ({ setValue, type }) => {
  return (
    <InputContainer>
      <CustomInput
        type={type}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </InputContainer>
  );
};
