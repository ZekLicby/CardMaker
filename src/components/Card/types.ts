import { TCardTypeValue } from "@/types/card";

export interface IViewCard {
  currentCardBackground: string;
  cardName: string;
}

export interface ICardContainer {
  backGround: string;
}

export interface ICard {
  cardType: TCardTypeValue;
  cardName: string;
}

export interface IUseCard {
  cardType: TCardTypeValue;
}
