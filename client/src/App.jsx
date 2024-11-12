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

function TopContainer(){
  return(
    <>
      
        <div className="top-container">
          <div className="search-input">
            <input type="search" placeholder="search"/>
            
        </div>
        <div className="date-input">
          <input type="date" />
        </div>
        <div class="current-user">
          <p>
            John Camp
            <img src="/assets/johnCamp_img.svg" />
          </p>
        </div>
        </div>
      
    </>

  );
}

function PriceSection(){
  return(
    <>
      
    </>
  );
}

function FirstContainer(){

}




function MainContainer(){

}

function MainContent(){
  return(
    <>
    <div className="main-content">
    <TopContainer/>

    </div>
      
    </>
  );

}

function App() {
  return (
    <>
      <SideBar />
      <MainContent/>
    </>
  );
}

export default App;
