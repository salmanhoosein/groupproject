// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { useHistory } from "react-router-dom";

import {
  TextField,
  Box,
  Button,
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

  const [fullName, setFullName] = React.useState();
  const [addressOne, setAddressOne] = React.useState();
  const [addressTwo, setAddressTwo] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [zip, setZip] = React.useState();

  return (
    <Card
      style={{
        backgroundColor: "lightgrey",
        border: "2px solid black",
      }}
    >
      <CardHeader className={classes.cardHeader} title={props.formTitle} />
      <Divider />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField
              label="Full Name"
              fullWidth
              variant="outlined"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={fullName}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField
              label="Address One"
              fullWidth
              variant="outlined"
              onChange={(event) => {
                setAddressOne(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={addressOne}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField
              label="Address Two(optional)"
              fullWidth
              variant="outlined"
              onChange={(event) => {
                setAddressTwo(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={addressTwo}
            />
          </Grid>
        </Grid>
        <Box p={1} />

        <Grid container spacing={1}>
          <Grid item xs>
            <TextField
              label="City"
              fullWidth
              variant="outlined"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={city}
            />
          </Grid>
          <Grid item xs>
            <FormControl variant="outlined" className={classes.formControl2}>
              <InputLabel shrink>State</InputLabel>
              <Select
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                }}
                displayEmpty
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                }}
                input={<OutlinedInput notched labelWidth="45" />}
              >
                {states.map((data, index) => (
                  <MenuItem value={data}>{data}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField
              label="Zip Code"
              fullWidth
              variant="outlined"
              onChange={(event) => {
                setZip(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={zip}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InfoForm;

/** 
 *  <Formik
      initialValues={{
        email: "default@project.io",
        password: "user",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string()
          .max(255)
          .required("Password is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // await dispatch(login(values.email, values.password));
          // onSubmitSuccess();
        } catch (error) {
          const message =
            (error.response && error.response.data.message) ||
            "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate className={classes.root} onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="textSecondary"
            >
              <Button
                color="secondary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create
              </Button>
            </Link>

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
 * 
 * 
 * 
 */
