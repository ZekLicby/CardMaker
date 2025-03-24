import { CardContext } from "@/context/card";
import { ICardAttributeOptions, ICardTypeOptions } from "@/types/card";
import { useContext } from "react";

export const useCardCreation = () => {
  const cardContext = useContext(CardContext);

  const {
    handleChangeCardName,
    handleChangeCardType,
    handleChangeCardAttribute,
    handleDownload,
    handleImageChange,
    cardAttribute,
  } = cardContext;

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
    { value: "dark", label: "Dark" },
    { value: "divine", label: "Divine" },
    { value: "earth", label: "Earth" },
    { value: "fire", label: "Fire" },
    { value: "light", label: "Light" },
    { value: "water", label: "Water" },
    { value: "wind", label: "Wind" },
  ];

  const cardAttributeSelectCondition =
    cardAttribute === "spell" || cardAttribute === "trap";

  return {
    cardTypeOptions,
    cardAttributeOptions,
    handleChangeCardName,
    handleChangeCardType,
    handleDownload,
    handleImageChange,
    handleChangeCardAttribute,
    cardAttributeSelectCondition,
  };
};
