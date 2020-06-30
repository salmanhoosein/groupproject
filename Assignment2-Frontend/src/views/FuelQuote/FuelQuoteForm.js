// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

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

function FQFORM(props) {
  const classes = useStyles();

  const [gallonsRequested, setGallonsRequested] = React.useState();
  const [deliveryAddress, setDeliveryAddress] = React.useState("");
  const [deliveryDate, setDeliveryDate] = React.useState("");
  const [price, setPrice] = React.useState();
  const [amountDue, setAmountDue] = React.useState();

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
      <CardHeader className={classes.cardHeader} title="Fuel Quote Form" />
      <Divider />
      <CardContent>
        <Formik
          initialValues={{
            gallonsRequested: null,
            totalAmountDue: null,
            price: null,
          }}
          validationSchema={Yup.object().shape({
            gallonsRequested: Yup.number()
              .required("Gallons Requested is required")
              .nullable(),
            totalAmountDue: Yup.number().nullable(),
            price: Yup.number().nullable(),
          })}
        >
          {({ errors, handleBlur, handleChange, touched, values }) => (
            <>
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    label="Gallons Requested"
                    error={Boolean(
                      touched.gallonsRequested && errors.gallonsRequested
                    )}
                    helperText={
                      touched.gallonsRequested && errors.gallonsRequested
                    }
                    name="gallonsRequested"
                    fullWidth
                    onBlur={handleBlur}
                    type="text"
                    variant="outlined"
                    onChange={(event) => {
                      handleChange(event);
                      setGallonsRequested(event.target.value);
                    }}
                    value={values.gallonsRequested}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    label="Delivery Date"
                    type="date"
                    fullWidth
                    variant="outlined"
                    onChange={(event) => {
                      setDeliveryDate(event.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={deliveryDate}
                  />
                </Grid>
              </Grid>
              <Box p={1} />

              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    disabled={true}
                    label="Suggested Price/Gallon"
                    fullWidth
                    variant="outlined"
                    onChange={(event) => {
                      handleChange(event);
                      setPrice(event.target.value);
                    }}
                    value={values.price}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    label="Amount Due"
                    fullWidth
                    disabled={true}
                    variant="outlined"
                    onChange={(event) => {
                      handleChange(event);

                      setAmountDue(event.target.value);
                    }}
                    value={values.totalAmountDue}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    label="Delivery Address"
                    fullWidth
                    disabled={true}
                    variant="outlined"
                    onChange={(event) => {
                      setDeliveryAddress(event.target.value);
                    }}
                    value={deliveryAddress}
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

export default FQFORM;
