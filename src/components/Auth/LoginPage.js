import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Alert } from "react-bootstrap";
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { AuthConsumer, withContext } from "./../Layout/Header/AuthContext";
import { isEmpty } from "../../utils/commonUtil";
import { Paper, Button } from "@material-ui/core";
import { getLocalStorage } from "../../utils/storageUtil";
import history from "../../utils/history";

class LoginPage extends Component {
  state = {
    errorMessage: ""
  };

  render() {
    const errorMessage = this.state.errorMessage;
    return (
      <div className={"w-100 d-flex justify-content-center mt-5 height-100vh"}>
        {!getLocalStorage("sample-user-id") ? (
          <MDBContainer>
            <MDBRow>
              <MDBCol md={"3"} />
              <MDBCol md="6">
                <Paper style={{ padding: 20 }}>
                  <AuthConsumer>
                    {({ loginError }) => (
                      <MDBContainer className="pt-5 d-flex justify-content-center align-items-center">
                        <div className="col-12">
                          <h3 className="text-center mb-5">Sign In</h3>

                          <Formik
                            initialValues={{ email: "", password: "" }}
                            validate={values => {
                              let errors = {};
                              if (!values.email) {
                                errors.email = "Required";
                              } else if (!values.password) {
                                errors.password = "Required";
                              } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                  values.email
                                )
                              ) {
                                errors.email = "Invalid email address";
                              }
                              return errors;
                            }}
                            onSubmit={values => {
                              this.props
                                .login(values)
                                .then(response => {
                                  this.props.history.push("/dashboard");
                                })
                                .catch(error => {
                                  this.setState({ errorMessage: error });
                                });
                            }}
                          >
                            {({ isSubmitting }) => (
                              <div>
                                <Form>
                                  {!isEmpty(errorMessage) && (
                                    <Alert variant="danger">
                                      {errorMessage && (
                                        <div className="text-center ">
                                          <h5>
                                            Login Failed. Please Try Again
                                          </h5>
                                        </div>
                                      )}
                                    </Alert>
                                  )}
                                  <div className="md-form form-group">
                                    <i
                                      data-test="fa"
                                      className="fa fa-envelope prefix"
                                    ></i>
                                    <Field
                                      type="email"
                                      name="email"
                                      className="form-control"
                                      placeholder="Type your email"
                                      id="email"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      style={{ fontSize: "12px", color: "red" }}
                                    />
                                  </div>
                                  <div className="md-form form-group">
                                    <i
                                      data-test="fa"
                                      className="fa fa-lock prefix"
                                    ></i>
                                    <Field
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      placeholder="Type your password"
                                    />
                                    <ErrorMessage
                                      name="password"
                                      component="div"
                                      style={{ fontSize: "12px", color: "red" }}
                                    />
                                  </div>
                                  <div className="text-center">
                                    <MDBBtn type="submit">Login</MDBBtn>
                                  </div>
                                </Form>
                              </div>
                            )}
                          </Formik>
                        </div>
                      </MDBContainer>
                    )}
                  </AuthConsumer>
                </Paper>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
         history.push("/dashboard")
        )}
      </div>
    );
  }
}

export default withContext(LoginPage);
