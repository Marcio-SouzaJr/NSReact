import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Contratos from "./pages/Contratos";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/selection"
          element={
            <RequireAuth>
              <Selection />
            </RequireAuth>
          }
        />
        <Route
          path="/clientes"
          element={
            <RequireAuth>
              <Clientes />
            </RequireAuth>
          }
        />
        <Route
          path="/fornecedores"
          element={
            <RequireAuth>
              <Fornecedores />
            </RequireAuth>
          }
        />
        <Route
          path="/fornecedores/fabricas"
          element={
            <RequireAuth>
              <Fabricas />
            </RequireAuth>
          }
        />
        <Route
          path="/fornecedores/produtos"
          element={
            <RequireAuth>
              <Produtos />
            </RequireAuth>
          }
        />
        <Route
          path="/vendas"
          element={
            <RequireAuth>
              <Vendas />
            </RequireAuth>
          }
        />
        <Route
          path="/embarques"
          element={
            <RequireAuth>
              <Embarques />
            </RequireAuth>
          }
        />
        <Route
          path="/saldos"
          element={
            <RequireAuth>
              <Saldos />
            </RequireAuth>
          }
        />
        <Route
          path="/relatorios"
          element={
            <RequireAuth>
              <Relatorios />
            </RequireAuth>
          }
        />
        <Route
          path="/relatorios/clientes"
          element={
            <RequireAuth>
              <RelClientes />
            </RequireAuth>
          }
        />
        <Route
          path="/relatorios/vendas"
          element={
            <RequireAuth>
              <RelVendas />
            </RequireAuth>
          }
        />
        <Route
          path="/relatorios/embarques"
          element={
            <RequireAuth>
              <RelEmbarques />
            </RequireAuth>
          }
        />
        <Route
          path="/relatorios/contratos"
          element={
            <RequireAuth>
              <Contratos />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
