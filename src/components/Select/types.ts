import { ICardTypeOptions, TCardTypeValue } from "@/types/card";
import { Dispatch, SetStateAction } from "react";

export interface ISelect {
  setCardType: Dispatch<SetStateAction<TCardTypeValue>>;
  optionsArray: Array<ICardTypeOptions>;
}

export interface IViewSelect {
  setCardType: Dispatch<SetStateAction<TCardTypeValue>>;
  optionsArray: Array<ICardTypeOptions>;
}
