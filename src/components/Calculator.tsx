import { useState, useContext } from "react";

import DataProvider from "../context/DataProvider";

const Calculator: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <DataProvider>
      <h1>test</h1>
      {/* <div>{data[step].title}</div> */}
    </DataProvider>
  );
};

export default Calculator;
