import * as React from "react";
import Posts from "./pages/Posts";
import store from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Container from "@mui/material/Container";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route exact path="posts" element={<Posts />} />
              <Route exact path="albums" element={<Albums />} />
              <Route exact path="albums/:id" element={<Photos />} />
              <Route exact path="*" element={<Navigate to="posts" />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
