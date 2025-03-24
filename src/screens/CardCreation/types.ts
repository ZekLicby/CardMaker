import {
  ICardAttributeOptions,
  ICardTypeOptions,
  TCardAttributeValue,
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
  cardAttributeSelectCondition: boolean;
}
