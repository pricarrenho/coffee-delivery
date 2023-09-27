import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
