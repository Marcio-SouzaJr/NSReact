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
  const [fabricaLogradouro, setFabricaLogradouro] = useState("");
  const [fabricaMunicipio, setFabricaMunicipio] = useState("");
  const [fabricaEstado, setFabricaEstado] = useState("");
  const [fabricaCep, setFabricaCep] = useState("");

  const [data, setData] = useState("");

  const [cliente, setCliente] = useState("");
  const [clienteDocumento, setClienteDocumento] = useState("");
  const [clienteInscricao, setClienteInscricao] = useState("");
  const [clienteLogradouro, setClienteLogradouro] = useState("");
  const [clienteMunicipio, setClienteMunicipio] = useState("");
  const [clienteEstado, setClienteEstado] = useState("");
  const [clienteCep, setClienteCep] = useState("");
  const [clientePrazo, setClientePrazo] = useState("");

  const [produto, setProduto] = useState("");
  const [produtoProteina, setProdutoProteina] = useState("");
  const [produtoSolubilidade, setProdutoSolubilidade] = useState("");
  const [produtoUmidade, setProdutoUmidade] = useState("");

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
        fabricaLogradouro,
        fabricaMunicipio,
        fabricaEstado,
        fabricaCep,
        data,
        cliente,
        clienteDocumento,
        clienteInscricao,
        clienteLogradouro,
        clienteMunicipio,
        clienteEstado,
        clienteCep,
        clientePrazo,
        produto,
        produtoProteina,
        produtoSolubilidade,
        produtoUmidade,
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

  const handleFabrica = (id, fabricas) => {
    let fabrica = "";
    fabrica = fabricas.filter((item) => {
      return item.id === id;
    });
    setFabrica(fabrica[0].razao);
    setFabricaLogradouro(fabrica[0].logradouro);
    setFabricaMunicipio(fabrica[0].municipio);
    setFabricaEstado(fabrica[0].estado);
    setFabricaCep(fabrica[0].cep);
  };
  const handleCliente = (id, clientes) => {
    let cliente = "";
    cliente = clientes.filter((item) => {
      return item.id === id;
    });
    setCliente(cliente[0].nomeCompleto);
    setClienteDocumento(cliente[0].documento);
    setClienteInscricao(cliente[0].inscricao);
    setClienteLogradouro(cliente[0].logradouro);
    setClienteMunicipio(cliente[0].municipio);
    setClienteEstado(cliente[0].estado);
    setClienteCep(cliente[0].cep);
    setClientePrazo(cliente[0].prazo);
  };
  const handleProduto = (id, produtos) => {
    let produto = "";
    produto = produtos.filter((item) => {
      return item.id === id;
    });
    setProduto(produto[0].nome);
    setProdutoProteina(produto[0].proteina);
    setProdutoSolubilidade(produto[0].solubilidade);
    setProdutoUmidade(produto[0].umidade);
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
                    onChange={(e) => handleFabrica(e.target.value, fabricas)}
                  >
                    <option selected>Selecionar Fabrica</option>
                    {fabricas ? (
                      fabricas.map((fabrica, index) => {
                        return (
                          <option
                            value={fabrica.id}
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
                    onChange={(e) => handleCliente(e.target.value, clientes)}
                  >
                    <option selected>Cliente</option>
                    {clientes ? (
                      clientes.map((cliente, index) => {
                        return (
                          <option
                            value={cliente.id}
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
                    onChange={(e) => handleProduto(e.target.value, produtos)}
                  >
                    <option selected>Produto</option>
                    {produtos ? (
                      produtos.map((produto, index) => {
                        return (
                          <option
                            value={produto.id}
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
