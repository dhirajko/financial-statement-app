import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBTable, MDBTableBody } from "mdbreact";
import "../../App.css";
import history from "../../utils/history";

export default class ProfitLoss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOpen: false,
      changePadding: true
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentChangePadding = window.innerWidth < 992;
    if (currentChangePadding !== this.state.changePadding) {
      this.setState({ changePadding: currentChangePadding });
    }
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    const {
      creditTotal,
      debitTotal,
      expenses,
      incomes,
      status,
      amount
    } = this.props.data;

    const { changePadding } = this.state;
    return (
      <div id="apppage">
        <div className="dash-page">
          {this.props.tab === "2" ? (
            <MDBContainer id="page-wrap" className="text-center">
              <h3 className="font-weight-bold mt-3"> Profit Loss Account</h3>{" "}
              <MDBRow className="mt-2 d-flex justify-content-around">
                <MDBCol sm="12" lg="6" className="p-4">
                  <span className="statement-heading font-weight-bold">
                    Expenses
                  </span>
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      {expenses.map((account, index) => (
                        <tr key={index}>
                          <td className="float-left">
                            <span
                              className="text-primary pointer"
                              onClick={() =>
                                history.push("/accounts/" + account.id)
                              }
                            >
                              {" "}
                              {account.accountName.toUpperCase()}
                            </span>
                          </td>
                          <td className="float-right">
                            {account.closingBalance}
                          </td>
                        </tr>
                      ))}
                      {status === "PROFIT" ? (
                        <tr>
                          <td className="float-left">PROFIT</td>
                          <td className="float-right">{amount}</td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>
                <MDBCol
                  sm="12"
                  lg="6"
                  className={
                    changePadding ? "p-4 m-2 statement-heading" : "d-none "
                  }
                >
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      <tr>
                        <td className="float-left">
                          <span className="statement-heading font-weight-bold">
                            TOTAL
                          </span>
                        </td>
                        <td className="float-right">
                          {" "}
                          <span className="statement-heading font-weight-bold">
                            {debitTotal > creditTotal
                              ? debitTotal
                              : creditTotal}
                          </span>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  <hr />
                </MDBCol>

                <MDBCol sm="12" lg="6" className="p-4">
                  <span className="statement-heading font-weight-bold">
                    Incomes
                  </span>
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      {incomes.length > 0
                        ? incomes.map((account, index) => (
                            <tr key={index}>
                              <td className="float-left">
                                <span
                                  className="text-primary pointer"
                                  onClick={() =>
                                    history.push("/accounts/" + account.id)
                                  }
                                >
                                  {" "}
                                  {account.accountName.toUpperCase()}
                                </span>
                              </td>
                              <td className="float-right">
                                {account.closingBalance}
                              </td>
                            </tr>
                          ))
                        : ""}
                      {status === "LOSS" ? (
                        <tr>
                          <td className="float-left"> LOSS</td>
                          <td className="float-right">{amount * -1}</td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>

                <MDBCol
                  sm="12"
                  lg="6"
                  className={
                    changePadding ? "p-4 m-2 statement-heading" : "d-none "
                  }
                >
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      <tr>
                        <td className="float-left">
                          <span className="statement-heading font-weight-bold">
                            TOTAL
                          </span>
                        </td>
                        <td className="float-right">
                          <span className="statement-heading font-weight-bold">
                            {debitTotal > creditTotal
                              ? debitTotal
                              : creditTotal}
                          </span>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  <hr />
                </MDBCol>
              </MDBRow>
              <MDBRow
                className={
                  changePadding ? "d-none" : " text-center statement-heading"
                }
              >
                <MDBCol sm="12" lg="6" className="px-4">
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      <tr>
                        <td className="float-left">
                          <span className="statement-heading font-weight-bold">
                            TOTAL
                          </span>
                        </td>
                        <td className="float-right">
                          <span className="statement-heading font-weight-bold">
                            {debitTotal > creditTotal
                              ? debitTotal
                              : creditTotal}
                          </span>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  <hr />
                </MDBCol>
                <MDBCol sm="12" lg="6" className="px-4">
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      <tr>
                        <td className="float-left">
                          <span className="statement-heading font-weight-bold">
                            TOTAL
                          </span>
                        </td>
                        <td className="float-right">
                          <span className="statement-heading font-weight-bold">
                            {debitTotal > creditTotal
                              ? debitTotal
                              : creditTotal}
                          </span>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  <hr />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
