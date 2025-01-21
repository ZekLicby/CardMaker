import { FC } from "react";
import { ViewInput } from "./ViewInput";
import { useInput } from "./useInput";
import { IInput } from "./types";

export const Input: FC<IInput> = ({ setCardName }) => {
  return <ViewInput setCardName={setCardName} {...useInput()} />;
};
