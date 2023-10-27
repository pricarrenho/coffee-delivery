import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalProvider } from "./context/GlobalContext";

export function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeDefault}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}
