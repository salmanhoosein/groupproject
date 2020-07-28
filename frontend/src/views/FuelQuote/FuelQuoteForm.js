// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { toast } from "react-toastify";

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
} from "@material-ui/core";

toast.configure({
  autoClose: 2000,
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

function FQFORM(props) {
  const classes = useStyles();
  const [gallonsRequested, setGallonsRequested] = React.useState();
  const [deliveryAddress, setDeliveryAddress] = React.useState();
  const [deliveryDate, setDeliveryDate] = React.useState();
  const [price, setPrice] = React.useState();
  const [amountDue, setAmountDue] = React.useState();

  const reduxAuth = useSelector((state) => state.auth);

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
        if (res.data.success) {
          setDeliveryAddress(res.data.profile.addressOne);
        }
        if (res.data.error) {
          toast.error(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, [reduxAuth.user.token, reduxAuth.user.userId, reduxAuth.user.email]);

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
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Suggested Price/Gallon"
                    fullWidth
                    variant="outlined"
                    onChange={(event) => {
                      handleChange(event);
                      setPrice(event.target.value);
                    }}
                    value={price}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event) => {
                      handleChange(event);
                      setAmountDue(event.target.value);
                    }}
                    value={amountDue}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event) => {
                      setDeliveryAddress(event.target.value);
                    }}
                    value={deliveryAddress}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container justify="space-evenly">
                <Grid item>
                  <Button
                    color="secondary"
                    disabled={
                      !gallonsRequested ||
                      !deliveryAddress ||
                      deliveryDate == null
                    }
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
                        url: "http://localhost:8080/pricing/get",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + token,
                        },
                        data: {
                          gallonsRequested: gallonsRequested,
                          deliveryAddress: deliveryAddress,
                          deliveryDate: deliveryDate,
                          email: email,
                          userId: userId,
                        },
                      })
                        .then((res) => {
                          if (res.data.success) {
                            console.log(res.data.price);
                            setPrice(res.data.price);
                            setAmountDue(res.data.amountDue);
                            setGallonsRequested(res.data.gallonsRequested);
                            setDeliveryAddress(res.data.deliveryAddress);
                            setDeliveryDate(res.data.deliveryDate);
                          }
                          if (res.data.error) {
                            toast.error(res.data.error);
                          }
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Get Quote
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    disabled={
                      !gallonsRequested ||
                      !deliveryAddress ||
                      !deliveryDate ||
                      !price ||
                      !amountDue
                    }
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      console.log(typeof price);
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
                        url: "http://localhost:8080/fuelform/add",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + token,
                        },
                        data: {
                          gallonsRequested: gallonsRequested,
                          deliveryAddress: deliveryAddress,
                          deliveryDate: deliveryDate,
                          price: price,
                          amountDue: amountDue,
                          email: email,
                          userId: userId,
                        },
                      })
                        .then((res) => {
                          if (res.data.success) {
                            toast.success("Form Saved!");
                            setPrice("");
                            setAmountDue("");
                            values.gallonsRequested = "";
                            setGallonsRequested("");
                            setDeliveryDate("");
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

export default FQFORM;
