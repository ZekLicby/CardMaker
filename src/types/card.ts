export type TCardTypeValue =
  | "normal"
  | "darkSynchro"
  | "effect"
  | "fusion"
  | "legendaryDragon"
  | "link"
  | "obelisk"
  | "ra"
  | "ritual"
  | "slifer"
  | "spell"
  | "synchro"
  | "token"
  | "trap"
  | "xyz";

export type TCardTypeLabel =
  | "Normal"
  | "Dark Synchro"
  | "Effect"
  | "Fusion"
  | "Legendary Dragon"
  | "Link"
  | "Obelisk"
  | "Ra"
  | "Ritual"
  | "Slifer"
  | "Spell"
  | "Synchro"
  | "Token"
  | "Trap"
  | "XYZ";

export type TCardAttributeValue =
  | "dark"
  | "divine"
  | "earth"
  | "fire"
  | "light"
  | "water"
  | "wind";

export type TCardAttributeLabel =
  | "Dark"
  | "Divine"
  | "Earth"
  | "Fire"
  | "Light"
  | "Water"
  | "Wind";

export type TCardLevelValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TCardLevelLabel =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type TCardLevelStarType = "positive" | "negative" | "rank" | null;

export interface ICardTypeOptions {
  value: TCardTypeValue;
  label: TCardTypeLabel;
  selected?: boolean;
}

export type ICardAttributeOptions = {
  value: TCardAttributeValue;
  label: TCardAttributeLabel;
  selected?: boolean;
};

export type TCardLevelOptions = {
  value: TCardLevelValue;
  label: TCardLevelLabel;
  selected?: boolean;
};
