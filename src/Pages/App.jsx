import React from "react";

function App() {
  const anAlert = true;

  if (anAlert) { 
    return <TrueMessage/>;
  }
  return <FalseMessage/>;
}


function FalseMessage() {
	return <h1>Alert is off</h1>;
}

function TrueMessage() {
	return <h1>True, The Alert is true..</h1>;
}
export default App;
