import Navbar from "../../components/Navbar";
import {
  doc,
  getDoc,
  increment,
  setDoc,
  updateDoc,
  Timestamp,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Vendas = () => {
  const [clientes, setClientes] = useState("");
  const [fabricas, setFabricas] = useState("");
  const [produtos, setProdutos] = useState("");
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

  useEffect(() => {
    const fetchClientes = async () => {
      let lista = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Clientes"));
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        lista = lista.filter((item) => {
          return item.id !== "contador";
        });
      } catch (err) {
        console.log(err);
      }
      setClientes(lista);
    };
    const fetchFabricas = async () => {
      let lista = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Fabricas"));
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        lista = lista.filter((item) => {
          return item.id !== "contador";
        });
      } catch (err) {
        console.log(err);
      }
      setFabricas(lista);
    };
    const fetchProdutos = async () => {
      let lista = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Produtos"));
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        lista = lista.filter((item) => {
          return item.id !== "contador";
        });
      } catch (err) {
        console.log(err);
      }
      setProdutos(lista);
    };

    fetchClientes();
    fetchFabricas();
    fetchProdutos();
  }, []);

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
        volume,
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
                    {fabricas ? (
                      fabricas.map((fabrica, index) => {
                        return (
                          <option
                            value={fabrica.nomeReduzido}
                            key={fabrica.nomeReduzido}
                            index={index}
                          >
                            {fabrica.nomeReduzido}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </select>
                </div>
                <div className="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input
                    type="date"
                    className="form-control"
                    id="data"
                    onChange={(e) =>
                      setData(Timestamp.fromDate(new Date(e.target.value)))
                    }
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
                    {clientes ? (
                      clientes.map((cliente, index) => {
                        return (
                          <option
                            value={cliente.nomeReduzido}
                            key={cliente.nomeReduzido}
                            index={index}
                          >
                            {cliente.nomeReduzido}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
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
                    {produtos ? (
                      produtos.map((produto, index) => {
                        return (
                          <option
                            value={produto.nome}
                            key={produto.nome}
                            index={index}
                          >
                            {produto.nome}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
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
                    <span className="input-group-text" id="basic-addon3">
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
