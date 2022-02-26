import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page" element={<Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;
