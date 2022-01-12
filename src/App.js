import * as React from "react";
import ReactDOM from "react-dom";
import Posts from "./pages/Posts";
import store from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Posts />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
export default App;
