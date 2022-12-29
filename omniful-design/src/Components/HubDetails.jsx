import React from 'react'
import HubCard from './HubCard';
import './Styles/HubDetails.css';


const HubDetails = () => {
  return (
    <div>
      <div className='top-hub-header'>
          <h5>Hubs</h5>
      </div>
      <div className='hub-section'>
          <p className='hub-1'>All Hubs</p>
          <p className='hub-2'>3</p>
      </div>
      <div className='hub-grid-div'>
        <HubCard name={"Jeddah"} hub={"Ansar Hospital,hadiqat Rami,Al Zahra,Jeddah"} address={"Makkah, Saudi Arabia"} />
        <HubCard name={"Makkah"} hub={"Makkah MAll, King ,Abdullah Road"} address={"Makkah, Saudi Arabia"} />
        <HubCard name={"Riyadh"} hub={"Ring Road, Plot-18,Riyadh Jedddah HighWay"} address={"Makkah, Saudi Arabia"} />
      </div>
    </div>
  )
}

export default HubDetails