// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

import {
  TextField,
  Box,
  Button,
  FormHelperText,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
  Card,
  CardHeader,
  Divider,
  CardContent,
  OutlinedInput,
} from "@material-ui/core";

import { states } from "../../constants/index";

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

  const [fullName, setFullName] = React.useState(" ");
  const [addressOne, setAddressOne] = React.useState(" ");
  const [addressTwo, setAddressTwo] = React.useState(" ");
  const [city, setCity] = React.useState(" ");
  const [state, setState] = React.useState(" ");
  const [zip, setZip] = React.useState(" ");

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
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    type="text"
                    onBlur={handleBlur}
                    variant="outlined"
                    onChange={(event) => {
                      handleChange(event);
                      setFullName(event.target.value);
                    }}
                    value={values.fullName}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    error={Boolean(touched.addressOne && errors.addressOne)}
                    helperText={touched.addressOne && errors.addressOne}
                    label="Address One"
                    name="addressOne"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);
                      setAddressOne(event.target.value);
                    }}
                    value={addressOne}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    error={Boolean(touched.addressTwo && errors.addressTwo)}
                    helperText={touched.addressTwo && errors.addressTwo}
                    label="Address Two"
                    name="addressTwo"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);
                      setAddressTwo(event.target.value);
                    }}
                    value={values.addressTwo}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    helperText={touched.city && errors.city}
                    label="City"
                    name="city"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);

                      setCity(event.target.value);
                    }}
                    value={values.city}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    select
                    label="State"
                    variant="outlined"
                    className={classes.formControl2}
                    error={Boolean(touched.state && errors.state)}
                    helperText={touched.state && errors.state}
                    value={values.state}
                    onBlur={handleBlur}
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
                    error={Boolean(touched.zip && errors.zip)}
                    helperText={touched.zip && errors.zip}
                    label="zip"
                    name="zip"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={(event) => {
                      handleChange(event);

                      setZip(event.target.value);
                    }}
                    value={values.zip}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container justify="center">
                <Grid item>
                  <Button
                    color="secondary"
                    disabled={true}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      // axios.post("http://localhost:8080/admin/profiles", {});
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
