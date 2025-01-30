import { Dispatch, SetStateAction } from "react";

export interface ISelect<V, L> {
  setValue: Dispatch<SetStateAction<V>>;
  optionsArray: Array<{ value: V; label: L; selected?: boolean }>;
}

export interface IViewSelect<V, L> {
  setValue: Dispatch<SetStateAction<V>>;
  optionsArray: Array<{ value: V; label: L; selected?: boolean }>;
}
