import "./App.css";
import Bar from "./Menu/Appbar.js";
import Homepage from "./Homepage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <Route exact path="/">
          <Route path="/about"></Route>
          <Homepage />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
