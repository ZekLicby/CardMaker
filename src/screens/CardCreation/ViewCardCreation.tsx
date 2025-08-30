import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { IViewCardCreation } from "./types";
import { FC } from "react";
import { Input } from "@/components/Input";
import { CardCreationContainer, CardForm, DownloadButton } from "./styles";

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
  cardLevel,
  handleSendForm,
}) => {
  return (
    <CardCreationContainer>
      <CardForm onSubmit={handleSendForm}>
        <Input
          setValue={handleChangeCardName}
          type="text"
          label="Nome: "
          placeholder="Ex: Dragão Branco de olhos azuis"
        />
        <Input
          setValue={handleImageChange}
          type="file"
          label="Imagem: "
          placeholder=""
        />
        <Select
          setValue={handleChangeCardType}
          optionsArray={cardTypeOptions}
          label="Tipo da carta: "
        />

        {cardAttributeSelectRenderCondition ? (
          <></>
        ) : (
          <Select
            setValue={handleChangeCardAttribute}
            optionsArray={cardAttributeOptions}
            label="Atributo: "
          />
        )}

        {cardLevelStarSelectRenderCondition ? (
          <></>
        ) : (
          <Select
            setValue={handleChangeCardLevel}
            optionsArray={cardLevelOptions}
            currentValue={cardLevel}
            label="Níveis: "
          />
        )}

        <Input
          setValue={handleChangeCardMonsterType}
          type="text"
          label="Tipo(s): "
          placeholder="Ex.: Dragão/XYZ"
        />
        <Input
          setValue={handleChangeCardDescription}
          type="text"
          label="Descrição: "
          placeholder="Ex.: Ao ser invocada destrói todos os monstros em campo"
        />

        <DownloadButton onClick={handleDownload}>
          Download da carta
        </DownloadButton>
      </CardForm>

      <Card />
    </CardCreationContainer>
  );
};
