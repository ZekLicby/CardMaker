import { FC } from "react";
import { CustomInput, InputContainer } from "./styles";
import { TViewInput } from "./types";

export const ViewInput: FC<TViewInput> = ({ setCardName }) => {
  return (
    <InputContainer>
      <CustomInput
        type="text"
        onChange={({ currentTarget: { value } }) => {
          setCardName(value);
        }}
      />
    </InputContainer>
  );
};
