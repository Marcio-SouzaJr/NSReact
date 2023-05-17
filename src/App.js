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
import Relatorios from "./pages/Relatorios";
import RelClientes from "./pages/RelClientes";
import RelVendas from "./pages/RelVendas";
import RelEmbarques from "./pages/RelEmbarques";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/fornecedores/fabricas" element={<Fabricas />} />
        <Route path="/fornecedores/produtos" element={<Produtos />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/embarques" element={<Embarques />} />
        <Route path="/saldos" element={<Saldos />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/relatorios/clientes" element={<RelClientes />} />
        <Route path="/relatorios/vendas" element={<RelVendas />} />
        <Route path="/relatorios/embarques" element={<RelEmbarques />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
