import { TCardType } from "@/types/card";

export interface IViewCard {
  currentCardBackground: string;
}

export interface ICardContainer {
  backGround: string;
}

export interface ICard {
  cardType: TCardType;
}

export interface IUseCard {
  cardType: TCardType;
}
