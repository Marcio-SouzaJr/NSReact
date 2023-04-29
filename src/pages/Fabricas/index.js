import Navbar from "../../components/Navbar";

const Fabricas = () => {
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
          <h2>Cadastro de Fabricas</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div class="row">
          <div class="col-md-7 m-auto bg-white card shadow p-3 mb-3  rounded">
            <h4 class="mb-3">Dados Cadastrais</h4>
            <form novalidate>
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
                  <label for="nome">Nome Reduzido</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nome"
                    placeholder="Nome Reduzido"
                  />
                  <div class="invalid-feedback">Nome invalido</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="razao">Razão Social</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    type="text"
                    class="form-control"
                    id="razao"
                    placeholder="Razão Social"
                  />
                  <div class="invalid-feedback">Nome invalido</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email@exemplo.com"
                />
                <div class="invalid-feedback">E-mail invalido</div>
              </div>
              <div class="mb-4">
                <label for="telefone">
                  Telefone
                  <span class="text-muted">(somente numeros.)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="telefone"
                  placeholder="81999999999"
                />
                <div class="invalid-feedback">Telefone invalido.</div>
              </div>

              <div class="mb-3">
                <label for="Inscricao">
                  CNPJ<span class="text-muted">(somente numeros.)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Inscricao"
                  placeholder="123560000123"
                />
                <div class="invalid-feedback">Inscricao estadual invalida.</div>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Endereço</h4>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="municipio">Municipio</label>
                  <input
                    type="text"
                    class="form-control"
                    id="municipio"
                    placeholder="Municipio"
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="estado">Estado</label>
                  <span class="text-muted">(Abreviação)</span>
                  <input
                    type="text"
                    class="form-control"
                    id="estado"
                    placeholder="PE"
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cep"
                    placeholder="00000000"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label for="logradouro">Logradouro</label>
                  <input
                    type="text"
                    class="form-control"
                    id="logradouro"
                    placeholder="Sitio Granja Nova Safra"
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

export default Fabricas;
