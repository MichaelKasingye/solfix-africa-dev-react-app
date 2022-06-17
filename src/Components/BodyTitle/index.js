import React from "react";

export default function BodyTitle({title}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>Check our {title}</p>
    </div>
  );
}

export  function PageTitle({title}) {
  return (
    <div className="section-title">
      {/* <h2>{title}</h2> */}
      <p>{title}</p>
    </div>
  );
}
