import { FC } from "react";
import { useCard } from "./useCard";
import { ViewCard } from "./ViewCard";
import { ICard } from "./types";

export const Card: FC<ICard> = ({ cardType, cardName }) => {
  return <ViewCard cardName={cardName} {...useCard({ cardType })} />;
};
