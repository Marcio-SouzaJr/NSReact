import Navbar from "../../components/Navbar";

const Embarques = () => {
  return (
    <>
      <Navbar />

      <div className="row container-fluid py-2 m-0 page-base-form">
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/256/external-leaf-agriculture-and-farmer-kiranshastry-lineal-color-kiranshastry.png"
            alt="logo nova safra"
            width="72"
          />
          <h2>Embarques</h2>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 m-auto bg-white card shadow p-3 my-5 rounded">
            <h4 className="mb-3">Dados do Embarque</h4>
            <form className="needs-validation" novalidate>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="cliente">Cliente</label>
                  <select className="form-select" id="cliente">
                    <option selected>Cliente</option>
                    <option value="1">Jose de Almeida Cordeiro</option>
                    <option value="2">Plantel Agro</option>
                    <option value="3">Cleiton Fabiano</option>
                    <option value="3">Adelbar Portes</option>
                  </select>
                </div>
                <div className="w-50 mb-3">
                  <label for="contrato">Contrato</label>
                  <select className="form-select" id="contrato">
                    <option selected>Contrato</option>
                    <option value="1">
                      3160 - Plantel - Farelo Granel 45%
                    </option>
                    <option value="2">3161 - Center Raçoes - Casca</option>
                    <option value="3">
                      3162 - Granja Almeida - Farelo Granel 46%
                    </option>
                    <option value="4">
                      3163 - Adelbar Pontes - Farelo Granel 45%
                    </option>
                  </select>
                </div>

                <div className="mb-3 w-25">
                  <label for="volume" className="form-label mb-0">
                    Volume
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="volume"
                      placeholder="49,5"
                    />
                    <span className="input-group-text" id="basic-addon3">
                      T
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="contrato">Placa</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="placa"
                    placeholder="Placa"
                  />
                </div>
                <div className="w-50 mb-3">
                  <label for="nf">Nota Fiscal</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="nf"
                    placeholder="166591"
                  />
                </div>
                <div className="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input type="date" className="form-control" id="data" />
                </div>
              </div>

              <div align="center">
                <button
                  className="btn btn-primary btn-lg btn-block px-5"
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Embarques;