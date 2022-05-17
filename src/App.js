import "./styles.css";
import Portfolio from "./Portfolio";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    </div>
  );
}
