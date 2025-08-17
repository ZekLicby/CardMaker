import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  setValue: (e: any) => void;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder: string;
}

export type TViewInput = IInput;
