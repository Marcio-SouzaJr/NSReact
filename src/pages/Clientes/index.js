import { useState } from "react";
import Navbar from "../../components/Navbar";

const Clientes = () => {
  const [mesmoEndereco, setMesmoEndereco] = useState(false);
  const exibir = () => {
    if (mesmoEndereco) {
      return setMesmoEndereco(false);
    } else {
      return setMesmoEndereco(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="row container-fluid py-2 m-0 page-base-form">
        <div className="py-5 text-center ">
          <img
            className="d-block mx-auto mb-4"
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/256/external-leaf-agriculture-and-farmer-kiranshastry-lineal-color-kiranshastry.png"
            alt="logo nova safra"
            width="72"
          />
          <h2>Cadastro de Clientes</h2>
          <p className="lead">
            Cadastro de novos clientes, dados para serem usados na elaboração de
            contratos e acompanhamentos de saldos e embarques
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-2 rounded">
            <h4 className="mb-3">Dados Cadastrais</h4>
            <form noValidate>
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
              <div class="mb-3">
                <label for="nome-completo">Nome Completo</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    type="text"
                    class="form-control"
                    id="nome-completo"
                    placeholder="Nome do CPF ou CNPJ"
                    required
                  />
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
              </div>
              <div class="mb-4">
                <label for="telefone">
                  Telefone<span className="text-muted"> (somente numeros)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="81999999999"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      id="cpf"
                      name="documento"
                      type="radio"
                      class="custom-control-input"
                      checked
                      required
                    />
                    <label class="custom-control-label ps-1" for="cpf">
                      CPF
                    </label>
                  </div>
                  <div class="input-group-text">
                    <input
                      id="cnpj"
                      name="documento"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label ps-1" for="cnpj">
                      CNPJ
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with radio button"
                  placeholder="Somente numeros"
                />
              </div>
              <div class="mb-3">
                <label for="Inscricao">Inscrição Estadual</label>
                <input
                  type="text"
                  class="form-control"
                  id="Inscricao"
                  placeholder="99999999"
                />
                <div class="invalid-feedback">Inscricao estadual invalida.</div>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Setor</h4>
              <div className="row">
                <div class="custom-control custom-checkbox col-md-4 mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="frango-corte"
                  />
                  <label class="custom-control-label" for="frango-corte">
                    Frango de Corte
                  </label>
                </div>
                <div class="custom-control custom-checkbox col-md-4 mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="frango-postura"
                  />
                  <label class="custom-control-label" for="frango-postura">
                    Frango de Postura
                  </label>
                </div>
                <div class="custom-control custom-checkbox col-md-4 mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="gado-leite"
                  />
                  <label class="custom-control-label" for="gado-leite">
                    Gado de Leite
                  </label>
                </div>
                <div class="custom-control custom-checkbox col-md-4 mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="gado-corte"
                  />
                  <label class="custom-control-label" for="gado-corte">
                    Gado de Corte
                  </label>
                </div>
                <div class="custom-control custom-checkbox col-md-4 mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="comercio"
                  />
                  <label class="custom-control-label" for="comercio">
                    Comércio
                  </label>
                </div>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Endereço de Cobrança</h4>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="municipio">Municipio</label>
                  <input
                    type="text"
                    class="form-control"
                    id="municipio"
                    placeholder="Municipio"
                    required
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
                    required
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cep"
                    placeholder="00000000"
                    required
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label for="logradouro">Logradouro</label>
                  <input
                    type="text"
                    class="form-control"
                    id="logradouro"
                    placeholder="Sitio Granja Nova Safra"
                    required
                  />
                </div>
                <div class="custom-control custom-checkbox col-md-10 mb-2">
                  <input
                    type="checkbox"
                    class="custom-control-input me-1"
                    id="mesmo-endereco"
                    onChange={() => {
                      console.log("clicou");
                      console.log(mesmoEndereco);
                      exibir();
                    }}
                  />
                  <label class="custom-control-label" for="mesmo-endereco">
                    Endereço de faturamento é o mesmo de cobrança
                  </label>
                </div>
              </div>
              <hr class="mb-4" />

              {mesmoEndereco ? (
                <></>
              ) : (
                <>
                  {" "}
                  <h4 class="mb-3">Endereço de Faturamento</h4>
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <label for="municipio">Municipio</label>
                      <input
                        type="text"
                        class="form-control"
                        id="municipio"
                        placeholder="Municipio"
                        required
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
                        required
                      />
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="cep">CEP</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cep"
                        placeholder="00000000"
                        required
                      />
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="logradouro">Logradouro</label>
                      <input
                        type="text"
                        class="form-control"
                        id="logradouro"
                        placeholder="Sitio Granja Nova Safra"
                        required
                      />
                    </div>
                  </div>
                  <hr class="mb-4" />{" "}
                </>
              )}

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

export default Clientes;
