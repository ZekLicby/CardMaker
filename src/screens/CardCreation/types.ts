import { ICardTypeOptions, TCardTypeValue } from "@/types/card";
import { Dispatch, SetStateAction } from "react";

export interface IViewCardCreation {
  cardType: TCardTypeValue;
  setCardType: Dispatch<SetStateAction<TCardTypeValue>>;
  cardName: string;
  setCardName: Dispatch<SetStateAction<string>>;
  cardTypeOptions: ICardTypeOptions[];
}
