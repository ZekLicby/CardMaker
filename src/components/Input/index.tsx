import { FC } from "react";
import { ViewInput } from "./ViewInput";
import { useInput } from "./useInput";
import { IInput } from "./types";

export const Input: FC<IInput> = ({ setValue, type, label, placeholder }) => {
  return (
    <ViewInput
      type={type}
      setValue={setValue}
      label={label}
      placeholder={placeholder}
      {...useInput()}
    />
  );
};
