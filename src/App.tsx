import { BrowserRouter as Router, Route, RouteObject, Routes } from "react-router-dom"


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<NewRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
