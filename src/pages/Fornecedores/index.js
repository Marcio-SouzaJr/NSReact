import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Fornecedores = () => {
  return (
    <>
      <Navbar />
      <div className=" d-flex flex-column flex-lg-row justify-content-around align-items-center container-fluid py-2 m-0 page-base">
        <div className="col-12 col-sm-6 col-lg-5 pt-2">
          <div className="option text-white rounded">
          <Link to={"/fornecedores/fabricas"}>
              <div className="option-overlay"></div>
            </Link>
            
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Fabricas
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar Fabricas/Empresas como fornecedoras.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-5 pt-2">
          <div className="option text-white rounded">
          <Link to={"/fornecedores/produtos"}>
              <div className="option-overlay"></div>
            </Link>
            <div className="option-content px-3 py-4">
              <h3 className="hover-1-title text-uppercase font-weight-bold mb-0">
                Produto
              </h3>
              <p className="option-description font-weight-light mb-0">
                Cadastrar novo produto vendido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fornecedores;
