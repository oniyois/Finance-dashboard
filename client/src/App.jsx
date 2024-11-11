import { useState } from "react";
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
          {/* Add ImAGE */}
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