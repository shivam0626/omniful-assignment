import React from 'react'
import './Styles/HubCard.css';
import {Card,CardBody,CardTitle,CardText} from "reactstrap";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const HubCard = ({name,hub,address}) => {
  return (
    <Card className='h-card'>
    <CardBody>
      <div className='card-name'>
        <div className='c-1'>
            <span className='c-1-1'></span>
            <CardTitle tag='h5' >
              {name}
            </CardTitle>
            <div className='active-btn'>Active</div>
        </div>
        <div className='hamber'>
            <MoreVertOutlinedIcon fontSize='small' />
        </div>
      </div>
      <div className='det-1'>
        <div className='h-icon'>
          <PlaceOutlinedIcon />
        </div>
        <div>
          <CardText className='h-name'>{hub}</CardText>
          <CardText  className='h-address'>{address}</CardText>
        </div>
      </div>
      <div className='det-1'>
        <div className='h-icon'>
          <CalendarTodayOutlinedIcon />
        </div>
        <div>
          <CardText className='h-name'>Sunday (Today)</CardText>
          <CardText  className='h-address'>10:00 AM to 6:00PM</CardText>
        </div>
      </div>
      <div className='det-1'>
        <div className='h-icon'>
          <PhoneInTalkOutlinedIcon />
        </div>
        <div>
          <CardText className='h-name'>+966-277788235</CardText>
          <CardText  className='h-address'>Jeddahhub.Panda@HyperPanda.com</CardText>
        </div>
      </div>
    </CardBody>
  </Card>
  )
}

export default HubCard