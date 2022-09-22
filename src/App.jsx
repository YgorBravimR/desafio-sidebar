import { ThemeProvider } from "styled-components";
import { GlobalStyles, MainContainer } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { MiniDrawer } from "./components/MiniDrawer";
import { MainContentBox } from "./components/MainContentBox";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MainContainer>
        <MiniDrawer />
        <MainContentBox />
      </MainContainer>
    </ThemeProvider>
  );
}
