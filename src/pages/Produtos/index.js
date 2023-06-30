import { useState } from "react";
import Navbar from "../../components/Navbar";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Produtos = () => {
  const [produtoId, setProdutoId] = useState("");
  const [nome, setNome] = useState("");
  const [proteina, setProteina] = useState("");
  const [umidade, setUmidade] = useState("");
  const [solubilidade, setSolubilidade] = useState("");
  const navigate = useNavigate();
  const contador = doc(db, "Produtos", "contador");
  const docSnap = getDoc(contador);
  const getId = async () => {
    if (docSnap) {
      const id = (await docSnap).data().contagem;
      setProdutoId(id);
    } else {
      console.log("No such document!");
    }
  };

  getId();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Produtos", `${produtoId}`), {
        nome,
        proteina,
        umidade,
        solubilidade
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
      <div className="row container-fluid pt-5 pb-5 m-0 page-base-form">
        <div className="row pb-5">
          <div className="col-md-7 m-auto bg-white card shadow p-3 mb-3  rounded">
          <h1 className="m-auto mb-5">Novo Produto</h1>
            <h4 className="mb-3">Dados Cadastrais</h4>
            <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-2 mb-3">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="id"
                    placeholder={produtoId}
                    defaultValue={produtoId}
                    disabled
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <label for="nome">Nome do Produto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome detalhado do produto"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Níveis de Garantia</h4>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="proteina">
                    Proteina<span className="text-muted">(Percentual)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="proteina"
                    placeholder="Proteina"
                    onChange={(e) => setProteina(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="umidade">Umidade</label>
                  <span className="text-muted">(Percentual)</span>
                  <input
                    type="text"
                    className="form-control"
                    id="umidade"
                    placeholder="Umidade"
                    onChange={(e) => setUmidade(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="solubilidade">Solubilidade</label>
                  <input
                    type="text"
                    className="form-control"
                    id="solubilidade"
                    placeholder="Solubilidade"
                    onChange={(e) => setSolubilidade(e.target.value)}
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

export default Produtos;
