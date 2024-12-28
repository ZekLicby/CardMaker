import {
  CardContainer,
  CardImage,
  CardNameContainer,
  CardNameText,
  ImageContainer,
  StarAndImageContainer,
  StarContainer,
  LevelStarIcon,
  LightAttributeIcon,
} from "./styles";

import BlueEyesWhiteDragon from "../../../public/Blue-Eyes-White-Dragon.png";

export const ViewCard = () => {
  return (
    <CardContainer>
      <CardNameContainer>
        <CardNameText>Blue-Eyes White Dragon</CardNameText>
        <LightAttributeIcon />
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
            src={BlueEyesWhiteDragon}
            width={356}
            height={288}
            alt="Dragão branco de olhos azuis"
          />
        </ImageContainer>
      </StarAndImageContainer>
    </CardContainer>
  );
};
