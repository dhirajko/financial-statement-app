import React, { Component } from "react";
import history from "../../utils/history";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikSelectField } from "formik-material-fields";
import { list } from "../../constants/Tags";
import {
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  TextField
} from "@material-ui/core";
import "../../App.css";

const validationSchema = Yup.object().shape({
  accountName: Yup.string().required(),
  tag: Yup.string().required(),
  alias: Yup.string(),
  inventoryAffects: Yup.string().required(),
  descreption: Yup.string()
});

class Modal extends Component {
  state = {
    modal: false,
    data: {
      accountName: "",
      tag: "",
      alias: "",
      inventoryAffects: "",
      descreption: ""
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleRadioChange = e => {
    this.setState({
      data: { ...this.state.data, inventoryAffects: e }
    });
  };

  handleCurrentChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.currentTarget.value }
    });
  };

  createOptions = type => {
    let inital = [{ label: "SELECT ACCOUNT TYPE", value: "" }];
    type.map(account =>
      inital.push({
        label: account.toUpperCase(),
        value: account
      })
    );
    return inital;
  };

  render() {
    return (
      <MDBContainer>
        <button onClick={this.toggle} className="btn-circle-lg">
          {" "}
          +
        </button>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Create account</MDBModalHeader>
          <MDBModalBody>
            {/* validationSchema={validationSchema}> */}
            <Formik
              initialValues={this.state}
              validationSchema={validationSchema}
              className="container"
            >
              {({ isValid }) => (
                <FormControl autoComplete="off" className="container">
                  <TextField
                    name="accountName"
                    label={"Account name"}
                    placeholder="Account name"
                    className="m-1"
                    onChange={e => this.handleChange(e)}
                    fullWidth
                  />
                  <TextField
                    name="alias"
                    label="Alias"
                    className="m-1"
                    onChange={e => this.handleChange(e)}
                    fullWidth
                  />

                  <FormikSelectField
                    name="tag"
                    label="Tag"
                    className="mt-3"
                    onChange={e => this.handleCurrentChange(e)}
                    options={this.createOptions(list)}
                    onClick={e => {
                      if (e.target.value === "") {
                        alert("ok");
                      }
                    }}
                    fullWidth
                    native
                  />

                  <RadioGroup
                    aria-label="position"
                    name="inventoryAffects"
                    className="mt-3"
                    label="Inventory Affected"
                    onChange={e => this.handleChange(e)}
                    row
                  >
                    <FormLabel component="legend">Inventory Affected</FormLabel>
                    <FormControlLabel
                      value="true"
                      control={<Radio color="primary" />}
                      label="Yes"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio color="primary" />}
                      label="No"
                      labelPlacement="start"
                    />
                  </RadioGroup>

                  <TextField
                    name="descreption"
                    label="Descreption"
                    placeholder="Account description"
                    onChange={e => this.handleChange(e)}
                    fullWidth
                  />
                  <MDBModalFooter>
                    <MDBBtn
                      color="secondary"
                      onClick={() => {
                        console.log(this.state);
                      }}
                    >
                      Close
                    </MDBBtn>
                    <MDBBtn
                      color="primary"
                      onClick={() => {
                        this.props.createAccount(this.state.data);
                        this.toggle();
                      }}
                      disabled={
                        this.state.data.accountName === "" ||
                        this.state.data.tag === "" ||
                        this.state.data.alias === "" ||
                        this.state.data.inventoryAffects === "" ||
                        this.state.data.descreption === ""
                          ? true
                          : false
                      }
                    >
                      Save changes
                    </MDBBtn>
                  </MDBModalFooter>
                </FormControl>
              )}
            </Formik>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
