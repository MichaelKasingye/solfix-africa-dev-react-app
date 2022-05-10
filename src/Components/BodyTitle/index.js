import React from "react";

function BodyTitle({title}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>Check our {title}</p>
    </div>
  );
}

export default BodyTitle;
