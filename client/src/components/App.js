import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container } from "./styles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const lightTheme = {
  backgroundColor: "#FDFAF0",
  color: "#FB9C4C",
  primary: "#B14B1C",
  secondary: "#EFDFC7",
  infoTitle: "#215623",
  infoBody: "#E8F4D0",
};

const darkTheme = {
  backgroundColor: "#E37F51",
  color: "#FDFAF0",
  primary: "#EFDFC7",
  secondary: "#B14B1C",
  infoTitle: "#E8F4D0",
  infoBody: "#215623",
};

export default App;
