import { useState } from "react";
import logo from "./assets/logo.svg";

import dashboardIcon from "./assets/sidebar/sidebar_dashboard_icon.svg";
import messageIcon from "./assets/sidebar/sidebar_message_icon.svg";
import transactionIcon from "./assets/sidebar/sidebar_transaction_icon.svg";
import exchangeIcon from "./assets/sidebar/sidebar_exchange_icon.svg";
import withdrawIcon from "./assets/sidebar/sidebar_withdraw_icon.svg";
import depositIcon from "./assets/sidebar/sidebar_deposit_icon.svg";
import securityIcon from "./assets/sidebar/sidebar_security_icon.svg";

import userProfileImage from "./assets/dashboard/top-container/johnCamp_img.svg";

import trasactionSummaryDayOne from "./assets/dashboard/transaction-summary/transaction_section_mon_img.svg";



function SideBarLinks() {
  const links = [
    {"Dashboard": dashboardIcon},
    {"Message":messageIcon},
    {"Transactions": transactionIcon},
    {"Exchange":exchangeIcon},
    {"Withdraw": withdrawIcon},
    {"Deposit": depositIcon},
    {"Security": securityIcon}
  ];



  let navLinks = links.map((link, index) => {
    return (
      <div key={index} className="sidebar-link-inner">
        <a><img className="padding-right-16px" src={Object.values(link)}/>{Object.keys(link)}</a>
      </div>
    );
  });
  return (
    <>
      <nav className="sidebar-links">{navLinks}</nav>
    </>
  );
}

function SideBar() {
  return (
    <>
      <aside className="side-bar">
        <div className="sidebar-title">
          <img src={logo} loading="lazy" />
          <h2>Connect</h2>
        </div>
        <SideBarLinks />
      </aside>
    </>
  );
}

function TopContainer() {
  return (
    <div className="top-container">
      <div className="search-input">
        <input type="search" placeholder="search" />
      </div>
      <div className="date-input">
          <input type="date" />
        </div>
        <div className="current-user">

      <p>
        {/* TODO: IMPORT ICON  */}
        John Camp
        <img src={userProfileImage}/>
      </p>

        </div>
    </div>
  );
}

function PriceSection() {
  return <></>;
}

function FirstContainer() {}

function SecondContainer() {
  const trasactionSummariesByDays = [
    {"Mon": trasactionSummaryDayOne},
    {"Tues": trasactionSummaryDayOne},
    {"Wed": trasactionSummaryDayOne},
    {"Thu": trasactionSummaryDayOne},
    {"Fri": trasactionSummaryDayOne},
    {"Sun": trasactionSummaryDayOne},
  ];

  let transactionSummaries = trasactionSummariesByDays.map((summary, index) => {
      return (
        <div key={index} className="transaction-days">
        <p>{Object.keys(summary)}</p>
       <img src={Object.values(summary)} />
        </div>
      );
  });
  return (
    <div className="second-container">
      <div className="transaction-summary">
       <div className="transaction-summary-inner">
       {transactionSummaries}
       </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="main-container">
      <SecondContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <TopContainer />
      <MainContainer />
    </div>
  );
}

function App() {
  return (
    <>
      <SideBar />
      <MainContent />
    </>
  );
}

export default App;
