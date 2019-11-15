import React from "react";
import { withRouter } from "react-router-dom";
import history from "../../../utils/history";
import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }
  render() {
    const sidebarOpen = this.props.sidebar;

    return (
      <nav className={`sidenav ${sidebarOpen ? "active" : ""}`}>
        <ul>
          <li onClick={this.props.onSetSidebarOpen}>
            <span>
              {sidebarOpen ? (
                <i className="fa fa-times pl-1"></i>
              ) : (
                <i className="fa fa-bars pl-1"></i>
              )}
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/dashboard");
              }}
              className={
                this.props.location.pathname === "/dashboard"
                  ? "sidebar-link"
                  : "sidebar-link-inactive"
              }
            >
              <i className="fa fa-home"></i>{" "}
              <b style={!sidebarOpen ? { display: "none" } : {}}>
                Dashboard
              </b>
            </span>
          </li>

          <li>
            <span
              onClick={() => {
                this.props.searchAccounts();
                history.push("/accounts");
              }}
              className={
                this.props.location.pathname === "/accounts"
                  ? "sidebar-link"
                  : "sidebar-link-inactive"
              }
            >
              <i className="fas fa-chart-bar"></i>{" "}
              <b style={!sidebarOpen ? { display: "none" } : {}}>
                Accounts
              </b>
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                this.props.searchTransactions();
                history.push("/transactions");
              }}
              className={
                this.props.location.pathname === "/transactions"
                  ? "sidebar-link"
                  : "sidebar-link-inactive"
              }
            >
              <i className="fas fa-hand-holding-usd"></i>{" "}
              <b style={!sidebarOpen ? { display: "none" } : {}}>
                transactions
              </b>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
