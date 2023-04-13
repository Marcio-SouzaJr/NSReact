import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/selection" element={<Selection/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
