import React, { Component } from 'react'
import Product from './product.jsx'

export default function grid(props) {
  return (
    <div id="grid">
      {props.data.map((x,i) => {return <div key={i} className="product"><Product Product={x}/></div>})}
    </div>
  )
}
