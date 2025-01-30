import { ICardTypeOptions, TCardTypeValue } from "@/types/card";
import { useState } from "react";

export const useCardCreation = () => {
  const [cardType, setCardType] = useState<TCardTypeValue>("normal");
  const [cardName, setCardName] = useState<string>("");

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

  return { cardType, setCardType, cardName, setCardName, cardTypeOptions };
};
