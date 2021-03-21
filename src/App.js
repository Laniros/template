import "./App.css";
import Bar from "./Menu/Appbar.js";
import Homepage from "./Homepage";
import Portfolio from "./Portfolio";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Chango"].join(","),
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Bar />
        <Route path="/about"></Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
