import { CardContext } from "@/context/card";
import { ICardTypeOptions } from "@/types/card";
import { ChangeEvent, useContext, useState } from "react";

export const useCardCreation = () => {
  const cardContext = useContext(CardContext);

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const { handleChangeCardName, handleChangeCardType, handleDownload } =
    cardContext;

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

  return {
    cardTypeOptions,
    handleChangeCardName,
    handleChangeCardType,
    handleDownload,
    handleImageChange,
    image,
  };
};
