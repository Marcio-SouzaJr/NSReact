import Navbar from "../../components/Navbar";

const Vendas = () => {
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
          <h2>Cadastro de Vendas</h2>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-2  rounded">
            <h4 className="mb-3">Dados da Venda</h4>
            <form className="needs-validation" novalidate>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="contrato">Contrato</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="contrato"
                    placeholder="3165"
                    value=""
                    disabled
                  />
                </div>
                <div className="w-50 mb-3">
                  <label for="nome">Fabrica</label>
                  <select className="form-select" id="nome">
                    <option selected>Selecionar Fabrica</option>
                    <option value="1">Oleoplan Nordeste</option>
                    <option value="2">Cargill Barreiras</option>
                  </select>
                </div>
                <div className="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input type="date" className="form-control" id="data" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-50 mb-3">
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
                  <label for="produto">Produto</label>
                  <select className="form-select" id="produto">
                    <option selected>Produto</option>
                    <option value="1">Farelo de Soja Granel 45%</option>
                    <option value="2">Farelo de Soja Granel 46%</option>
                    <option value="3">Farelo de Soja Ensacado</option>
                    <option value="3">Casca de Soja</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="frete">Frete</label>
                  <select className="form-select" id="frete">
                    <option selected>Frete</option>
                    <option value="1">CIF</option>
                    <option value="2">FOB</option>
                  </select>
                </div>

                <div className="mb-3 w-50">
                  <label for="preco">Preço</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      R$
                    </span>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="preco"
                    />
                  </div>
                </div>
                <div className="mb-3 w-25">
                  <label for="volume">Volume</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control text-center"
                      id="volume"
                      placeholder="300"
                    />
                    <span className="input-group-text" id="basic-addon3=4">
                      T
                    </span>
                  </div>
                </div>
              </div>

              <hr className="mb-5" />
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

export default Vendas;
