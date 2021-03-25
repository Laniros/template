import "./App.css";
import Bar from "./Menu/Appbar.js";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "./AOS";
import "aos/dist/aos.css";
import Footer from "./Menu/Footer";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Merriweather"].join(","),
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Bar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
