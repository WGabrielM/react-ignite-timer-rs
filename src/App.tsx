import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";

import Router from "./Router";

import { ThemeProvider } from "styled-components";
import { CyclesContextProvider } from "./contexts/CyclesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
