import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Task } from "types";

function App() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <div>최상위 컴포넌트</div>
      </ThemeProvider>
    </>
  );
}

export default App;
