import React from 'react';
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import SideBarSettings from "../Components/SideBarSettings";
import SalesChannel from "../Components/SalesChannel";

const Sales = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <SideBarSettings />
      <SalesChannel />
    </div>
  )
}

export default Sales