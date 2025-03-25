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
  cardAttributeSelectRenderCondition,
  cardLevelStarSelectRenderCondition,
  cardLevelOptions,
  handleChangeCardLevel,
}) => {
  return (
    <>
      <Card />
      <Input setValue={handleChangeCardName} type="text" />
      <Input setValue={handleImageChange} type="file" />
      <Select setValue={handleChangeCardType} optionsArray={cardTypeOptions} />

      {cardAttributeSelectRenderCondition ? (
        <></>
      ) : (
        <Select
          setValue={handleChangeCardAttribute}
          optionsArray={cardAttributeOptions}
        />
      )}

      {cardLevelStarSelectRenderCondition ? (
        <></>
      ) : (
        <Select
          setValue={handleChangeCardLevel}
          optionsArray={cardLevelOptions}
        />
      )}

      <button onClick={handleDownload}>Download da carta</button>
    </>
  );
};
