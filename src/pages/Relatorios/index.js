import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Relatorios = () => {
  return (
    <>
      <Navbar />
      <div className="selection-base d-flex flex-column mt-1 py-5 justify-content-center">
        <div className="row d-flex justify-content-center ">
          <div id="opcao" className="option card col-6 col-xl-4 mt-5 me-1 me-md-5">
            <div id="opcao" className="card-body">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text">Dados detalhados por cliente.</p>
              <Link to={"/relatorios/clientes"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-4 mt-5">
            <div className="card-body">
              <h5 className="card-title">Vendas</h5>
              <p className="card-text">Historico de vendas.</p>
              <Link to={"/relatorios/vendas"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-4 mt-5 me-1 me-md-5 ">
            <div className="card-body">
              <h5 className="card-title">Embarques</h5>
              <p className="card-text">Historico de embarques</p>
              <Link to={"/relatorios/embarques"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-4 mt-5">
            <div className="card-body">
              <h5 className="card-title">Emitir Contratos</h5>
              <p className="card-text">Emissão de contratos ja cadastrados</p>
              <Link to={"/relatorios/contratos"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatorios;
