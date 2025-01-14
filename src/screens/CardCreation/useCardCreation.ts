import { TCardType } from "@/types/card";
import { useState } from "react";

export const useCardCreation = () => {
  const [cardType, setCardType] = useState<TCardType>("normal");

  return { cardType, setCardType };
};
