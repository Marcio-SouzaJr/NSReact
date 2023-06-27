import { useState } from "react";
import Navbar from "../../components/Navbar";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Clientes = () => {
  const [clienteId, setClienteId] = useState("");
  const [mesmoEndereco, setMesmoEndereco] = useState(false);
  const [nomeReduzido, setNomeReduzido] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [documento, setDocumento] = useState("");
  const [inscricao, setInscricao] = useState("");
  const [prazo, setPrazo] = useState("");
  const [process, setprocess] = useState([
    { id: "frangoCorte", name: "Frango de corte", status: false },
    { id: "frangoPostura", name: "Frango de postura", status: false },
    { id: "gadoLeite", name: "Gado de leite", status: false },
    { id: "gadoCorte", name: "Gado de corte", status: false },
    { id: "comercio", name: "Comercio", status: false },
  ]);
  const [setor, setSetor] = useState([]);
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [municipioFaturamento, setMunicipioFaturamento] = useState("");
  const [estadoFaturamento, setEstadoFaturamento] = useState("");
  const [cepFaturamento, setCepFaturamento] = useState("");
  const [logradouroFaturamento, setLogradouroFaturamento] = useState("");
  const navigate = useNavigate();
  const contador = doc(db, "Clientes", "contador");
  const docSnap = getDoc(contador);
  const getId = async () => {
    if (docSnap) {
      const id = (await docSnap).data().contagem;
      setClienteId(id);
    } else {
      console.log("No such document!");
    }
  };

  getId();

  const exibir = () => {
    if (mesmoEndereco) {
      return setMesmoEndereco(false);
    } else {
      return setMesmoEndereco(true);
    }
  };

  const handleCheck = (id) => {
    setprocess(
      process.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
    setSetor(
      process.filter((item) => {
        return item.status === true;
      })
    );
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Clientes", `${clienteId}`), {
        nomeReduzido,
        nomeCompleto,
        email,
        telefone,
        documento,
        inscricao,
        prazo,
        setor,
        municipio,
        estado,
        cep,
        logradouro,
        municipioFaturamento,
        estadoFaturamento,
        cepFaturamento,
        logradouroFaturamento,
      });
      alert("Cliente Cadastrado com Sucesso");
      updateDoc(contador, { contagem: increment(1) });
      navigate("/selection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="row container-fluid py-2 m-0 page-base-form">
        <div className="row">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-2 rounded">
            <h1 className="m-auto mb-5">Novo Cliente</h1>
            <h4 className="mb-3">Dados Cadastrais</h4>
            <form noValidate>
              <div className="row">
                <div className="col-md-2 mb-3">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="id"
                    placeholder={clienteId}
                    defaultValue={clienteId}
                    disabled
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <label htmlFor="nome">Nome Reduzido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome Reduzido"
                    onChange={(e) => setNomeReduzido(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="nome-completo">Nome Completo</label>
                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    id="nome-completo"
                    placeholder="Nome do CPF ou CNPJ"
                    onChange={(e) => setNomeCompleto(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@exemplo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefone">
                  Telefone<span className="text-muted"> (somente numeros)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="81999999999"
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      id="cpf"
                      name="documento"
                      type="radio"
                      className="custom-control-input"
                      checked
                    />
                    <label className="custom-control-label ps-1" htmlFor="cpf">
                      CPF
                    </label>
                  </div>
                  <div className="input-group-text">
                    <input
                      id="cnpj"
                      name="documento"
                      type="radio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label ps-1" htmlFor="cnpj">
                      CNPJ
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with radio button"
                  placeholder="Somente numeros"
                  onChange={(e) => setDocumento(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <div className=" col-md-3 mb-3 me-5">
                  <label htmlFor="Inscricao">Inscrição Estadual</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Inscricao"
                    placeholder="99999999"
                    onChange={(e) => setInscricao(e.target.value)}
                  />
                </div>
                <div className=" col-md-3 mb-3">
                  <label htmlFor="prazo">Prazo de pagamento</label>
                  <select
                    className="form-select"
                    onChange={(e) => setPrazo(e.target.value)}
                  >
                    <option selected>Antecipado</option>
                    <option defaultValue="7">7 dias</option>
                    <option defaultValue="15">15 dias</option>
                    <option defaultValue="21">21 dias</option>
                    <option defaultValue="25">25 dias</option>
                    <option defaultValue="28">28 dias</option>
                    <option defaultValue="21, 25 e 28">21, 25 e 28 dias</option>
                  </select>
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Setores</h4>
              <div className="row">
                {process.map((item) => {
                  const { id, name, status } = item;
                  return (
                    <>
                      <div
                        key={id}
                        className="custom-control custom-checkbox col-md-4 mb-3"
                      >
                        <input
                          type="checkbox"
                          checked={status}
                          onClick={() => handleCheck(id)}
                        />
                        <label className="custom-control-label" htmlFor={id}>
                          {name}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Endereço de Cobrança</h4>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="municipio">Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="municipio"
                    placeholder="Municipio"
                    onChange={(e) => setMunicipio(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="estado">Estado</label>
                  <span className="text-muted">(Abreviação)</span>
                  <input
                    type="text"
                    className="form-control"
                    id="estado"
                    placeholder="PE"
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="00000000"
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="logradouro">Logradouro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="logradouro"
                    placeholder="Sitio Granja Nova Safra"
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </div>
                <div className="custom-control custom-checkbox col-md-10 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input me-1"
                    id="mesmo-endereco"
                    onChange={() => {
                      exibir();
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="mesmo-endereco"
                  >
                    Endereço de faturamento é o mesmo de cobrança
                  </label>
                </div>
              </div>
              <hr className="mb-4" />

              {mesmoEndereco ? (
                <></>
              ) : (
                <>
                  {" "}
                  <h4 className="mb-3">Endereço de Faturamento</h4>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="municipio">Municipio</label>
                      <input
                        type="text"
                        className="form-control"
                        id="municipio"
                        placeholder="Municipio"
                        onChange={(e) =>
                          setMunicipioFaturamento(e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="estado">Estado</label>
                      <span className="text-muted">(Abreviação)</span>
                      <input
                        type="text"
                        className="form-control"
                        id="estado"
                        placeholder="PE"
                        onChange={(e) => setEstadoFaturamento(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="cep">CEP</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cep"
                        placeholder="00000000"
                        onChange={(e) => setCepFaturamento(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="logradouro">Logradouro</label>
                      <input
                        type="text"
                        className="form-control"
                        id="logradouro"
                        placeholder="Sitio Granja Nova Safra"
                        onChange={(e) =>
                          setLogradouroFaturamento(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <hr className="mb-4" />{" "}
                </>
              )}

              <div align="center">
                <button
                  className="btn btn-primary btn-lg btn-block px-5"
                  type="submit"
                  onClick={handleClick}
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
