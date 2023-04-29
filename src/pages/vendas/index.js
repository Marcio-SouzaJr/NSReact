import Navbar from "../../components/Navbar";

const Vendas = () => {
  return (
    <>
      <Navbar />

      <div class="row container-fluid py-2 m-0 page-base-form">
        <div class="py-5 text-center">
          <img
            class="d-block mx-auto mb-4"
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/256/external-leaf-agriculture-and-farmer-kiranshastry-lineal-color-kiranshastry.png"
            alt="logo nova safra"
            width="72"
          />
          <h2>Cadastro de Vendas</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div class="row">
          <div class="col-md-7 m-auto bg-white card shadow p-3 mb-2  rounded">
            <h4 class="mb-3">Dados da Venda</h4>
            <form class="needs-validation" novalidate>
              <div class="row align-items-center">
                <div class="w-25 mb-3">
                  <label for="contrato">Contrato</label>
                  <input
                    type="text"
                    class="form-control text-center"
                    id="contrato"
                    placeholder="3165"
                    value=""
                    disabled
                  />
                </div>
                <div class="w-50 mb-3">
                  <label for="nome">Fabrica</label>
                  <select class="form-select" id="nome">
                    <option selected>Selecionar Fabrica</option>
                    <option value="1">Oleoplan Nordeste</option>
                    <option value="2">Cargill Barreiras</option>
                    <option value="3">Cargil Rio Verde</option>
                  </select>
                </div>
                <div class="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input type="date" class="form-control" id="data" />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="w-50 mb-3">
                  <label for="cliente">Cliente</label>
                  <select class="form-select" id="cliente">
                    <option selected>Cliente</option>
                    <option value="1">Jose de Almeida Cordeiro</option>
                    <option value="2">Plantel Agro</option>
                    <option value="3">Cleiton Fabiano</option>
                    <option value="3">Adelbar Portes</option>
                  </select>
                </div>
                <div class="w-50 mb-3">
                  <label for="produto">Produto</label>
                  <select class="form-select" id="produto">
                    <option selected>Produto</option>
                    <option value="1">Farelo de Soja Granel 45%</option>
                    <option value="2">Farelo de Soja Granel 46%</option>
                    <option value="3">Farelo de Soja Ensacado</option>
                    <option value="3">Casca de Soja</option>
                  </select>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="w-25 mb-3">
                  <label for="frete">Frete</label>
                  <select class="form-select" id="frete">
                    <option selected>Frete</option>
                    <option value="1">CIF</option>
                    <option value="2">FOB</option>
                  </select>
                </div>

                <div class="mb-3 w-50">
                  <label for="preco">Preço</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">
                      R$
                    </span>
                    <input
                      type="text"
                      class="form-control text-center"
                      id="preco"
                    />
                  </div>
                </div>
                <div class="mb-3 w-25">
                  <label for="volume">Volume</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control text-center"
                      id="volume"
                      placeholder="300"
                    />
                    <span class="input-group-text" id="basic-addon3=4">
                      T
                    </span>
                  </div>
                </div>
              </div>

              <hr class="mb-5" />
              <div align="center">
                <button
                  class="btn btn-primary btn-lg btn-block px-5"
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
