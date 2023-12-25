import React from "react";
import SideBar from "./sidebar";
import NavBar from "./navbar";
import AppMain from './appMain'

export default React.memo(() => {
  return (
    <div className="app-layout">
      <SideBar></SideBar>
      <div className="main-container">
        <NavBar></NavBar>
        <AppMain></AppMain>
      </div>
    </div>
  )
}) 