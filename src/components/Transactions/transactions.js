import React, { Component } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBBtn
} from "mdbreact";
import Modal from "./transactionModal";

import moment from "moment";
import reload from "../../assets/reload.png";
import "../../App.css";

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOpen: false
    };
  }

  render() {
    const { accounts, transactions } = this.props;
    return (
      <div id="apppage">
        <div className="dash-page">
          <MDBContainer className="text-center" id="page-wrap">
            <div className="text-center">
              <span className="list-page-heading">Transactions</span>
            </div>
            {Object.keys(transactions).length === 0 ? (
              this.props.searchTransactions()
            ) : (
              <div>
                {console.log(transactions)}
                <MDBCard className="p-3 text-center  m-3">
                  <MDBTable hover>
                    <MDBTableHead>
                      <tr>
                        <th>Date</th>
                        <th>Debit Account</th>
                        <th>Credit Account</th>
                        <th>Amount</th>
                        <th>Details</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {transactions.map(account => {
                        return (
                          <tr key={account._id}>
                            <td>{moment(account.date).format("Do MMM  YY")}</td>
                            <td>
                              <a
                                className="text-primary"
                                href={"/accounts/" + account.debitAccount._id}
                              >
                                {" "}
                                {account.debitAccount.accountName + " a/c"}
                              </a>
                            </td>
                            <td>
                              <a
                                className="text-primary"
                                href={"/accounts/" + account.creditAccount._id}
                              >
                                {" "}
                                {account.creditAccount.accountName + " a/c"}
                              </a>
                            </td>
                            <td>€ {account.amount}</td>
                            <td className="text-left">{account.descreption}</td>
                          </tr>
                        );
                      })}
                    </MDBTableBody>
                  </MDBTable>
                  {/* <MDBRow className="w-100 align-items-center ">
                    <MDBCol md="2" sm="2">
                      <span
                        className="font-effect-shadow-multiple"
                        style={{ fontSize: "15px" }}
                      >
                        Date : {moment(account.date).format("Do MMM  YY")}
                      </span>
                    </MDBCol>
                    <MDBCol md="6" sm="6">
                      <MDBRow>
                        <MDBCol xs="12" md="12" className="">
                          <span className="account-balance-inventory m-4 ">
                            Debit A/c:{" "}
                          </span>
                          <span
                            className="text-uppercase font-weight-bolder font-effect-shadow-multiple"
                            style={{ fontSize: "1.5em" }}
                          >
                            {account.debitAccount.accountName}
                          </span>
                        </MDBCol>
                        <MDBCol xs="12" md="12">
                          <span className="account-balance-inventory m-4 ">
                            Credit A/c:{" "}
                          </span>
                          <span
                            className="text-uppercase font-weight-bolder font-effect-shadow-multiple"
                            style={{ fontSize: "1.5em" }}
                          >
                            {account.creditAccount.accountName}
                          </span>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="2" sm="2" className="account-balance">
                      € {account.amount}
                    </MDBCol>
                  </MDBRow> */}
                </MDBCard>
              </div>
            )}
          </MDBContainer>
          <span style={{ position: "fixed", right: 50, bottom: 50 }}>
            {accounts && Array.isArray(accounts) && accounts.length === 0 ? (
              <Modal
                accounts={this.props.accounts}
                createTransaction={this.props.createTransaction}
              ></Modal>
            ) : (
              this.props.searchAccounts()
            )}
          </span>
        </div>
      </div>
    );
  }
}
