export interface ISelect {
  setValue: (value: any) => void;
  optionsArray: Array<{ value: string; label: string; selected?: boolean }>;
}

export interface IViewSelect {
  setValue: (value: any) => void;
  optionsArray: Array<{ value: string; label: string; selected?: boolean }>;
}
