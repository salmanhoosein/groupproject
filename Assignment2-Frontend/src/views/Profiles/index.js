// @ts-nocheck
/* eslint-disable max-len */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, Button } from "@material-ui/core";

import InfoForm from "./ProfileForm";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProfilesBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = React.useState({});
  const [fuelQuoteData, setFuelQuoteData] = React.useState({});

  return (
    <Grid container>
      {/* ProfileForm */}
      <Grid item xs={12}>
        <InfoForm
          formTitle={"Profile Details"}
          saveProfile={(profileDetails) => {
            console.log("profile:", profileDetails);
            setProfileData(profileDetails);
          }}
        />
      </Grid>
    </Grid>
  );
}

export default ProfilesBody;
