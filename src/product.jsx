import React from 'react'
import Title from './title.jsx'
import Image from './Image.jsx'
import Rating from './rating.jsx'
import Price from './price.jsx'
import Avalability from './avalability.jsx'

export default function product(props) {
  return (
    <div>
      <Image Image={props.Product['images']}/>
      <Title Title={props.Product.title}/>
      <div id="brand">{props.Product.brand}</div>
      <div id="price-rating"><Price price={props.Product.offer_price.price}/>
      <Rating Rating={props.Product.average_rating} reviewCount={props.Product.total_review_count}/></div>
      <Avalability info={props.Product}/>
      <div id="buy_now"><button id="buy_button">Buy now</button> </div>
    </div>
  )
}
