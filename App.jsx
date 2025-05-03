import React from "react";
import Header from "./component/header";
import About from "./component/about";
import Projects from "./component/Projects";
import Contact from "./component/contact";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
