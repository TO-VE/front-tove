//전역 스타일 모음
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

//외부에서 import 해야 함 -> 모듈화
const GlobalStyle = createGlobalStyle`
${reset}
//구글 폰트 Inter 가져오기
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");

#root, body, html {
    //
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    background-color: #FFFFFF;
    font-family: 'Inter', sans-serif;
  }
  * {
 
    box-sizing: border-box;
    ::-webkit-scrollbar {
      //
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: #FFFFFF;
      border-radius: 18px;
    }
  }
  a{
    margin:0;
    padding:0;
    text-decoration: none;
  }
  button:hover {
    cursor: pointer;
  }
  img{
    background-color: transparent;
  }
`;

export default GlobalStyle;
