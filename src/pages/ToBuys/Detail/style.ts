import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const InfoContainer = styled.section`
  background-color: white;
  border: solid #47624f 1.5px;
  border-radius: 20px;
  box-shadow: -1px 1px 1px grey;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  padding: 1.5rem 4.5rem;
  margin: 1.5rem;
`;

const StyledBox = styled.div`
  width: 100px;
  text-align: center;
  background-color: white;
  border: solid #00462a 1.5px;
  border-radius: 10px;
  box-shadow: -1px 1px 1px grey;
  margin-bottom: 20px;
  padding: 0.8rem;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
`;

const InfoFormat = styled.div`
  width: 40rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.8rem 0;
`;

const Text1 = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0.8rem 0;
`;

const DetailText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.black};
`;

export {
  StyledRoot,
  InfoContainer,
  StyledBox,
  Text,
  InfoFormat,
  Text1,
  DetailText,
};
