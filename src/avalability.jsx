import React from 'react'

export default function avalability(props) {
  return (
    <div id="avalability">
      {props.info.ship_from_store === true &&<div className="ava">Shipping avalabile</div> || <div className="ava">Shipping not avalabile</div>}
    </div>
  )
}
