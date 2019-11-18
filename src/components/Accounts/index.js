import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
import reload from "../../assets/reload.png";
import Modal from "./Modal";
import history from "../../utils/history";
import "../../App.css";

export default class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOpen: false
    };
  }

  render() {
    const accounts = this.props.accounts;
    return (
      <div id="apppage" className="mb-3">
        <div className="dash-page">
          <MDBContainer id="page-wrap">
            <div className="text-center">
              <span className="list-page-heading">Accounts</span>
            </div>

            {Object.keys(accounts).length === 0 ? (
              this.props.fetchAccounts()
            ) : (
              <div>
                <MDBCard className="p-3 text-centerm-3">
                  <MDBTable hover>
                    <MDBTableHead>
                      <tr>
                        <th>S.No.</th>
                        <th>Account Name</th>
                        <th>Tags</th>
                        <th>Balance</th>
                        <th></th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {accounts.map((account, index) => {
                        return (
                          <tr
                            className="pointer"
                            onClick={() =>
                              history.push(`/accounts/${account._id}`)
                            }
                            key={account._id}
                          >
                            <td> {index + 1}</td>
                            <td> {account.accountName}</td>
                            <td> {account.tag}</td>
                            <td>{"€ " + account.closingBalance}</td>
                            <td>
                              <span
                                className=" pointer text-primary fas fa-external-link-alt"
                                onClick={() =>
                                  history.push(`/accounts/${account._id}`)
                                }
                              ></span>
                            </td>
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
            <Modal createAccount={this.props.createAccount}></Modal>
          </span>
        </div>
      </div>
    );
  }
}
