import React,{  memo } from "react";
import SideBar from "./sidebar";
import NavBar from "./navbar";
import AppMain from './appMain'
import "@/assets/scss/layout.scss"

export default memo(() => {
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