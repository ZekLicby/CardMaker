import { JSX, RefObject } from "react";

export interface IViewCard {
  currentCardBackground: string;
  currentCardAttributeIcon: JSX.Element;
  cardName: string;
  cardRef: RefObject<HTMLDivElement | null>;
  cardImage: string | null;
  handleReturnCardLevel: () => Array<JSX.Element> | undefined;
  isTextWhite: boolean;
}

export interface ICardContainer {
  backGround: string;
}

export type TCardNameText = {
  isTextWhite: boolean;
};
