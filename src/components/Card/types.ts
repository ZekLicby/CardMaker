import { JSX, RefObject } from "react";

export interface IViewCard {
  currentCardBackground: string;
  currentCardAttributeIcon: JSX.Element;
  cardName: string;
  cardRef: RefObject<HTMLDivElement | null>;
  cardImage: string | null;
  handleReturnCardLevel: () => Array<JSX.Element> | undefined;
  isTextWhite: boolean;
  monsterType: string;
  cardDescription: string;
  containerRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLParagraphElement | null>;
  iconRef: RefObject<HTMLElement | null>;
}

export interface ICardContainer {
  backGround: string;
}

export type TCardNameText = {
  isTextWhite: boolean;
};
