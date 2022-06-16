import React from "react";
import BodyTitle from "../Components/BodyTitle";
import Cards from "../Components/Card";
import { productData } from "../utilities/data";

function FeaturesPage() {
  const registerCoDocuments = productData.filter(info => info.section ==="CompanyRegistration");
// console.log(registerCoDocuments);
  return(
    <div style={{margin:"150px 0 20px 0"}} >
    <BodyTitle title="REGISTRATION" />
    <Cards data = {registerCoDocuments}/>
    
</div>

  )
}


export default FeaturesPage;
