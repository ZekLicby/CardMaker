import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";

export const ViewCardCreation: FC<IViewCardCreation> = ({
  handleChangeCardName,
  handleChangeCardType,
  cardTypeOptions,
  handleDownload,
  handleImageChange,
  image,
}) => {
  return (
    <>
      <Card image={image} />
      <Input setValue={handleChangeCardName} type="text" />
      <Input setValue={handleImageChange} type="file" />
      <Select setValue={handleChangeCardType} optionsArray={cardTypeOptions} />
      <button onClick={handleDownload}>Download da carta</button>
    </>
  );
};
