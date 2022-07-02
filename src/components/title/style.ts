import styled from "styled-components";

type TitleStyleProps = {
  fontColor: string;
  fontSize: string;
  borderRadius: string;
};
const StyledRoot = styled.span<TitleStyleProps>`
  border: 2px solid ${({ theme }) => theme.greenDark};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  padding: 0.8rem;
`;

export { StyledRoot };
