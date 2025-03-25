import styled from "styled-components";
import {
  PositiveLevelStarIcon as Positive,
  LightAttributeIcon as Light,
  WaterAttributeIcon as Water,
  DarkAttributeIcon as Dark,
  FireAttributeIcon as Fire,
  EarthAttributeIcon as Earth,
  WindAttributeIcon as Wind,
  DivineAttributeIcon as Divine,
  SpellAttributeIcon as Spell,
  TrapAttributeIcon as Trap,
  RankStarIcon as Rank,
  NegativeLevelStarIcon as Negative,
} from "@/Icons";

import Image from "next/image";
import { ICardContainer, TCardNameText } from "./types";

export const CardContainer = styled.section<ICardContainer>`
  width: 424px;
  height: 614px;
  border: 6px solid silver;
  padding: 1rem;

  background-image: url(${({ backGround }) => backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  gap: 6px;
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

export const CardNameText = styled.p<TCardNameText>`
  font-size: 1.5rem;
  color: ${({ isTextWhite }) => (isTextWhite ? "white" : "black")};
`;

export const StarAndImageContainer = styled.section`
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StarContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StarIconContainer = styled.section``;

export const ImageContainer = styled.section`
  height: 300px;

  border: 6px solid silver;
`;

export const CardImage = styled(Image)``;

export const LightAttributeIcon = styled(Light)``;

export const WaterAttributeIcon = styled(Water)``;

export const DarkAttributeIcon = styled(Dark)``;

export const FireAttributeIcon = styled(Fire)``;

export const EarthAttributeIcon = styled(Earth)``;

export const WindAttributeIcon = styled(Wind)``;

export const DivineAttributeIcon = styled(Divine)``;

export const SpellAttributeIcon = styled(Spell)``;

export const TrapAttributeIcon = styled(Trap)``;

export const PositiveLevelStarIcon = styled(Positive)``;

export const NegativeLevelStarIcon = styled(Negative)``;

export const RankStarIcon = styled(Rank)``;
