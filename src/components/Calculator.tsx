import { useState, useContext } from "react";
import UserInputContext from "../context/UserInputContext";
import instructions from "../instructions";

const Calculator: React.FC = () => {
  const { userInputs, setUserInputs } = useContext(UserInputContext);
  const [userInput, setUserInput] = useState(0);
  const [step, setStep] = useState(0);

  // todo: add custom hook for localStorage

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(Number(e.target.value));
  };

  const backHandler = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const nextHandler = () => {
    if (step < instructions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <h2>{instructions[step].title}</h2>
      <p>{instructions[step].text}</p>

      <div>
        {instructions[step] && <input type="number" onChange={changeHandler} />}
      </div>

      <button onClick={backHandler}>Back</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Calculator;
