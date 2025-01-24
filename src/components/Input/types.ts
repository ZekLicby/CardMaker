import { Dispatch, SetStateAction } from "react";

export interface IInput {
  setCardName: Dispatch<SetStateAction<string>>;
}

export type TViewInput = IInput;
