import {
  BackgroundContent,
  CardBorder,
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardNameContainer,
  CardNameText,
  FrameImage,
  ImageContainer,
  MonsterImageFrame,
  StarAndImageContainer,
  StarContainer,
} from "./styles";

import { FC } from "react";
import { IViewCard } from "./types";

import CampoImagem from "../../../public/artBox.png";
import Borda from "../../../public/borderFull.png";
// import Hologram from "../../../public/hologram.png";
import BordaLore from "../../../public/loreBorder.png";

export const ViewCard: FC<IViewCard> = ({
  currentCardBackground,
  currentCardAttributeIcon,
  cardName,
  cardImage,
  cardRef,
  handleReturnCardLevel,
  isTextWhite,
}) => {
  return (
    <CardContainer backGround={currentCardBackground} ref={cardRef}>
      <CardNameContainer>
        <CardNameText isTextWhite={isTextWhite}>{cardName}</CardNameText>
        {currentCardAttributeIcon}
      </CardNameContainer>

      <StarAndImageContainer>
        <StarContainer>{handleReturnCardLevel()}</StarContainer>

        <ImageContainer>
          <CardImage
            src={cardImage as unknown as string}
            width={356}
            height={288}
            alt="Imagem desconhecida"
          />
          <MonsterImageFrame src={CampoImagem.src as string} />
        </ImageContainer>
      </StarAndImageContainer>

      {/*       ESSE AQUI DÁ PRA USAR IMAGEM DIRETA       */}

      {/*       <CardImage
        src={hologram.src as string}
        width={356}
        height={288}
        alt="Dragão branco de olhos azuis"
      />
      */}

      <CardDetailsContainer>
        <BackgroundContent>
          <h1>sakljhsajhglh,</h1>
          <p>afkhjgasl</p>
        </BackgroundContent>
        <FrameImage src={BordaLore.src as string} />
      </CardDetailsContainer>

      <CardBorder src={Borda.src as string} />
    </CardContainer>
  );
};
