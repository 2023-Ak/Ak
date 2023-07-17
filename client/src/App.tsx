import React from "react";
import tw from "twin.macro";

function App() {
  return <ExDiv>Ak!!!</ExDiv>;
}

const ExDiv = tw.div`
  text-xl 
  font-bold 
  underline
`;

export default App;
