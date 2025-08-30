import { CardContext } from "@/context/card";
import {
  ICardAttributeOptions,
  ICardTypeOptions,
  TCardLevelOptions,
} from "@/types/card";
import { FormEvent, useContext } from "react";

export const useCardCreation = () => {
  const cardContext = useContext(CardContext);

  const {
    handleChangeCardName,
    handleChangeCardType,
    handleChangeCardAttribute,
    handleDownload,
    handleImageChange,
    cardAttribute,
    handleChangeCardLevel,
    handleChangeCardMonsterType,
    handleChangeCardDescription,
    cardLevel,
  } = cardContext;

  const handleSendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const cardTypeOptions: Array<ICardTypeOptions> = [
    { value: "link", label: "Link" },
    { value: "xyz", label: "XYZ" },
    { value: "synchro", label: "Synchro" },
    { value: "normal", label: "Normal", selected: true },
    { value: "darkSynchro", label: "Dark Synchro" },
    { value: "effect", label: "Effect" },
    { value: "fusion", label: "Fusion" },
    { value: "legendaryDragon", label: "Legendary Dragon" },
    { value: "obelisk", label: "Obelisk" },
    { value: "ra", label: "Ra" },
    { value: "ritual", label: "Ritual" },
    { value: "slifer", label: "Slifer" },
    { value: "spell", label: "Spell" },
    { value: "trap", label: "Trap" },
    { value: "token", label: "Token" },
  ];

  const cardAttributeOptions: Array<ICardAttributeOptions> = [
    { value: "dark", label: "Dark", selected: true },
    { value: "divine", label: "Divine" },
    { value: "earth", label: "Earth" },
    { value: "fire", label: "Fire" },
    { value: "light", label: "Light" },
    { value: "water", label: "Water" },
    { value: "wind", label: "Wind" },
  ];

  const cardLevelOptions: Array<TCardLevelOptions> = [
    { value: 1, label: "1", selected: true },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];

  const cardAttributeSelectRenderCondition =
    cardAttribute === "spell" || cardAttribute === "trap";

  const cardLevelStarSelectRenderCondition = cardAttributeSelectRenderCondition;

  return {
    cardTypeOptions,
    cardAttributeOptions,
    handleChangeCardName,
    handleChangeCardType,
    handleDownload,
    handleImageChange,
    handleChangeCardAttribute,
    cardAttributeSelectRenderCondition,
    cardLevelStarSelectRenderCondition,
    cardLevelOptions,
    handleChangeCardLevel,
    handleChangeCardMonsterType,
    handleChangeCardDescription,
    cardLevel,
    handleSendForm,
  };
};
