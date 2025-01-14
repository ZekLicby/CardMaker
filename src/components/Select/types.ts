import { TCardType } from "@/types/card";
import { Dispatch, SetStateAction } from "react";

export interface ISelect {
  setCardType: Dispatch<SetStateAction<TCardType>>;
}

export interface IViewSelect {
  setCardType: Dispatch<SetStateAction<TCardType>>;
}
