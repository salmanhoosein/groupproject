import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Typography,
  Link,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function AboutPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        marginTop: 10,
      }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid xs={12} item>
        <Typography variant="h2">About</Typography>
      </Grid>
      <Grid
        xs={12}
        item
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Typography variant="h4">Who We Are?</Typography>
        <p
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Grid>
      <Grid
        xs={12}
        item
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Typography variant="h4">What We Do?</Typography>
        <p
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
