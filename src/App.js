import "./App.css";
import Bar from "./Menu/Appbar.js";
import Homepage from "./Homepage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Chango"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Bar />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
