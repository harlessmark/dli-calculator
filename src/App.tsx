import Calculator from "./components/Calculator";
import "./styles/app.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>DLI Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
