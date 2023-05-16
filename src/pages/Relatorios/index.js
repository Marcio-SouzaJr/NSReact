import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Relatorios = () => {
  return (
    <>
      <Navbar />
      <div className="row container-fluid d-flex align-items-center py-2 m-0 page-base">
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded" id="embarques">
            <Link to={"/relatorios/clientes"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                CLientes
              </h3>
              <p className="option-description font-weight-light mb-0">
                Dados Cadastrais Clientes
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded">
            <Link to={"/saldos"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Vendas
              </h3>
              <p className="option-description font-weight-light mb-0">
                Relatorio de Vendas
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 pt-2">
          <div className="option text-white rounded">
            <div className="option-overlay"></div>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Embarques
              </h3>
              <p className="option-description font-weight-light mb-0">
                Relatorio de Embarques
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatorios;
