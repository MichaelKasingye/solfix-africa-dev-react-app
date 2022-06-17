import React from "react";
import Card from "./Card";

function Index({data}) {
  return (
    <div className=" d-flex justify-content-center flex-column " style={{margin:"auto auto"}}>
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
