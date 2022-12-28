import React from 'react'
import "./Styles/SideBarSettings.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const SideBarSettings = () => {
  return (
    <div className='settings-box'>
        <div className='header'>
            <p>Settings</p>
        </div>
        <div className='integration'>
            <LocalShippingOutlinedIcon fontSize='small' />
            <p className='para'>Apps & Integration</p>
            <KeyboardArrowUpOutlinedIcon fontSize='small' />
        </div>
        <div className='sales-channel-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='sales-head'>Sales Channel Apps</p>
            <p className='noti-num'>2</p>
        </div>
        <div className='shipping-apps'>
            <div className='sales-icon'>
                <LocalShippingOutlinedIcon fontSize='small' />
            </div> 
            <p className='shipping-head'>Shipping Apps</p>
            <p className='noti-num-2'>1</p>
        </div>
        <div className='hub-management'>
            <LocalShippingOutlinedIcon fontSize='small' />
            <p className='para'>Hub Management</p>
            <KeyboardArrowDownOutlinedIcon fontSize='small' />
        </div>
    </div>
  )
}

export default SideBarSettings;