import React from 'react';
import '../style/Card.css';
import StarIcon from '../img/StarIcon.png'

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === 'Online') {
        badgeText = "ONLINE"
    }

  return (
    <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img className='card--img' src={props.item.img} />
        <div className='card--stats'>
            <img className='card--star' src={StarIcon} />
            <span >{props.item.stats.rating}</span>
            <span className='gray'>({props.item.stats.reviewCount}) -</span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p className='card--title'>{props.item.title}</p>
        <p><span className='bold'>From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card

