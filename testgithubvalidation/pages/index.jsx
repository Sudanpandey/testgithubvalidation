import React from "react";

import { Typography, Box, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as Yup from "yup";
import { Formik } from "formik";

const formValidationSchema = Yup.object().shape({
  fname: Yup.string()

    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("First Name is required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Last has to  be longer than 2 characters!")
    .required("Last name is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Email  is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Valid password  is required"),
  cpassword: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Valid password  is required"),
});

const styles = makeStyles({
  wrapper: {
    backgroundColor: "#E9ECEF",
    height: "100vh",
    paddingTop: "3rem",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputWrapper: {
    borderRadius: "1px solid  #000000",
    marginBottom: "1rem",
  },
  inputStyle: {
    width: "300px",
    padding: "5px",
    border: "1px solid #cccccc",
    backgroundColor: "#ffffff",
  },
});

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cpassword: "",
};

const index = () => {
  const { wrapper, inputWrapper, inputStyle } = styles();
  return (
    <Box className={wrapper}>
      <Typography style={{ fontSize: "25px", marginBottom: "35px" }}>
        React Form Validation{" "}
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
        validationSchema={formValidationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => {
          console.log(errors);
          return (
            <Box>
              <Box className={inputWrapper}>
                <Typography style={{}}> First Name</Typography>
                <Box className={inputStyle}>
                  <Input
                    name="fname"
                    type="text"
                    value={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disableUnderline={true}
                    placeholder="Enter your first name "
                  />
                </Box>
                <Typography style={{ fontSize: 12, color: "red" }}>
                  {touched.fname && errors.fname}
                </Typography>
              </Box>

              <Box className={inputWrapper}>
                <Typography> Last Name</Typography>
                <Box className={inputStyle}>
                  <Input
                    name="lname"
                    type="text"
                    value={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disableUnderline={true}
                    placeholder="Enter your Last  name "
                  />
                </Box>
                <Typography style={{ fontSize: 12, color: "red" }}>
                  {touched.lname && errors.lname}
                </Typography>
              </Box>

              <Box className={inputWrapper}>
                <Typography> Email</Typography>
                <Box className={inputStyle}>
                  <Input
                    style={{ backgroundColor: "#ffffff" }}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disableUnderline={true}
                    placeholder="Enter your Email "
                  />
                </Box>
                <Typography style={{ fontSize: 12, color: "red" }}>
                  {touched.email && errors.email}
                </Typography>
              </Box>

              <Box className={inputWrapper}>
                <Typography> Password</Typography>
                <Box className={inputStyle}>
                  <Input
                    style={{ backgroundColor: "#ffffff" }}
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disableUnderline={true}
                    placeholder=" "
                  />
                </Box>
                <Typography style={{ fontSize: 12, color: "red" }}>
                  {touched.password && errors.password}
                </Typography>
              </Box>

              <Box className={inputWrapper}>
                <Typography>Confirm Password </Typography>
                <Box className={inputStyle}>
                  <Input
                    style={{ backgroundColor: "#ffffff" }}
                    name="cpassword"
                    type="password"
                    value={values.cpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disableUnderline={true}
                    placeholder=" "
                  />
                </Box>
                <Typography style={{ fontSize: 12, color: "red" }}>
                  {touched.cpassword && errors.cpassword}
                </Typography>
              </Box>

              <style jsx global>{`
                body {
                  margin: 0px;
                }
              `}</style>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    marginTop: "50px",
                    backgroundColor: "#347AB7",
                    color: "white",
                    width: "9 %",
                  }}
                  variant="contained"
                >
                  Register
                </Button>
                <Button
                  style={{
                    marginTop: "50px",
                    backgroundColor: "#347AB7",
                    color: "white",
                    width: "8%",
                  }}
                  variant="contained"
                >
                  Reset
                </Button>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};
export default index;
