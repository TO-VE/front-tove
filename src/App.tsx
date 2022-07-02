import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { NavBar } from "components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "AppRoter";
import Logo from "components/logo";

function App() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle /> {/*스타일 리셋 & 구글 폰트 적용*/}
        <Router>
          <NavBar /> {/*상단 네브바*/}
          <Logo />
          <AppRouter /> {/*페이지 이동 라우터*/}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
