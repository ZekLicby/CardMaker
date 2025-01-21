import { TCardType } from "@/types/card";
import { Dispatch, SetStateAction } from "react";

export interface IViewCardCreation {
  cardType: TCardType;
  setCardType: Dispatch<SetStateAction<TCardType>>;
  cardName: string;
  setCardName: Dispatch<SetStateAction<string>>;
}
