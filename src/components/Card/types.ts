import { JSX, RefObject } from "react";

export interface IViewCard {
  currentCardBackground: string;
  currentCardAttribute: JSX.Element;
  cardName: string;
  cardRef: RefObject<HTMLDivElement | null>;
  image: string | null;
}

export interface ICardContainer {
  backGround: string;
}
