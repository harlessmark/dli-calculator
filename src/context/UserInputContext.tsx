import { createContext } from "react";

type Context = {
  ppf: number;
  growingArea: number;
  degredation: number;
  lightHours: number;
};

// todo: remove "any"
const UserInputContext = createContext<Context | any>({});

export default UserInputContext;
