import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

const Selection = () => {
  return (
    <>
      <Navbar />
      <div className="selection-base container-fluid d-flex flex-column py-5">
        <div className="row d-flex justify-content-center">
          <div id="opcao" className="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div className="card-body">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text">
                Cadastrar novos clientes, ou atualizar dados de clientes
                existentes.
              </p>
              <Link to={"/clientes"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div className="card-body">
              <h5 className="card-title">Fornecedores</h5>
              <p className="card-text">
                Cadastrar novos fornecedores e novos produtos.
              </p>
              <Link to={"/fornecedores"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div className="card-body">
              <h5 className="card-title">Vendas</h5>
              <p className="card-text">Lançar novas vendas.</p>
              <Link to={"/vendas"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div id="opcao" className="option card col-6 col-xl-3 m-5 mt-5">
            <div id="opcao" className="card-body">
              <h5 className="card-title">Embarques</h5>
              <p className="card-text">Cadastrar dados de embarques.</p>
              <Link to={"/embarques"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-3 m-5 mt-5">
            <div className="card-body">
              <h5 className="card-title">Saldos</h5>
              <p className="card-text">Volumes em carteira.</p>
              <Link to={"/saldos"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-3 m-5 mt-5">
            <div className="card-body">
              <h5 className="card-title">Relatorios</h5>
              <p className="card-text">
                Relatorios de Clientes, Embarques e Vendas.
              </p>
              <Link to={"/relatorios"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
