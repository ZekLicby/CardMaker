import { useCardCreation } from "./useCardCreation";
import { ViewCardCreation } from "./ViewCardCreation";

export const CardCreationScreen = () => {
  return <ViewCardCreation {...useCardCreation()} />;
};
