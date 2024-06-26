import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";

import Router from "./Router";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
