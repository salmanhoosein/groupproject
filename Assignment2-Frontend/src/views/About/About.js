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
        <Typography variant="h4">Meet the Team?</Typography>
        <p
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          The team at "Fuel Stuff" is build up of dedicated hard working
          individuals ready to meet all demands. The "4353 Group", the name of
          the team, met after an instructor of a software desing class gave a
          group assingment to his students. By mere chance, Edwin Campuzano,
          Salman Hossein, Zain Momin, and Nhat Do found each other and thus
          began the beginning of the great company "Fuel Stuff". 
          <br></br>
          Something to say: ("Please add something, like a quote or WTV")
          <br></br>
          Edwin Campuzano: "<i>There is nothing to fear, but fear itself</i>" - Abraham Washington
          <br></br>
          Salman Hossein: "<i>Im the gayest one here</i>" - Sal 
          <br></br>
          Zain Momin: "<i>Spooderman</i>" 
          <br></br>
          Nhat Do: "<i>Pepe the frog</i>"
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
          Fuel Stuff was founded in the year of 2020, during the world wide
          COVID-19 pendemic. Given the circumstances, the company was able to triumph and become what it is today. Our mission is to do whatever we can to provide our costumers with the best quality fuel on the market. Using our highly advanced scientific calculations, we can give appropriate and affordable fuel quotes to our clinets no matter where they are.
        </p>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
