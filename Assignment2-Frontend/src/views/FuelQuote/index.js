// @ts-nocheck
/* eslint-disable max-len */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import FQFORM from "./FuelQuoteBody";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProfilesBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [fuelQuoteData, setFuelQuoteData] = React.useState({});

  return (
    <Grid
      style={{
        paddingLeft: "20",
      }}
      container
      alignContent="center"
    >
      {/* FUEL QUOTE FORM */}
      <Grid item md={6} xs={12}>
        <FQFORM />
      </Grid>
    </Grid>
  );
}

export default ProfilesBody;
