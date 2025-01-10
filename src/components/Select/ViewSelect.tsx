import { CustomOption, CustomSelect, SelectContainer } from "./styles";

export const ViewSelect = () => {
  return (
    <SelectContainer>
      <CustomSelect>
        <CustomOption value="link" selected>
          link
        </CustomOption>
        <CustomOption value="xyz">xyz</CustomOption>
        <CustomOption value="synchro">synchro</CustomOption>
      </CustomSelect>
    </SelectContainer>
  );
};
