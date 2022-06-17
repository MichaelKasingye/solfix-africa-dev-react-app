import React from "react";
import {PageTitle} from "../Components/BodyTitle";
import Cards from "../Components/Card";
import { productData } from "../utilities/data";

function FeaturesPage() {
  const registerCoDocuments = productData.filter(info => info.section ==="CompanyRegistration");
// console.log(registerCoDocuments);
  return(
    <div className="document-features" >
    <PageTitle title="COMPANY REGISTRATION DOCUMENTS" />
    <Cards data = {registerCoDocuments}/>
    
</div>

  )
}


export default FeaturesPage;
