import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { useContext } from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { AppContext } from "./components/AppContext";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f4f4f4',  
    },
    primary: {
      main: "#0000af",
    },
    text: {
      primary: '#000000',
      secondary: '#2a2a2a'
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#010103',
      paper: '#0E0E10',
    },
    primary: {
      main: "#0000af",
    },
    text: {
      primary: "#fff",
      secondary: "#afb0b6"
    }
  },
});

const Main = styled("main")(() => ({
  width: "100%",
  // minHeight: "100vh",
  color: "#fff"
}))

const App = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
    <CssBaseline />
    <Main>
        <Box sx={{ height: "100vh", p: "1px", display: "flex", flexDirection: "column" }}>
          <NavBar />
          <Hero /> {/* using flex: 1 here to take all remaining space */}
        </Box>
        <Experience />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </Main>
    </ThemeProvider>
  )
}

export default App;
