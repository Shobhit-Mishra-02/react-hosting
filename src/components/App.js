import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductView from "./ProductView";
import Navigation from "./Naviation";
import themeColor from "../context";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <themeColor.Provider value={[theme, setTheme]}>
      <div className={theme}>
        <div className="h-[100%] dark:bg-slate-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productView" element={<ProductView />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </themeColor.Provider>
  );
}

export default App;
