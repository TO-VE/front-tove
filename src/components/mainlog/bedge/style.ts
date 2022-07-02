import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
const StyledRoot = styled.div`
  ${applyMediaQuery("mobile")} {
    img {
      width: 80vw;
    }
  }
  ${applyMediaQuery("tablet")} {
    img {
      width: 80vw;
    }
  }
`;

export { StyledRoot };
