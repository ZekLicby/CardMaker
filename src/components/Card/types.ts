import { RefObject } from "react";

export interface ICard {
  image: string | null;
}

export interface IViewCard extends ICard {
  currentCardBackground: string;
  cardName: string;
  cardRef: RefObject<HTMLDivElement | null>;
}

export interface ICardContainer {
  backGround: string;
}
