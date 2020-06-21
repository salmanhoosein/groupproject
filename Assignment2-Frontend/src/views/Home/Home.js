import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  background: {
    background:
      "url(https://greasebook.com/blog/wp-content/uploads/2015/06/pumper-jobs-lined-up.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.background}>
      <Grid container justify="space-between">
        <Grid
          item
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <Typography variant="h4" color="inherit">
            Pioneering the petroleum industry with professional, cost effective
            solutions
          </Typography>
        </Grid>
        <Grid
          style={{
            marginTop: 25,
            paddingRight: 30,
          }}
          item
        >
          <Link component={RouterLink} to="/app/about">
            <Typography variant="h5" color="inherit">
              LEARN MORE
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
