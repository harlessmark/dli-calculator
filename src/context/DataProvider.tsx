import { createContext, useState } from "react";
import PropTypes from "prop-types";

const DataProvider: React.FC = ({ children }) => {
  type Steps = {
    title: string;
    text: string;
    default?: number;
  }[];

  const [steps, setSteps] = useState<Steps>([
    {
      title: "Calculate Average PPF",
      text: "",
      default: 0,
    },
    {
      title: "Calculate Growing Area",
      text: "",
      default: 0,
    },
    {
      title: "Calculate Degradation",
      text: "",
      default: 0.8,
    },
    {
      title: "Your Plant's PPFD",
      text: "",
    },
    {
      title: "Calculate Light Hours",
      text: "",
      default: 12,
    },
    {
      // user can select plant's light requirements to compare with DLI
      title: "Your Plant's DLI",
      text: "",
    },
  ]);

  const DataContext = createContext<any>(undefined);

  return (
    <DataContext.Provider value={{ steps, setSteps }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default DataProvider;
