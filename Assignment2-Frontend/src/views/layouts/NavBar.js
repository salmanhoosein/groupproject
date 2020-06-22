/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import './NavBar.css';
import { Link as RouterLink } from "react-router-dom";
import { Link, makeStyles, Grid, Button } from "@material-ui/core";

function NavBar() {

  return (
    
   <div class="topnav">
      <Link
        component={RouterLink}
        to="/app/home"
        variant="body2"
        color="textSecondary"
      >
        Home
      </Link>
    
    <Link  
      component={RouterLink}
      to="/app/about"
      variant="body2"
      color="textSecondary"
    >
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
