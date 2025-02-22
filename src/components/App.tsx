import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";
import Home from "./Home";
import Appliances from "./Appliances";

const App = () => (
  <Router>
    <GlobalStyles />
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appliances" element={<Appliances />} />
            </Routes>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
