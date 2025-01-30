import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";

export const ViewCardCreation: FC<IViewCardCreation> = ({
  setCardType,
  cardType,
  setCardName,
  cardName,
  cardTypeOptions,
}) => {
  return (
    <>
      <Card cardType={cardType} cardName={cardName} />
      <Input setCardName={setCardName} />
      <Select setCardType={setCardType} optionsArray={cardTypeOptions} />
    </>
  );
};
