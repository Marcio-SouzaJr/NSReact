import { useState } from "react";
import logoLogo from "../assets/logo-color-logo.png";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState("false");
  const changeShow = () => {
    show === "true" ? setShow("false") : setShow("true");
  };

  return (
    <>
      <nav id="navbar" className="container-fluid d-flex border-bottom">
        <Link to={"/selection"}>
          <img src={logoLogo} alt="logo" id="navbar-logo" />
        </Link>
        <div
          id="navbar-links"
          className="container-fluid d-flex justify-content-around my-auto"
        >
          <Link to={"/clientes"} className="navbar-link">
            Cliente
          </Link>
          <Link to={"/fornecedores"} className="navbar-link">
            Fornecedores
          </Link>
          <Link to={"/vendas"} className="navbar-link">
            Vendas
          </Link>
          <Link to={"/embarques"} className="navbar-link">
            Embarques
          </Link>
          <Link to={"/saldos"} className="navbar-link">
            Saldos
          </Link>
          <Link to={"/relatorios"} className="navbar-link">
            Relatorios
          </Link>
          <button
            className="navbar-hamburguer my-2 border-0"
            onClick={changeShow}
          >
            <List />
          </button>
        </div>
      </nav>
      <div className={`hamburguer-${show} container-fluid`}>
        <Link to={"/clientes"} className="hamburguer-link mx-auto my-4">
          Clientes
        </Link>
        <Link to={"/fornecedores"} className="hamburguer-link mx-auto my-4">
          Fornecedores
        </Link>
        <Link to={"/vendas"} className="hamburguer-link mx-auto my-4">
          Vendas
        </Link>
        <Link to={"/embarques"} className="hamburguer-link mx-auto my-4">
          Embarques
        </Link>
        <Link to={"/saldos"} className="hamburguer-link mx-auto my-4">
          Saldos
        </Link>
        <Link to={"/relatorios"} className="hamburguer-link mx-auto my-4">
          Relatorios
        </Link>
      </div>
    </>
  );
};

export default Navbar;
