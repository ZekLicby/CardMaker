import {
  CardContainer,
  CardImage,
  CardNameContainer,
  CardNameText,
  ImageContainer,
  StarAndImageContainer,
  StarContainer,
} from "./styles";

import { FC } from "react";
import { IViewCard } from "./types";

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
            src={cardImage as string}
            width={356}
            height={288}
            alt="Dragão branco de olhos azuis"
          />
        </ImageContainer>
      </StarAndImageContainer>
    </CardContainer>
  );
};
