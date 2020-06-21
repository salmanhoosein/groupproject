import React from "react";
import { useHistory } from "react-router-dom";
import './Home.css';
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

function Homepage() {
  return (
  <>


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
  <section className="background top">
    <div class="centered">Pioneering the petroleum industry with professional, cost effective solutions </div>
  </section>
  <main>
  <h2>At Our Company</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis, labore debitis nesciunt ipsam odio corporis architecto reiciendis voluptas ab quibusdam ratione rerum tempore voluptatibus libero cumque dignissimos vero hic!</p>
</main>
  </>
  );
}

export default Homepage;