import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routers/Home";
import Detail from "../routers/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={Detail} />
      </Routes>
    </Router>
  );
}

export default App;
