import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/style.css";
import WorkShop from "./pages/WorkShop";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/workshops" element={<WorkShop />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
