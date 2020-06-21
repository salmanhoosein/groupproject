import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function AboutPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        marginTop: 10,
        paddingLeft: 10,
      }}
    >
      <Grid xs={12} item>
        <Typography variant="h2">About</Typography>
      </Grid>
      <Grid
        item
        style={{
          marginTop: 10,
          paddingLeft: 10
        }}
      >
        INSERT DESCRIPTION OF COMPANY
      </Grid>
    </Grid>
  );
}

export default AboutPage;
