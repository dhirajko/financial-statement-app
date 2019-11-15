import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
//import account from "../../mocks/account";
import Chart from "./chart";
import moment from "moment";
import "../../App.css";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOpen: false
    };
  }

  componentDidMount() {
    this.props.searchAccount(this.props.match.params.id);
  }

  chartDateData = account => {
    return account.closingBalanceHistory.map(data =>
      moment(data.date).format("LL")
    );
  };
  chartBalanceData = account => {
    return account.closingBalanceHistory.map(data => data.balance);
  };

  render() {
    const { account } = this.props;
    let accountDetail = account.account;
    let transactions = account.transaction;

    return (
      <div id="apppage">
        {account && accountDetail && transactions && (
          <div className="dash-page">
            <MDBContainer id="page-wrap">
              <div
                className="text-center text-uppercase font-weight-bold font-effect-shadow-multiple p-3"
                style={{ fontSize: "1.5em" }}
              >
                <h2>{accountDetail.accountName} Account</h2>
              </div>

              <MDBRow className="container mt-5">
                <MDBCol sm="12" lg="6" className="my-2">
                  <MDBCard>
                    <MDBTable borderless className="px-3">
                      <MDBTableBody className="td-head">
                        <tr>
                          <td className="td-head">Closing Balance</td>
                          <td >:</td>
                          <td>€ {accountDetail.closingBalance}</td>
                        </tr>
                        <tr>
                          <td className="td-head">Tag</td>
                          <td >:</td>
                          <td>{accountDetail.tag}</td>
                        </tr>
                        <tr>
                          <td className="td-head">Inventory Affected</td>
                          <td >:</td>
                          <td className="text-capitalize">
                            {accountDetail.inventoryAffects.toString()}
                          </td>
                        </tr>
                        <tr>
                          <td className="td-head">Description</td>
                          <td >:</td>
                          <td className="text-capitalize">
                            {accountDetail.descreption}
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCard>
                </MDBCol>
                <MDBCol sm="12" lg="6">
                  {
                    <Chart
                      date={this.chartDateData(accountDetail)}
                      balance={this.chartBalanceData(accountDetail)}
                    />
                  }
                </MDBCol>
              </MDBRow>
              <div className="mt-5 text-center">
                <h3>Related Transactions</h3>
              </div>
              <MDBCard className="mt-3 mb-5">
                <MDBTable hover className="px-3">
                  <MDBTableHead>
                    <tr style={{ backgroundColor: "#d6c28b" }}>
                      <th>Date</th>
                      <th>Affected Account</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {transactions.map((account, index) => {
                      return (
                        <tr
                          onClick={() => {
                            account.debitAccount._id ===
                            this.props.match.params.id
                              ? (document.location =
                                  "/accounts/" + account.creditAccount._id)
                              : (document.location =
                                  "/accounts/" + account.debitAccount._id);
                          }}
                          className="pointer"
                          key={index}
                        >
                          <td> {moment(account.date).format("Do MMM YY")}</td>
                          <td>
                            {account.debitAccount._id ===
                            this.props.match.params.id ? (
                              <a
                                href={"/accounts/" + account.creditAccount._id}
                              >
                                {account.creditAccount.accountName}
                              </a>
                            ) : (
                              <a href={"/accounts/" + account.debitAccount._id}>
                                {account.debitAccount.accountName}
                              </a>
                            )}
                          </td>
                          <td>{account.descreption}</td>
                          <td> {"€ " + account.amount}</td>
                        </tr>
                      );
                    })}
                  </MDBTableBody>
                </MDBTable>
              </MDBCard>
            </MDBContainer>
          </div>
        )}
      </div>
    );
  }
}
