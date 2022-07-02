import React from "react";
import { StyledRoot } from "./style";

type TitleProps = {
  title: string;
  fontColor: string;
  fontSize: string;
  borderRadius: string;
};
const StyledTitle: React.FC<TitleProps> = ({
  title,
  fontColor,
  fontSize,
  borderRadius,
}) => {
  return (
    <StyledRoot
      fontColor={fontColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {title}
    </StyledRoot>
  );
};

export default StyledTitle;
