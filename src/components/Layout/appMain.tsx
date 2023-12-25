import React from "react";
import { Outlet } from 'react-router-dom';

export default React.memo(() => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}) 