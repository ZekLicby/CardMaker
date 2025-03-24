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

export interface ICardTypeOptions {
  value: TCardTypeValue;
  label: TCardTypeLabel;
  selected?: boolean;
}

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

export type ICardAttributeOptions = {
  value: TCardAttributeValue;
  label: TCardAttributeLabel;
  selected?: boolean;
};
