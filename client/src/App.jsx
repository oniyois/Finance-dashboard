import { useState } from "react";
 import logo from './assets/logo.svg';
 
// import './App.css'

function SideBarLinks() {
  const links = [
    "Dashboard",
    "Message",
    "Transactions",
    "Exchange",
    "Withdraw",
    "Deposit",
    "Security",
    "Contact Support"
  ];

  let navLinks = links.map((link, index) => {
    return (
      <div key={index} className="sidebar-link-inner">
        <a>{link}</a>
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

function App() {
  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
