// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  TextField,
  Box,
  Button,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  Divider,
  CardContent,
  OutlinedInput,
} from "@material-ui/core";

import { states } from "../../constants/index";
toast.configure({
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

const useStyles = makeStyles((theme) => ({
  root: {},

  formControl: {
    minWidth: 160,
  },
  formControl2: {
    width: "100%",
  },
  cardHeader: {
    textAlign: "center",
  },
}));

function InfoForm(props) {
  const classes = useStyles();
  const reduxAuth = useSelector((state) => state.auth);

  const [fullName, setFullName] = React.useState();
  const [addressOne, setAddressOne] = React.useState();
  const [addressTwo, setAddressTwo] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [zip, setZip] = React.useState();

  //get profile from database
  React.useEffect(() => {
    //get token from redux, if user refreshed then from localstorage
    let token = reduxAuth.user.token
      ? reduxAuth.user.token
      : localStorage.getItem("authtoken");
    let email = reduxAuth.user.email
      ? reduxAuth.user.email
      : localStorage.getItem("userEmail");
    let userId = reduxAuth.user.userId
      ? reduxAuth.user.userId
      : localStorage.getItem("userId");
    axios({
      method: "POST",
      url: "http://localhost:8080/profile/get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        email: email,
        userId: userId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setFullName(res.data.fullName);
          setAddressOne(res.data.addressOne);
          setAddressTwo(res.data.addressTwo);
          setCity(res.data.city);
          setState(res.data.state);
          setZip(res.data.zip);
        }
        if (res.data.error) {
          toast.error(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, [reduxAuth.user.token]);

  return (
    <Card
      style={{
        margin: "auto",
        marginTop: "10vh",
        width: "90%",
        backgroundColor: "lightgrey",
        border: "2px solid black",
      }}
    >
      <CardHeader className={classes.cardHeader} title="Profile Details" />
      <Divider />
      <CardContent>
        <Formik
          initialValues={{
            fullName: null,
            addressOne: null,
            addressTwo: null,
            city: null,
            state: null,
            zip: null,
          }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string()
              .max(50)
              .nullable()
              .required("Full Name is required"),
            addressOne: Yup.string()
              .max(100)
              .nullable()
              .required("Address One  is required"),
            addressTwo: Yup.string()
              .max(100)
              .nullable()
              .notRequired("Address Two  is optional"),
            city: Yup.string()
              .max(100)
              .nullable()
              .required("City is required"),
            state: Yup.string()
              .nullable()
              .required("state is required"),
            zip: Yup.string()
              .min(5, "Need at least 5 numbers")
              .max(9)
              .nullable()
              .required("Zip is required"),
          })}
        >
          {({ errors, handleBlur, handleChange, touched, values }) => (
            <>
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    type="text"
                    onBlur={handleBlur}
                    variant="outlined"
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setFullName(event.target.value);
                    }}
                    value={values.fullName || fullName}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(touched.addressOne && errors.addressOne)}
                    helperText={touched.addressOne && errors.addressOne}
                    label="Address One"
                    name="addressOne"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setAddressOne(event.target.value);
                    }}
                    value={values.addressOne || addressOne}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(touched.addressTwo && errors.addressTwo)}
                    helperText={touched.addressTwo && errors.addressTwo}
                    label="Address Two"
                    name="addressTwo"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setAddressTwo(event.target.value);
                    }}
                    value={values.addressTwo || addressTwo}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(touched.city && errors.city)}
                    helperText={touched.city && errors.city}
                    label="City"
                    name="city"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setCity(event.target.value);
                    }}
                    value={values.city || city}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    select
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="State"
                    variant="outlined"
                    className={classes.formControl2}
                    error={Boolean(touched.state && errors.state)}
                    helperText={touched.state && errors.state}
                    value={values.state || state}
                    onBlur={handleBlur}
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setState(event.target.value);
                    }}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {states.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(touched.zip && errors.zip)}
                    helperText={touched.zip && errors.zip}
                    label="Zip"
                    name="zip"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onMouseEnter={(event) => {
                      handleChange(event);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setZip(event.target.value);
                    }}
                    value={values.zip || zip}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container justify="center">
                <Grid item>
                  <Button
                    color="secondary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      //get token from redux, if user refreshed then from localstorage
                      let token = reduxAuth.user.token
                        ? reduxAuth.user.token
                        : localStorage.getItem("authtoken");
                      let email = reduxAuth.user.email
                        ? reduxAuth.user.email
                        : localStorage.getItem("userEmail");
                      let userId = reduxAuth.user.userId
                        ? reduxAuth.user.userId
                        : localStorage.getItem("userId");
                      axios({
                        method: "POST",
                        url: "http://localhost:8080/profile/add",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + token,
                        },
                        data: {
                          fullName: fullName,
                          addressOne: addressOne,
                          addressTwo: addressTwo,
                          city: city,
                          state: state,
                          zip: zip,
                          email: email,
                          userId: userId,
                        },
                      })
                        .then((res) => {
                          if (res.data.success) {
                            toast.success("Profile Saved!");
                          }
                          if (res.data.error) {
                            toast.error(res.data.error);
                          }
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default InfoForm;
