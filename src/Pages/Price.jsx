import React from 'react'
import BodyTitle from '../Components/BodyTitle';
import PriceCards from '../Components/PriceCards'
import { pricingData } from '../utilities/pricing';
// console.log(pricingData);


export default function Price() {

  return (
    <section id="pricing" className="pricing mt-5">
  <div className="container">
  < BodyTitle title="Pricing"/>
<p className='fs-5'>Check out our affordable plans and pricing and choose what best suits your needs.</p>

        <PriceCards data={pricingData}/>
  </div>
</section>

  )
}
