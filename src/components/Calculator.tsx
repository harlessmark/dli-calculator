import React, { useState, useContext } from "react";
import UserInputContext from "../context/UserInputContext";
import instructions from "../instructions";

const Calculator: React.FC = (): JSX.Element => {
  const { userInputs, setUserInputs } = useContext(UserInputContext);
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(0);

  // todo: add custom hook for localStorage

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(Number(e.target.value));
  };

  const backHandler = (): void => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const nextHandler = (): void => {
    if (step < instructions.length - 1) {
      // update user input with value
      // setUserInputs(userInputs[instructions[step].inputName]);

      // why is value always 0?
      console.log(value)

      setStep(step + 1);
    }
  };

  return (
    <div>
      <h2>{instructions[step].title}</h2>
      <p>{instructions[step].text}</p>

      <p>{instructions[step].inputName}</p>
      <p>{value}</p>

      <input
        key={step}
        type="number"
        onChange={changeHandler}
      />

      <button onClick={backHandler}>Back</button>
      {step < instructions.length - 1 && (
        <button onClick={nextHandler}>Next</button>
      )}
    </div>
  );
};

export default Calculator;
