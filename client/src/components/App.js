import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container } from "../styles";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import WebPortfolio from "../pages/WebPortfolio";
import GraphicPortfolio from "../pages/GraphicPortfolio";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/web" element={<WebPortfolio />} />
            <Route path="/graphic" element={<GraphicPortfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
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
