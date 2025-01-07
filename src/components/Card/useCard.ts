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

export const useCard = () => {
  const cardType = "link";

  const cardsBackground = {
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

  const currentCardBackground = cardsBackground[cardType].src;

  return { currentCardBackground };
};
