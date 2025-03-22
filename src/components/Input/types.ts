import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  setValue: (e: any) => void;
  type?: HTMLInputTypeAttribute;
}

export type TViewInput = IInput;
