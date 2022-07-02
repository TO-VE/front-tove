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
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-radius: ${(props) => props.borderRadius};
  padding: 0.8rem;
  width: fit-content;
  margin-bottom: 3.5rem;
`;

export { StyledRoot };
