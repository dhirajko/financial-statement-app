import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { AuthConsumer } from "./../Layout/Header/AuthContext";
import { Formik } from "formik";
import Toast from "../Common/Toast/Toast";
import { Paper } from "@material-ui/core";

class RegisterPage extends Component {
  state = {
    errorMessage: ""
  };
  render() {
    return (
      <div className={"w-100 d-flex justify-content-center mt-5 height-100vh"}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md={"3"} />
            <MDBCol md="6">
              <Paper style={{ padding: 20 }}>
                <AuthConsumer>
                  {({ loginError, register }) => (
                    <div>
                      <p className="h4 text-center mb-4">Sign Up</p>

                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
                          name: ""
                        }}
                        validate={values => {
                          let errors = {};
                          if (!values.email) {
                            errors.email = "Required";
                          }
                          if (!values.password) {
                            errors.email = "Required";
                          }
                          if (!values.name) {
                            errors.name = "Required";
                          }
                          return errors;
                        }}
                        onSubmit={values => {
                          register({
                            email: values.email,
                            password: values.password,
                            name: values.name
                          })
                            .then(response => {
                              Toast("success", "signup successful");
                              this.props.history.push("/dashboard");
                            })
                            .catch(error => {
                              Toast("warning", error.response.data.data);
                            });
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                          /* and other goodies */
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <label className="grey-text">Your email</label>
                            <input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className={"form-control"}
                            />
                            {errors.email && touched.email && errors.email ? (
                              <div>
                                <span
                                  className="text-danger"
                                  style={{ fontSize: "12px" }}
                                >
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </span>
                                <br></br>
                              </div>
                            ) : (
                              ""
                            )}
                            <label className="grey-text">Your password</label>
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              className={"form-control"}
                            />
                            <label className="grey-text">Your Name</label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className={"form-control"}
                            />
                            {errors.name && touched.name && errors.name}
                            <div className="text-center mt-4">
                              <MDBBtn color="indigo" type="submit">
                                Sign Up
                              </MDBBtn>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  )}
                </AuthConsumer>
              </Paper>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default RegisterPage;
