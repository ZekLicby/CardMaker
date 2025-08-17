import {
  BackgroundContent,
  CardBorder,
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardNameAndAttributeIconContainer,
  CardNameContainer,
  CardNameText,
  FrameImage,
  IconContainer,
  ImageContainer,
  MonsterDescription,
  MonsterImageFrame,
  MonsterTypeText,
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
  monsterType,
  cardDescription,
  containerRef,
  textRef,
  iconRef,
}) => {
  return (
    <CardContainer backGround={currentCardBackground} ref={cardRef}>
      <CardNameAndAttributeIconContainer>
        <CardNameContainer ref={containerRef}>
          <CardNameText ref={textRef} isTextWhite={isTextWhite}>
            {cardName}
          </CardNameText>
        </CardNameContainer>
        <IconContainer ref={iconRef}>{currentCardAttributeIcon}</IconContainer>
      </CardNameAndAttributeIconContainer>

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

      {/* <CardImage
        src={Hologram.src as string}
        width={356}
        height={288}
        alt="Dragão branco de olhos azuis"
      /> */}

      <CardDetailsContainer>
        <BackgroundContent>
          <MonsterTypeText>[{monsterType}]</MonsterTypeText>
          <MonsterDescription>{cardDescription}</MonsterDescription>
        </BackgroundContent>
        <FrameImage src={BordaLore.src as string} />
      </CardDetailsContainer>

      <CardBorder src={Borda.src as string} />
    </CardContainer>
  );
};
