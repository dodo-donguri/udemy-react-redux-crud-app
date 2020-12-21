import React from "react";

const App = () => {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
      <Cat />
    </>
  )
}

const Cat = () => {
  return(
    <div>
    Meaow!!
    </div>
  )
}

export default App;
