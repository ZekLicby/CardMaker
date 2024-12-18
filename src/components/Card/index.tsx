import { useCard } from "./useCard";
import { ViewCard } from "./ViewCard";

export const Card = () => {
  return <ViewCard {...useCard()} />;
};
