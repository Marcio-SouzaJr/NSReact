import { useState } from "react";
import Navbar from "../../components/Navbar";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Fabricas = () => {
  const [fabricaId, setFabricaId] = useState("");
  const [nomeReduzido, setNomeReduzido] = useState("");
  const [razao, setRazao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const navigate = useNavigate();
  const contador = doc(db, "Fabricas", "contador");
  const docSnap = getDoc(contador);
  const getId = async () => {
    if (docSnap) {
      const id = (await docSnap).data().contagem;
      setFabricaId(id);
    } else {
      console.log("No such document!");
    }
  };

  getId();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Fabricas", `${fabricaId}`), {
        nomeReduzido,
        razao,
        email,
        telefone,
        cnpj,
        municipio,
        estado,
        cep,
        logradouro,
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
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-3  rounded">
            <h1 className="m-auto mb-5">Nova Fabrica</h1>
            <h4 className="mb-3">Dados Cadastrais</h4>
            <form novalidate>
              <div className="row">
                <div className="col-md-2 mb-3">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="id"
                    placeholder={fabricaId}
                    defaultValue={fabricaId}
                    disabled
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <label for="nomeReduzido">Nome Reduzido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomeReduzido"
                    placeholder="Nome Reduzido"
                    onChange={(e) => setNomeReduzido(e.target.value)}
                  />
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
                    onChange={(e) => setRazao(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@exemplo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label for="cnpj">
                  CNPJ<span className="text-muted">(somente numeros.)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  placeholder="123560000123"
                  onChange={(e) => setCnpj(e.target.value)}
                />
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
                    onChange={(e) => setMunicipio(e.target.value)}
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
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="00000000"
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label for="logradouro">Logradouro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="logradouro"
                    placeholder="Sitio Granja Nova Safra"
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </div>
              </div>

              <hr className="mb-5" />
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

export default Fabricas;
