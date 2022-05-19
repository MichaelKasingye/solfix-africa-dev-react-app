import React from 'react'
import { useParams } from "react-router-dom";
import FeaturesProductDescription from "../Components/FeaturesProductDescription"


export default function FeaturesProductDecriptionPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
  <section className="product-single nav-arrow-b " style={{margin:"50px 0 20px 0"}} >
    <div className="container">
      <div className="row">
      <FeaturesProductDescription/>
      </div>
    </div>
  </section>
</>

  )
}
