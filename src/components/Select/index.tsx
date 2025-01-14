import { FC } from "react";
import { ViewSelect } from "./ViewSelect";
import { useSelect } from "./useSelect";
import { ISelect } from "./types";

export const Select: FC<ISelect> = ({ setCardType }) => {
  return <ViewSelect {...useSelect()} setCardType={setCardType} />;
};
