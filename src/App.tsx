import DataProvider from "./context/DataProvider";
import "./styles/app.scss";

const App: React.FC = () => (
  <div className="app">
    <h1>DLI Calculator</h1>

    <DataProvider>
      <span>test</span>
    </DataProvider>
  </div>
);

export default App;
