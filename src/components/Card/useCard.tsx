import NormalCardBackground from "../../../public/normal.png";
import DarkSynchroCardBackground from "../../../public/dark-synchro.png";
import EffectCardBackground from "../../../public/effect.png";
import FusionCardBackground from "../../../public/fusion.png";
import LegendaryDragonCardBackground from "../../../public/legendary-dragon.png";
import LinkCardBackground from "../../../public/link.png";
import ObeliskCardBackground from "../../../public/obelisk.png";
import RaCardBackground from "../../../public/ra.png";
import RitualCardBackground from "../../../public/ritual.png";
import SliferCardBackground from "../../../public/slifer.png";
import SpellCardBackground from "../../../public/spell.png";
import SynchroCardBackground from "../../../public/synchro.png";
import TokenCardBackground from "../../../public/token.png";
import TrapCardBackground from "../../../public/trap.png";
import XyzCardBackground from "../../../public/xyz.png";
import { useContext } from "react";
import { CardContext } from "@/context/card";
import {
  DarkAttributeIcon,
  DivineAttributeIcon,
  EarthAttributeIcon,
  FireAttributeIcon,
  PositiveLevelStarIcon,
  LightAttributeIcon,
  NegativeLevelStarIcon,
  RankStarIcon,
  SpellAttributeIcon,
  TrapAttributeIcon,
  WaterAttributeIcon,
  WindAttributeIcon,
  StarIconContainer,
} from "./styles";

export const useCard = () => {
  const cardContext = useContext(CardContext);

  const {
    cardName,
    cardType,
    cardRef,
    cardImage,
    cardAttribute,
    cardLevel,
    cardLevelStarType,
  } = cardContext;

  const isTextWhite = cardType === "xyz";

  const mappedCardBackground = {
    normal: NormalCardBackground,
    darkSynchro: DarkSynchroCardBackground,
    effect: EffectCardBackground,
    fusion: FusionCardBackground,
    legendaryDragon: LegendaryDragonCardBackground,
    link: LinkCardBackground,
    obelisk: ObeliskCardBackground,
    ra: RaCardBackground,
    ritual: RitualCardBackground,
    slifer: SliferCardBackground,
    spell: SpellCardBackground,
    synchro: SynchroCardBackground,
    token: TokenCardBackground,
    trap: TrapCardBackground,
    xyz: XyzCardBackground,
  };

  const mappedCardAttribute = {
    dark: <DarkAttributeIcon />,
    divine: <DivineAttributeIcon />,
    earth: <EarthAttributeIcon />,
    fire: <FireAttributeIcon />,
    light: <LightAttributeIcon />,
    water: <WaterAttributeIcon />,
    wind: <WindAttributeIcon />,
    trap: <TrapAttributeIcon />,
    spell: <SpellAttributeIcon />,
  };

  const mappedCardLevel = {
    positive: <PositiveLevelStarIcon />,
    negative: <NegativeLevelStarIcon />,
    rank: <RankStarIcon />,
  };

  const currentCardBackground = mappedCardBackground[cardType].src;
  const currentCardAttributeIcon = mappedCardAttribute[cardAttribute];
  const currentCardLevelIcon =
    cardLevelStarType !== null && mappedCardLevel[cardLevelStarType];

  const handleReturnCardLevel = () => {
    if (!cardLevelStarType) {
      return;
    }

    return Array.from({ length: cardLevel }, (_, index) => (
      <StarIconContainer key={index}>{currentCardLevelIcon}</StarIconContainer>
    ));
  };

  return {
    currentCardBackground,
    cardName,
    cardRef,
    cardImage,
    currentCardAttributeIcon,
    handleReturnCardLevel,
    isTextWhite,
  };
};
