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
import history from "../../utils/history";
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
                            <td className="pointer text-primary">
                              <span
                                onClick={() => {
                                  history.push(
                                    "/accounts/" + account.debitAccount._id
                                  );
                                }}
                              >
                                {" "}
                                {account.debitAccount.accountName + " a/c"}
                              </span>
                            </td>
                            <td className="pointer text-primary">
                              <span
                                onClick={() => {
                                  history.push(
                                    "/accounts/" + account.creditAccount._id
                                  );
                                }}
                              >
                                {" "}
                                {account.creditAccount.accountName + " a/c"}
                              </span>
                            </td>
                            <td>€ {account.amount}</td>
                            <td className="text-left">{account.descreption}</td>
                          </tr>
                        );
                      })}
                    </MDBTableBody>
                  </MDBTable>
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
