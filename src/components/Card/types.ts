import { TCardType } from "@/types/card";

export interface IViewCard {
  currentCardBackground: string;
  cardName: string;
}

export interface ICardContainer {
  backGround: string;
}

export interface ICard {
  cardType: TCardType;
  cardName: string;
}

export interface IUseCard {
  cardType: TCardType;
}
