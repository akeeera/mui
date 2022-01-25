import * as React from "react";
import Posts from "./pages/Posts";
import store from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Container from "@mui/material/Container";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container>
          <BrowserRouter>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route exact path="*" />
            <Redirect to="/posts" />
          </BrowserRouter>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
