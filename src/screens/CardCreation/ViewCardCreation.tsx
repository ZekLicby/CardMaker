import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";

export const ViewCardCreation: FC<IViewCardCreation> = ({
  handleChangeCardName,
  handleChangeCardType,
  handleChangeCardAttribute,
  cardTypeOptions,
  cardAttributeOptions,
  handleDownload,
  handleImageChange,
  cardAttributeSelectCondition,
}) => {
  return (
    <>
      <Card />
      <Input setValue={handleChangeCardName} type="text" />
      <Input setValue={handleImageChange} type="file" />
      <Select setValue={handleChangeCardType} optionsArray={cardTypeOptions} />

      {cardAttributeSelectCondition ? (
        <></>
      ) : (
        <Select
          setValue={handleChangeCardAttribute}
          optionsArray={cardAttributeOptions}
        />
      )}

      <button onClick={handleDownload}>Download da carta</button>
    </>
  );
};
