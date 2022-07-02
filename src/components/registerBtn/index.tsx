import React from "react";
import { StyledRoot } from "./style";

type BtnProps = {
  title: string;
  fontSize: string;
  fontWeight: number;
  fontColor: string;
  backgroundColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledBtn: React.FC<BtnProps> = ({
  title,
  fontSize,
  fontColor,
  fontWeight,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledRoot
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {title}
    </StyledRoot>
  );
};

export default StyledBtn;
