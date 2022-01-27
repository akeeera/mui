import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "white",
  },
  menu: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export default function Header(id) {
  const classes = useStyles();

  return (
    <Box className={classes.menu} pb={7}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="posts" className={classes.root}>
            <Button color="inherit">Posts</Button>
          </Link>
          <Link to="albums" className={classes.root}>
            <Button color="inherit">Albums</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
