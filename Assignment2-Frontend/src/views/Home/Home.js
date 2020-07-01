import React from "react";
import { Link as RouterLink } from "react-router-dom";
import style from "./Home.module.css";
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
      <section className={style.top}>
        <div class="centered">
          Pioneering the petroleum industry with professional, cost effective
          solutions{" "}
        </div>
        <Link component={RouterLink} to="/app/about">
          <Typography className={style.aboutLink}>LEARN MORE</Typography>
        </Link>
      </section>
    </Grid>
  );
}

export default HomePage;
