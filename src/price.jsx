import React from 'react'

export default function price(props) {
  return (
    <div id="price">
      {`$ ${props.price}`}
    </div>
  )
}
