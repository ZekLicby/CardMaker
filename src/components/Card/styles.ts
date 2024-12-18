import styled from "styled-components";
import { LevelStarIcon as Star, LightAttributeIcon as Light } from "@/Icons";
import Image from "next/image";

export const CardContainer = styled.section`
  width: 424px;
  height: 614px;
  border: 6px solid silver;
  padding: 1rem;

  /* Normal monster */
  background-color: #ffd700;
`;

export const CardNameContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 32px;
  width: 100%;

  padding: 4px;

  border-top: 2px solid white;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid white;
`;

export const CardNameText = styled.p`
  font-size: 1.5rem;
  color: black;
`;

export const StarAndImageContainer = styled.section`
  padding: 6px;
`;

export const StarContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ImageContainer = styled.section`
  height: 300px;

  border: 6px solid silver;
`;

export const CardImage = styled(Image)``;

export const LightAttributeIcon = styled(Light)``;

export const LevelStarIcon = styled(Star)``;
