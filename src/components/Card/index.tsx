import { FC } from "react";
import { useCard } from "./useCard";
import { ViewCard } from "./ViewCard";

export const Card: FC = () => {
  return <ViewCard {...useCard()} />;
};
