import React from 'react'

export default function Image(props) {
  return (
    <div>
      <img id="image" src={props.Image[0]['base_url']+props.Image[0]['primary']}/>
    </div>
  )
}
