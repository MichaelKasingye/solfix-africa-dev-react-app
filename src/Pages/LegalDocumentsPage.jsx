import React from "react";
import {PageTitle} from "../Components/BodyTitle";
import Cards from "../Components/Card";
import { productData } from "../utilities/data";


export default function LegalDocumentsPage() {
  const legalDocuments = productData.filter(info => info.section ==="legalDocument");

  return (
    <div className="document-features" >
    <PageTitle title="Legal Documents" />
    <Cards data = {legalDocuments}/>
    
</div>
  )
}

