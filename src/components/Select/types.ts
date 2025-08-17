export interface ISelect {
  setValue: (value: any) => void;
  currentValue?: string | number;
  label?: string;
  optionsArray: Array<{
    value: string | number;
    label: string;
    selected?: boolean;
  }>;
}

export interface IViewSelect {
  setValue: (value: any) => void;
  currentValue?: string | number;
  label?: string;
  optionsArray: Array<{
    value: string | number;
    label: string;
    selected?: boolean;
  }>;
}
