import "./App.css";
import Singleblog from "./components/Singleblog";
import Landingpage from "./components/Landingpage";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog/:slug" element={<Singleblog/>} />
      </Routes>
    </div>
  );
}

export default App;
