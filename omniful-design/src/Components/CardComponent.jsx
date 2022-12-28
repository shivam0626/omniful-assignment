import React from 'react';
import './Styles/CardComponent.css';
import {
    Card, CardImg, CardBody, CardText,
} from "reactstrap"

const CardComponent = ({image,name}) => {
  return (
    <div className='card-div'>
        <Card className='card'>
           <div className='active-btn'>Active</div>
            <CardImg
            alt="Card image cap"
            src={image}
            className='card-img'
            />
            <CardBody>
            <CardText className='card-text'>
                Custom Name
            </CardText>
            <CardText>
                <small className="text-muted">
                   {name}
                </small>
            </CardText>
            </CardBody>
        </Card>
    </div>
  )
}

export default CardComponent