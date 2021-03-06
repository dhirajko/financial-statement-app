import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from "mdbreact";
import CapitalForm from "./capitaForm";
import Expenses from "./expensesForm";
import Income from "./incomeForm";
import FixedPurchaseAssets from "./fixedAssetsPurchase";
import FixedPurchaseSales from "./fixedAssetsSales";
import AddLiability from "./liabilityAddition";
import LiabilitySettelment from "./liabilitySettelment";

export default class EasyStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  componentDidMount() {
    this.props.searchAccounts();
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  updateAcccountList = () => {
    this.props.searchAccounts();
  };

  render() {
    const { accounts } = this.props;

    return (
      <div id="apppage">
        <div className="dash-page">
          <MDBContainer id="page-wrap">
            <MDBCard className="w-100 mb-1">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      Introduce Balance to business
                    </MDBCardTitle>

                    <MDBCollapse
                      id="1"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <CapitalForm close={this.toggleCollapse} />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "1" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("1")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="w-100 mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      Add expenses
                    </MDBCardTitle>

                    <MDBCollapse
                      id="2"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <Expenses
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "2" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("2")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="w-100  mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      Add Income
                    </MDBCardTitle>

                    <MDBCollapse
                      id="3"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <Income
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "3" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("3")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="w-100 mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      Purchase Fixed Assets
                    </MDBCardTitle>

                    <MDBCollapse
                      id="4"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <FixedPurchaseAssets
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "4" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("4")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="w-100 mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      Sale Fixed Assets
                    </MDBCardTitle>

                    <MDBCollapse
                      id="5"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <FixedPurchaseSales
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "5" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("5")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="w-100 mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      TAKE LOAN or Liability
                    </MDBCardTitle>

                    <MDBCollapse
                      id="6"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <AddLiability
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "6" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("6")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="w-100 mb-1">
              <MDBCardBody className="">
                <MDBRow>
                  <MDBCol md="10">
                    <MDBCardTitle
                      className="text-center text-uppercase align-bottom"
                      style={{ fontSize: "15px" }}
                    >
                      SETTEL LOAN OR LIABILITY
                    </MDBCardTitle>

                    <MDBCollapse
                      id="7"
                      isOpen={this.state.collapseID}
                      className="px-4"
                    >
                      <LiabilitySettelment
                        accounts={accounts}
                        searchAccounts={this.props.searchAccounts}
                        createAccount={this.props.createAccount}
                        createTransaction={this.props.createTransaction}
                        updateList={this.updateAcccountList}
                      />
                    </MDBCollapse>
                  </MDBCol>
                  <MDBCol className=" text-center">
                    {this.state.collapseID === "7" ? (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("")}
                        style={{
                          fontSize: 30,
                          position: "absolute",
                          bottom: 3
                        }}
                        className="fas fa-chevron-up "
                      ></i>
                    ) : (
                      <i
                        color="primary"
                        onClick={this.toggleCollapse("7")}
                        className="fas fa-chevron-down "
                        style={{ fontSize: 30 }}
                      ></i>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
