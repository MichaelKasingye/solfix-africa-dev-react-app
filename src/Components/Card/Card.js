import React from 'react'
import { Link } from 'react-router-dom'

function Card({id, image, title, descriptions, price, alt}) {
  console.log(descriptions )

  return (
    <div className="col-lg-4 col-md-6 col-12" style={{width:"300px"}}>
    <Link to={"/fetures-decription-page/"+id}>

    <div className="single-product" style={{width:"100%"}}>
    <div className="product-image">
      <img src={image} alt={alt} />
      <div className="button">
        <span  className="btn">
           View Document
        </span>
      </div>
    </div>
    <div className="product-info">
      {/* <h4 > */}
        <span className="title">{title}</span>
      {/* </h4> */}
      <span className="category">{descriptions}...</span>
     
      <div className="price">
        <span>UGX {price}</span>
      </div>
    </div>
  </div>
    </Link>

  </div>

  )
}

export default Card