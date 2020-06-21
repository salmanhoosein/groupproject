import React from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Formik } from "formik";
import { useHistory } from "react-router";

import {
  Box,
  Button,
  TextField,
  FormHelperText,
  makeStyles,
  Link,
  setRef,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

function RegisterForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState(" ");

  return (
    <Formik
      initialValues={{
        email: null,
        password: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .nullable()
          .required("Email is required"),
        password: Yup.string()
          .max(255)
          .nullable() 
          .required("Password is required"),
      })}
    >
      {({ errors, handleBlur, handleChange, touched, values }) => (
        <>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={(event) => {
              handleChange(event);
              setEmail(event.target.value);
            }}
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
            onChange={(event) => {
              handleChange(event);
              setPassword(event.target.value);
            }}
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
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Formik>
  );
}

export default RegisterForm;
