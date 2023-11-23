import React,{  memo } from "react";
import { Outlet } from 'react-router-dom';

export default memo(() => {
  return (
  <>
    <Outlet></Outlet>
  </>
  )
}) 