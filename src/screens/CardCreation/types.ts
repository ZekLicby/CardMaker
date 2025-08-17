import {
  ICardAttributeOptions,
  ICardTypeOptions,
  TCardAttributeValue,
  TCardLevelOptions,
  TCardLevelValue,
  TCardTypeValue,
} from "@/types/card";
import { ChangeEvent } from "react";

export interface IViewCardCreation {
  cardTypeOptions: ICardTypeOptions[];
  handleChangeCardType: (value: TCardTypeValue) => void;
  handleChangeCardName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDownload: () => void;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  cardAttributeOptions: Array<ICardAttributeOptions>;
  handleChangeCardAttribute: (value: TCardAttributeValue) => void;
  cardAttributeSelectRenderCondition: boolean;
  cardLevelStarSelectRenderCondition: boolean;
  cardLevelOptions: Array<TCardLevelOptions>;
  handleChangeCardLevel: (value: TCardLevelValue) => void;
  handleChangeCardMonsterType: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCardDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  cardLevel: number;
}
