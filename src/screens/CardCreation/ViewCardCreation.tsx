import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";
import { TCardTypeLabel, TCardTypeValue } from "@/types/card";

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
      <Select<TCardTypeValue, TCardTypeLabel>
        setValue={setCardType}
        optionsArray={cardTypeOptions}
      />
    </>
  );
};
