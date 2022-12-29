import React from 'react'
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import SideHubSettings from '../Components/SideHubSettings';

const Hubs = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <SideHubSettings />
    </div>
  )
}

export default Hubs