import React from 'react'
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import SideHubSettings from '../Components/SideHubSettings';
import HubDetails from '../Components/HubDetails';

const Hubs = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <SideHubSettings />
      <HubDetails />
    </div>
  )
}

export default Hubs