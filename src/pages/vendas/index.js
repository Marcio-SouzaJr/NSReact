import Navbar from "../../components/Navbar";
import { doc, getDoc, increment, setDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Vendas = () => {
  const [vendaId, setVendaId] = useState("");
  const [fabrica, setFabrica] = useState("");
  const [data, setData] = useState("");
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [frete, setFrete] = useState("");
  const [preco, setpreco] = useState("");
  const [volume, setVolume] = useState("");
  const navigate = useNavigate();
  const contador = doc(db, "Vendas", "contador");
  const docSnap = getDoc(contador);
  const getId = async () => {
    if (docSnap) {
      const id = (await docSnap).data().contagem;
      setVendaId(id);
    } else {
      console.log("No such document!");
    }
  };

  getId();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Vendas", `${vendaId}`), {
        fabrica,
        data,
        cliente,
        produto,
        frete,
        preco,
        volume
      });
      alert("Venda Cadastrada com Sucesso");
      updateDoc(contador, { contagem: increment(1) });
      navigate("/selection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="row container-fluid py-5 m-0 page-base-form">
        <div className="row pt-4 pb-5">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-2 rounded">
            <h1 className="m-auto mb-5">Nova Venda</h1>
            <h4 className="mb-3">Dados da Venda</h4>
            <form className="needs-validation" novalidate>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="contrato">Contrato</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="contrato"
                    placeholder={vendaId}
                    defaultValue={vendaId}
                    disabled
                  />
                </div>
                <div className="w-50 mb-3">
                  <label for="nome">Fabrica</label>
                  <select
                    className="form-select"
                    id="nome"
                    onChange={(e) => setFabrica(e.target.value)}
                  >
                    <option selected>Selecionar Fabrica</option>
                    <option value="Oleoplan Nordeste">Oleoplan Nordeste</option>
                    <option value="Cargill Barreiras">Cargill Barreiras</option>
                  </select>
                </div>
                <div className="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input
                    type="date"
                    className="form-control"
                    id="data"
                    onChange={(e) => setData(Timestamp.fromDate(new Date(e.target.value)))}
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-50 mb-3">
                  <label for="cliente">Cliente</label>
                  <select
                    className="form-select"
                    id="cliente"
                    onChange={(e) => setCliente(e.target.value)}
                  >
                    <option selected>Cliente</option>
                    <option value="Jose de Almeida Cordeiro">Jose de Almeida Cordeiro</option>
                    <option value="Plantel Agro">Plantel Agro</option>
                    <option value="Cleiton Fabiano">Cleiton Fabiano</option>
                    <option value="Adelbar Portes">Adelbar Portes</option>
                  </select>
                </div>
                <div className="w-50 mb-3">
                  <label for="produto">Produto</label>
                  <select
                    className="form-select"
                    id="produto"
                    onChange={(e) => setProduto(e.target.value)}
                  >
                    <option selected>Produto</option>
                    <option value="Farelo de Soja Granel 45%">Farelo de Soja Granel 45%</option>
                    <option value="Farelo de Soja Granel 46%">Farelo de Soja Granel 46%</option>
                    <option value="Farelo de Soja Ensacado">Farelo de Soja Ensacado</option>
                    <option value="Casca de Soja">Casca de Soja</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="frete">Frete</label>
                  <select
                    className="form-select"
                    id="frete"
                    onChange={(e) => setFrete(e.target.value)}
                  >
                    <option selected>Frete</option>
                    <option value="CIF">CIF</option>
                    <option value="FOB">FOB</option>
                  </select>
                </div>

                <div className="mb-3 w-50">
                  <label for="preco">Preço</label>
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      id="basic-addon3"
                    >
                      R$
                    </span>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="preco"
                      onChange={(e) => setpreco(parseFloat(e.target.value))}
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
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
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

export default Vendas;
