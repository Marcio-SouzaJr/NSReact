import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <>
      <Navbar />
      <div className="row container-fluid py-2 m-0 page-base">
        <div className="col-sm-6 col-lg-4 pt-2" id="clientes">
          <div className="option text-white rounded ">
            <Link to={"/clientes"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Clientes
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar dados de novos clientes para serem usado em contratos,
                saldos e relatórios
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2" id="fornecedores">
          <div className="option text-white rounded ">
          <Link to={"/fornecedores"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Fornecedores
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar dados de fornecedores e produtos, para serem usados em
                contratos, saldos e relatórios
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2" id="vendas">
          <div className="option text-white rounded">
          <Link to={"/vendas"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Vendas
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar novas vendas
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded" id="embarques">
          <Link to={"/embarques"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Embarques
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar volumes embarcados
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded">
            <div className="option-overlay"></div>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Saldos
              </h3>
              <p className="option-description font-weight-light mb-0">
                Acompanhamento de saldos
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded">
            <div className="option-overlay"></div>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Relatorios
              </h3>
              <p className="option-description font-weight-light mb-0">
                Relatórios detalhados
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
