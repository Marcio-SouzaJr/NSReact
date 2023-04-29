import Navbar from "../../components/Navbar";

const Produtos = () => {
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
          <h2>Cadastro de Produtos</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div class="row">
          <div class="col-md-7 m-auto bg-white card shadow p-3 mb-3  rounded">
            <h4 class="mb-3">Dados Cadastrais</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-2 mb-3">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    class="form-control text-center"
                    id="id"
                    placeholder="120"
                    value=""
                    disabled
                  />
                </div>
                <div class="col-md-10 mb-3">
                  <label for="nome">Nome do Produto</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nome"
                    placeholder="Nome detalhado do produto"
                    value=""
                    required
                  />
                  <div class="invalid-feedback">Nome invalido</div>
                </div>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Níveis de Garantia</h4>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="proteina">
                    Proteina<span class="text-muted">(Percentual)</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="proteina"
                    placeholder="Proteina"
                    required
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="umidade">Umidade</label>
                  <span class="text-muted">(Percentual)</span>
                  <input
                    type="text"
                    class="form-control"
                    id="umidade"
                    placeholder="Umidade"
                    required
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="solubilidade">Solubilidade</label>
                  <input
                    type="text"
                    class="form-control"
                    id="solubilidade"
                    placeholder="Solubilidade"
                    required
                  />
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

export default Produtos;
