import React from 'react'
import RatingComp from 'react-star-rating-component' 

export default function rating(props) {
  return (
    <div id="rating">
      <RatingComp 
      name={''}
      starCount={5}
      value={props.Rating}
      /><div id="reviewCount">{props.reviewCount}</div>
    </div>
  )
}
