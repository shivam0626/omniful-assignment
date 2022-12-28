import React from 'react';
import "./Styles/Topbar.css";
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

const Topbar = () => {
  return (
    <div className='top-box'>
        <div className='links'>
            <div className='link-icon'>
              <LinkIcon  />
            </div>
            <div className='p-link'>
              <p>Quick Links</p>
            </div>
            <div className='link-icon-2'>
              <KeyboardArrowDownSharpIcon />
            </div>
        </div>
        <div className='language'>
          <img className='flag-icon' src='https://www.freeiconspng.com/thumbs/american-us-flag-icon/us-flag-icon-10.gif' alt='flag'/>
          <div className='lan-div'>
            <p>English</p>
          </div>
        </div>
        <div className='noti-icon'>
            <NotificationsNoneSharpIcon />
        </div>
        <div className='help'>
            <HelpOutlineSharpIcon />
        </div>
    </div>
  )
}

export default Topbar;