import { useState } from "react";
import Calculator from "./components/Calculator";

import initialState from "./context/initialState";
import UserInputContext from "./context/UserInputContext";

import "./styles/app.scss";

const App: React.FC = (): JSX.Element => {
  const [userInputs, setUserInputs] = useState(initialState);

  return (
    <div className="app">
      <h1>DLI Calculator</h1>

      <UserInputContext.Provider value={{ userInputs, setUserInputs }}>
        <Calculator />
      </UserInputContext.Provider>
    </div>
  );
};

export default App;
