import { ViewSelect } from "./ViewSelect";
import { useSelect } from "./useSelect";

export const Select = () => {
  return <ViewSelect {...useSelect()} />;
};
