import React from "react";
import BodyTitle from "../Components/BodyTitle";
import Cards from "../Components/Card";
import { productData } from "../utilities/data";


export default function LegalDocumentsPage() {
  const legalDocuments = productData.filter(info => info.section ==="legalDocument");

  return (
    <div style={{margin:"150px 0 20px 0"}} >
    <BodyTitle title="REGISTRATION" />
    <Cards data = {legalDocuments}/>
    
</div>
  )
}

