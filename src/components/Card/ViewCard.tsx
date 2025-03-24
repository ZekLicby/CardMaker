import {
  CardContainer,
  CardImage,
  CardNameContainer,
  CardNameText,
  ImageContainer,
  StarAndImageContainer,
  StarContainer,
  LevelStarIcon,
} from "./styles";

import { FC } from "react";
import { IViewCard } from "./types";

export const ViewCard: FC<IViewCard> = ({
  currentCardBackground,
  currentCardAttribute,
  cardName,
  image,
  cardRef,
}) => {
  return (
    <CardContainer backGround={currentCardBackground} ref={cardRef}>
      <CardNameContainer>
        <CardNameText>{cardName}</CardNameText>
        {currentCardAttribute}
      </CardNameContainer>

      <StarAndImageContainer>
        <StarContainer>
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
          <LevelStarIcon />
        </StarContainer>

        <ImageContainer>
          <CardImage
            src={image as string}
            width={356}
            height={288}
            alt="Dragão branco de olhos azuis"
          />
        </ImageContainer>
      </StarAndImageContainer>
    </CardContainer>
  );
};
