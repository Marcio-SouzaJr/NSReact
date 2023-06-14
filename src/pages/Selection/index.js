import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

const Selection = () => {
  return (
    <>
      <Navbar />
      <div class="selection-base d-flex flex-column mt-1 py-5">
        <div class="row d-flex justify-content-center">
          <div id="opcao" class="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div class="card-body">
              <h5 class="card-title">Clientes</h5>
              <p class="card-text">
                Cadastrar novos clientes, ou atualizar dados de clientes
                existentes.
              </p>
              <Link to={"/clientes"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" class="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div class="card-body">
              <h5 class="card-title">Fornecedores</h5>
              <p class="card-text">
                Cadastrar novos fornecedores e novos produtos.
              </p>
              <Link to={"/fornecedores"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" class="option card col-6 col-xl-3 mx-5 mt-5 mb-5">
            <div class="card-body">
              <h5 class="card-title">Vendas</h5>
              <p class="card-text">Lançar novas vendas.</p>
              <Link to={"/vendas"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div id="opcao" class="option card col-6 col-xl-3 m-5 mt-5">
            <div id="opcao" class="card-body">
              <h5 class="card-title">Embarques</h5>
              <p class="card-text">Cadastrar dados de embarques.</p>
              <Link to={"/embarques"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao"class="option card col-6 col-xl-3 m-5 mt-5">
            <div class="card-body">
              <h5 class="card-title">Saldos</h5>
              <p class="card-text">Volumes em carteira.</p>
              <Link to={"/saldos"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" class="option card col-6 col-xl-3 m-5 mt-5">
            <div class="card-body">
              <h5 class="card-title">Relatorios</h5>
              <p class="card-text">
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
