import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Footer from "./components/Footer";
import Clientes from "./pages/Clientes";
import Fornecedores from "./pages/Fornecedores";
import Fabricas from "./pages/Fabricas";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/vendas";
import Embarques from "./pages/Embarques";
import Saldos from "./pages/Saldos";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route  path="/selection" element={<Selection/>}/>
      <Route  path="/clientes" element={<Clientes/>}/>
      <Route  path="/fornecedores" element={<Fornecedores/>}/>
      <Route  path="/fornecedores/fabricas" element={<Fabricas/>}/>
      <Route  path="/fornecedores/produtos" element={<Produtos/>}/>
      <Route  path="/vendas" element={<Vendas/>}/>
      <Route  path="/embarques" element={<Embarques/>}/>
      <Route  path="/saldos" element={<Saldos/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
