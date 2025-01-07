import styled from "styled-components";
import {
  LevelStarIcon as Star,
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
} from "@/Icons";

import Image from "next/image";
import { ICardContainer } from "./types";

export const CardContainer = styled.section<ICardContainer>`
  width: 424px;
  height: 614px;
  border: 6px solid silver;
  padding: 1rem;

  background-image: url(${({ backGround }) => backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

export const LevelStarIcon = styled(Star)``;

export const LightAttributeIcon = styled(Light)``;

export const WaterAttributeIcon = styled(Water)``;

export const DarkAttributeIcon = styled(Dark)``;

export const FireAttributeIcon = styled(Fire)``;

export const EarthAttributeIcon = styled(Earth)``;

export const WindAttributeIcon = styled(Wind)``;

export const DivineAttributeIcon = styled(Divine)``;

export const SpellAttributeIcon = styled(Spell)``;

export const TrapAttributeIcon = styled(Trap)``;

export const RankStarIcon = styled(Rank)``;
