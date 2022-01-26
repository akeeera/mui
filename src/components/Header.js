import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container justifyContent={"center"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="large button group">
          <Link to="posts" className={classes.root}>
            <Grid item>
              <Button>POSTS</Button>
            </Grid>
          </Link>
          <Link to="albums" className={classes.root}>
            <Grid item>
              <Button>ALBUMS</Button>
            </Grid>
          </Link>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}
