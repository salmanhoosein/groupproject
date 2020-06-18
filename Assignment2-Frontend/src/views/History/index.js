// @ts-nocheck
/* eslint-disable max-len */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import HistoryTable from "./HistoryTable";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProfilesBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Grid container>
      {/* FUEL QUOTE FORM */}
      <Grid item md={6} xs={12}>
        <HistoryTable />
      </Grid>
    </Grid>
  );
}

export default ProfilesBody;
