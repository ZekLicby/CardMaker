export interface ISelect {
  setValue: (value: any) => void;
  optionsArray: Array<{
    value: string | number;
    label: string;
    selected?: boolean;
  }>;
}

export interface IViewSelect {
  setValue: (value: any) => void;
  optionsArray: Array<{
    value: string | number;
    label: string;
    selected?: boolean;
  }>;
}
