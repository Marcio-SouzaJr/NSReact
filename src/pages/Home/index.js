import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid mt-3 d-flex align-items-center page-base px-5">
        <div className="row gx-lg-5 col-12 mx-2">
          <div className="col-lg-6 mb-5 ">
            <h1 className="my-5 display-3 fw-bold titulo">
              Nova Safra <br />
              <span className="display-6 text-dark">Agronegocios</span>
            </h1>
            <p>
              Sistema de Gerenciamento de clientes, contratos e saldos internos
              da Nova Safra Agronegocios.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card shadow p-3 mb-2 bg-body-tertiary rounded">
              <div className="card-body py-5 px-md-5">
                <form>
                  <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control " />
                    <label className="form-label " htmlFor="email">
                      E-mail{" "}
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="senha"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="senha">
                      Senha
                    </label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="lembrar"
                      checked
                    />
                    <label className="form-check-label" htmlFor="lembrar">
                      Lembrar os meus dados
                    </label>
                  </div>
                  <Link to={"/selection"}>
                    <button
                      type="submit"
                      className=" botao btn-block mb-4 position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
