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

import transactionFooterBlueDot from "./assets/dashboard/transaction-footer/transaction_footer_blue_dot.svg";

import transactionFooterGreenDot from "./assets/dashboard/transaction-footer/transaction_footer_green_dot.svg";

import transactionFooterRedDot from "./assets/dashboard/transaction-footer/transaction_footer_red_dot.svg";

import activeCardImg from "./assets/dashboard/active-cards/active_cards_img.svg"

import priceSectionGreenLine from "./assets/dashboard/price-section/dashboard_pricesection_green_line.svg"

import priceSectionRedLine from "./assets/dashboard/price-section/dashboard_pricesection_red_line.svg"

function SideBarLinks() {
  const links = [
    { Dashboard: dashboardIcon },
    { Message: messageIcon },
    { Transactions: transactionIcon },
    { Exchange: exchangeIcon },
    { Withdraw: withdrawIcon },
    { Deposit: depositIcon },
    { Security: securityIcon },
  ];

  let navLinks = links.map((link, index) => {
    return (
      <div key={index} className="sidebar-link-inner">
        <a>
          <img className="padding-right-16px" src={Object.values(link)} />
          {Object.keys(link)}
        </a>
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
          <img src={userProfileImage} />
        </p>
      </div>
    </div>
  );
}

function PriceSection() {
  const priceSectionDetails = [
    { "NP 250 03  ": priceSectionGreenLine},
    { "NP 250 04": priceSectionGreenLine},
    { "NP 250 05": priceSectionGreenLine},
    {"NP 250 06 ": priceSectionGreenLine},
    {"NP 250 07": priceSectionRedLine }
  ];

  let priceSectionInner = priceSectionDetails.map((price, index) => {
    return (
      <p key={index} className="dark-color">
      {Object.keys(price)}
      <span className="green-color padding-left-48px">+1.01%

        <img src={Object.values(price)} />
        </span>
      </p>
    );
  });

  return (
  <>
  <div className="price-section">
    <div className="price-section-inner">
      <h2 className="dark-color">$28,941.69<span className="light-color padding-lrft-12px font-size">+1.01% <img src={priceSectionGreenLine }/></span></h2>
    </div>
    <div className="select-option">
      <select>
        <option>Bank</option>
      </select>
      <select>
        <option>Income</option>
      </select>
    </div>
    {priceSectionInner}
  </div>
  

  </>
  );
}

function FirstContainer() {
  return (
    <PriceSection/>
  );

}

function TransactionFooters() {
  const transactionFooter = [
    { "ATM CardS": transactionFooterBlueDot },
    { "Remittance": transactionFooterBlueDot },
    { "OnlineTransaction": transactionFooterBlueDot },
  ];

  let transactionFooterInner = transactionFooter.map((footer, index) => {
    return (
      <div key={index} className="transaction-footer-inner">
        <img src={Object.values(footer)} />
        <p>{Object.keys(footer)}</p>
      </div>
    );
  });
  return <div className="transaction-footer">{transactionFooterInner}</div>;
}

function SecondContainer() {
  const trasactionSummariesByDays = [
    { Mon: trasactionSummaryDayOne },
    { Tues: trasactionSummaryDayOne },
    { Wed: trasactionSummaryDayOne },
    { Thu: trasactionSummaryDayOne },
    { Fri: trasactionSummaryDayOne },
    { Sun: trasactionSummaryDayOne },
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
        <div className="transaction-summary-inner">{transactionSummaries}</div>
        <TransactionFooters />
      </div>
      <div className="active-cards">
        <div className="activecards-title">
          <h3>Active Cards</h3>
        </div>
        <div className="active-cards-inner">
          <div className="card-image">
          <img src={activeCardImg}/>

          </div>
          <div className="card-number">
            <p>
              <span>4319</span>
              <span className="padding-left-8px">5312</span>
              <span className="padding-left-8px">0215</span>
              <span className="padding-left-8px">12&9</span>
            </p>
          </div>
          <div className="card-details">
            <div class="card-holder">
            <p>CARD HOLDER</p>
            <p>THOMAS CULLEN</p>
            </div>
            <div className="card-date">
              <p>EXPIRES</p>
              <p>09/15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="main-container">
    <FirstContainer/>
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
