import { FC } from "react";
import { ViewInput } from "./ViewInput";
import { useInput } from "./useInput";
import { IInput } from "./types";

export const Input: FC<IInput> = ({ setValue, type }) => {
  return <ViewInput type={type} setValue={setValue} {...useInput()} />;
};
