import React from 'react'

function Card() {
  return (
    <div className="col-lg-3 col-md-6 col-12">

    <div className="single-product">
    <div className="product-image">
      <img src="https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
      <div className="button">
        <a href="product-details.html" className="btn ">
          <i className="bi bi-cart" /> Add to Cart
        </a>
      </div>
    </div>
    <div className="product-info">
      <h4 className="title">
        <a href="product-grids.html">Co founders Agreement</a>
      </h4>
      <span className="category">A contract between Co-Founders setting out the ownership in the company,</span>
      {/* <ul className="review">
        <li>
          <i className="bi bi-star-fill" />
        </li>
        <li>
          <i className="bi bi-star-fill" />
        </li>
        <li>
          <i className="bi bi-star-fill" />
        </li>
        <li>
          <i className="bi bi-star-fill" />
        </li>
        <li>
          <i className="bi bi-star-fill" />
        </li>
        <li>
          <span>4.0 Review(s)</span>
        </li>
      </ul> */}
      <div className="price">
        <span>UGX:50,000</span>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Card