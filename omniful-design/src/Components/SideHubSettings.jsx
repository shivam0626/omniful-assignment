import React from 'react';
import "./Styles/SideHubSettings.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const SideHubSettings = () => {
  return (
    <div className='settings-box'>
        <div className='header'>
            <p>Settings</p>
        </div>
        <div className='integration'>
            <LocalShippingOutlinedIcon fontSize='small' />
            <p className='para'>Apps & Integration</p>
            <KeyboardArrowDownOutlinedIcon fontSize='small' />
        </div>
        <div className='hub-management'>
            <LocalShippingOutlinedIcon fontSize='small' />
            <p className='para'>Hub Management</p>
            <KeyboardArrowUpOutlinedIcon fontSize='small' />
        </div> 
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Hubs</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Locations</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Bins</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Consolidation Area</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Stations</p>
            <p className='noti-num-2'>9</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Hub settings</p>
        </div>
    </div>
  )
}

export default SideHubSettings