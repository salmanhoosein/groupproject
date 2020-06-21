/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./NavBar.css";
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
    
   <div class="topnav">
      <Link
        component={RouterLink}
        to="/home"
        variant="body2"
        color="textSecondary"
      >
        Home
      </Link>
    
    <Link  variant="body2"
      color="textSecondary">
        About us
    </Link>

   <Link
      component={RouterLink}
      to="/app/fuelquote"
      variant="body2"
      color="textSecondary"
  >
              Get Quote
    </Link>

   <Link
        component={RouterLink}
        to="/app/history"
        variant="body2"
        color="textSecondary"
    >
        Quote History
    </Link>
  <div class="topnav-right">
    <Link
      component={RouterLink}
      to="/app/profiles"
      variant="body2"
      color="textSecondary"
  >
        Profiles
    </Link>
    <Link  variant="body2"
      color="textSecondary">
        Log out
    </Link>

  </div>
    </div>
  );
}

export default NavBar;
