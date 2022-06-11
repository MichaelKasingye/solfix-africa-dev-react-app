import React from "react";
import Card from "./Card";
import { legalDocumentData } from "../../utilities/legalDocumentsData";
// console.log(companyRegData);

function index() {
  return (
    <div className="row d-flex justify-content-center" style={{margin:"auto auto"}}>
      {legalDocumentData.map((data) => (
        <Card 
        key={data.id}
        id={data.id}
        image={data.image}
        alt={data.alt}
         title={data.title}
         description={data.description}
         price={data.price} />
      ))}
    </div>
  );
}

export default index;
