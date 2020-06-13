/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  Link,
  Grid,
  Drawer,
  Hidden,
  List,
  makeStyles,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-evenly">
            <Grid item>
              <Link
                component={RouterLink}
                to="/app/profiles"
                variant="body2"
                color="textSecondary"
              >
                <Button color="secondary"> Profiles</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/app/fuelquote"
                variant="body2"
                color="textSecondary"
              >
                <Button color="secondary">Fuel Quote</Button>
              </Link>
            </Grid>
            <Grid item>
              <Button color="secondary">Logout</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
