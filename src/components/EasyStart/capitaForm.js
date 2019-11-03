import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { API_URL, JWT_TOKEN } from "../../constants/appConfig";
import { getLocalStorage } from "../../utils/storageUtil";
import axios from "axios";
import Toast from "../Common/Toast/Toast";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Input, FormControlLabel } from "@material-ui/core";
import history from "../../utils/history"
import "../../App.css";

const validationSchema = Yup.object().shape({
  accountName: Yup.string().required(),
  amount: Yup.number()
    .min(0)
    .required()
});

class CapitalForm extends Component {
  state = {
    debitTag: "",
    creditTag: "",
    debitAccountName: "",
    creditAccountName: "",
    amount: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <MDBContainer>
        <Formik validationSchema={validationSchema}>
          {({ isValid }) => (
            <Form autoComplete="off">
              <label className="text-primary">Received: </label>
              <RadioGroup aria-label="position" name="position" row>
                <FormControlLabel
                  value="cash"
                  control={<Radio color="primary" />}
                  label="Cash"
                  labelPlacement="start"
                  onChange={() =>
                    this.setState({
                      debitTag: "cash in hand",
                      debitAccountName: "Cash"
                    })
                  }
                />
                <FormControlLabel
                  value="bank"
                  control={<Radio color="primary" />}
                  label="Cash"
                  labelPlacement="start"
                  onChange={() =>
                    this.setState({
                      debitTag: "bank account",
                      debitAccountName: ""
                    })
                  }
                />
              </RadioGroup>

              {this.state.debitTag === "bank account" ? (
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Bank Name"
                  onChange={e => {
                    this.setState({
                      debitAccountName: e.target.value
                    });
                  }}
                />
              ) : (
                ""
              )}
              <label className="text-primary">Source of Income: </label>
              <RadioGroup aria-label="position" name="position" row>
                <FormControlLabel
                  value="capital"
                  control={<Radio color="primary" />}
                  label="Capital"
                  labelPlacement="start"
                  onChange={() =>
                    this.setState({
                      creditTag: "capital account",
                      creditAccountName: "Capital"
                    })
                  }
                />
                <FormControlLabel
                  value="loan"
                  control={<Radio color="primary" />}
                  label="Loan"
                  labelPlacement="start"
                  onChange={() =>
                    this.setState({
                      creditTag: "loan (liability)",
                      creditAccountName: "Loan"
                    })
                  }
                />
              </RadioGroup>

              <Input
                placeholder="Introduced amount"
                name="amount"
                label="amount"
                margin="normal"
                type="number"
                className="form-control"
                onChange={e => this.handleChange(e)}
              />

              <MDBBtn
                color="primary"
                disabled={
                  this.state.debitAccountName === "" ||
                  this.state.amount <= 0 ||
                  this.state.creditAccountName === "" ||
                  this.state.debitTag === "" ||
                  this.state.creditTag === ""
                    ? true
                    : false
                }
                onClick={() => {
                  axios
                    .post(
                      API_URL + "api/transactions/directTransaction",
                      {
                        amount: this.state.amount,
                        creditAccountName: this.state.creditAccountName,
                        creditTag: this.state.creditTag,
                        debitAccountName: this.state.debitAccountName,
                        debitTag: this.state.debitTag,
                        debitInventoryAffects: false,
                        creditInventoryAffects: false,
                        descreption: `Introducing ${this.state.debitAccountName} as ${this.state.creditAccountName}`
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                          "x-auth-token": getLocalStorage(JWT_TOKEN)

                        }
                      }
                    )
                    .then(res => {
                      Toast("success", "Add Balance Success");
                      history.push("/dashboard")
                    });
                }}
              >
                Save changes
              </MDBBtn>
            </Form>
          )}
        </Formik>
      </MDBContainer>
    );
  }
}

export default CapitalForm;
