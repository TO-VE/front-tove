import styled from "styled-components";
type BtnStyleProps = {
  fontSize: string;
  fontColor: string;
  fontWeight: number;
  backgroundColor: string;
};
export const StyledRoot = styled.button<BtnStyleProps>`
  border: 1px solid ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${({ theme }) => theme.borders.light};
  padding: 0.8rem;
  width: 25rem;
  margin-bottom: 2rem;
`;
