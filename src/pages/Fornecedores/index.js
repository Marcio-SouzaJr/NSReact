import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Fornecedores = () => {
  return (
    <>
      <Navbar />
      <div className="selection-base d-flex flex-column mt-1 py-5 justify-content-center">
        <div className="row d-flex justify-content-center ">
          <div id="opcao" className="option card col-6 col-xl-3 m-5 mt-5">
            <div id="opcao" className="card-body">
              <h5 className="card-title">Fabricas</h5>
              <p className="card-text">Cadastrar novas fabricas.</p>
              <Link to={"/fornecedores/fabricas"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
          <div id="opcao" className="option card col-6 col-xl-3 m-5 mt-5">
            <div className="card-body">
              <h5 className="card-title">Produtos</h5>
              <p className="card-text">Cadastrar novos produtos.</p>
              <Link to={"/fornecedores/produtos"}>
                <ArrowRightCircleFill className="seta position-absolute bottom-0 end-0 me-1 mb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fornecedores;
