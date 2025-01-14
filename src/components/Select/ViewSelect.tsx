import { FC } from "react";
import { CustomOption, CustomSelect, SelectContainer } from "./styles";
import { IViewSelect } from "./types";
import { TCardType } from "@/types/card";

export const ViewSelect: FC<IViewSelect> = ({ setCardType }) => {
  return (
    <SelectContainer>
      <CustomSelect
        onChange={({ currentTarget: { value } }) => {
          setCardType(value as TCardType);
        }}
      >
        <CustomOption value="link" selected>
          link
        </CustomOption>
        <CustomOption value="xyz">xyz</CustomOption>
        <CustomOption value="synchro">synchro</CustomOption>
        <CustomOption value="normal">normal</CustomOption>
        <CustomOption value="darkSynchro">darkSynchro</CustomOption>
        <CustomOption value="effect">effect</CustomOption>
        <CustomOption value="fusion">fusion</CustomOption>
        <CustomOption value="legendaryDragon">legendaryDragon</CustomOption>
        <CustomOption value="obelisk">obelisk</CustomOption>
        <CustomOption value="ra">ra</CustomOption>
        <CustomOption value="ritual">ritual</CustomOption>
        <CustomOption value="slifer">slifer</CustomOption>
        <CustomOption value="spell">spell</CustomOption>
        <CustomOption value="trap">trap</CustomOption>
        <CustomOption value="token">token</CustomOption>
      </CustomSelect>
    </SelectContainer>
  );
};
