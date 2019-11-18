import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBTable, MDBTableBody } from "mdbreact";
import "../../App.css";
import history from "../../utils/history";

export default class BalanceSheet extends Component {
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
      capital,
      capitalTotal,
      liability,
      liabilityTotal,
      pl,
      currentAssets,
      currentAssetsTotal,
      fixedAssets,
      fixedAssetsTotal
    } = this.props.data;

    const { changePadding } = this.state;
    return (
      <div id="apppage">
        <div className="dash-page">
          {this.props.tab === "3" ? (
            <MDBContainer id="page-wrap" className="text-center">
              <h3 className="font-weight-bold mt-3">Balance Sheet</h3>{" "}
              <MDBRow className="mt-2 d-flex justify-content-around">
                <MDBCol sm="12" lg="6" className="p-4">
                  <span className="statement-heading font-weight-bold">
                    Capital and Liability
                  </span>
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      {capital.map((account, index) => (
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
                      <tr>
                        <td className="float-left">
                          {" "}
                          {pl.status.toUpperCase()}
                        </td>
                        <td className="float-right">{pl.amount}</td>
                      </tr>
                      {liability.map((account, index) => (
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
                            {capitalTotal + liabilityTotal + pl.amount >
                            currentAssetsTotal + fixedAssetsTotal
                              ? capitalTotal + liabilityTotal + pl.amount
                              : currentAssetsTotal + fixedAssetsTotal}
                          </span>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  <hr />
                </MDBCol>

                <MDBCol sm="12" lg="6" className="p-4">
                  <span className="statement-heading font-weight-bold">
                    Assets
                  </span>
                  <hr />
                  <MDBTable borderless>
                    <MDBTableBody>
                      {fixedAssets.map((account, index) => (
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

                      {currentAssets.map((account, index) => (
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
                            {capitalTotal + liabilityTotal + pl.amount >
                            currentAssetsTotal + fixedAssetsTotal
                              ? capitalTotal + liabilityTotal + pl.amount
                              : currentAssetsTotal + fixedAssetsTotal}
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
                            {capitalTotal + liabilityTotal + pl.amount >
                            currentAssetsTotal + fixedAssetsTotal
                              ? capitalTotal + liabilityTotal + pl.amount
                              : currentAssetsTotal + fixedAssetsTotal}
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
                            {capitalTotal + liabilityTotal + pl.amount >
                            currentAssetsTotal + fixedAssetsTotal
                              ? capitalTotal + liabilityTotal + pl.amount
                              : currentAssetsTotal + fixedAssetsTotal}
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
