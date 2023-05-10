import Navbar from "../../components/Navbar";

const Fabricas = () => {
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
          <h2>Cadastro de Fabricas</h2>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ullam
            corporis quod magni maxime similique rem necessitatibus quam nemo
            harum?
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-3  rounded">
            <h4 className="mb-3">Dados Cadastrais</h4>
            <form novalidate>
              <div className="row">
                <div className="col-md-2 mb-3">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="id"
                    placeholder="120"
                    value=""
                    disabled
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <label for="nome">Nome Reduzido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome Reduzido"
                  />
                  <div className="invalid-feedback">Nome invalido</div>
                </div>
              </div>
              <div className="mb-3">
                <label for="razao">Razão Social</label>
                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    id="razao"
                    placeholder="Razão Social"
                  />
                  <div className="invalid-feedback">Nome invalido</div>
                </div>
              </div>
              <div className="mb-3">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@exemplo.com"
                />
                <div className="invalid-feedback">E-mail invalido</div>
              </div>
              <div className="mb-4">
                <label for="telefone">
                  Telefone
                  <span className="text-muted">(somente numeros.)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="81999999999"
                />
                <div className="invalid-feedback">Telefone invalido.</div>
              </div>

              <div className="mb-3">
                <label for="Inscricao">
                  CNPJ<span className="text-muted">(somente numeros.)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Inscricao"
                  placeholder="123560000123"
                />
                <div className="invalid-feedback">
                  Inscricao estadual invalida.
                </div>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3">Endereço</h4>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="municipio">Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="municipio"
                    placeholder="Municipio"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="estado">Estado</label>
                  <span className="text-muted">(Abreviação)</span>
                  <input
                    type="text"
                    className="form-control"
                    id="estado"
                    placeholder="PE"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="00000000"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label for="logradouro">Logradouro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="logradouro"
                    placeholder="Sitio Granja Nova Safra"
                  />
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

export default Fabricas;
