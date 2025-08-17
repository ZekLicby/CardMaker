import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";
import { DownloadButton } from "./styles";

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
  handleChangeCardMonsterType,
  handleChangeCardDescription,
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

      <Input setValue={handleChangeCardMonsterType} type="text" />
      <Input setValue={handleChangeCardDescription} type="text" />

      <DownloadButton onClick={handleDownload}>
        Download da carta
      </DownloadButton>
    </>
  );
};
