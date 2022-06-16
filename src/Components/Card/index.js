import React from "react";
import Card from "./Card";

function Index({data}) {
  return (
    <div className="row d-flex justify-content-center" style={{margin:"auto auto"}}>
      {data.map((info) => (
        <Card 
        key={info.id}
        id={info.id}
        image={info.image}
        alt={info.alt}
         title={info.title}
         descriptions={info.description.slice(0,60)}
         price={info.price} />
      ))}
    </div>
  );
}

export default Index;
