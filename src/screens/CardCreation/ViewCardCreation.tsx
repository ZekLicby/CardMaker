import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";

export const ViewCardCreation: FC<IViewCardCreation> = ({
  setCardType,
  cardType,
}) => {
  return (
    <>
      <Card cardType={cardType} />
      <Select setCardType={setCardType} />
    </>
  );
};
