import * as React from "react";
import Posts from "./pages/Posts";
import store from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Container from "@mui/material/Container";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Posts />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
