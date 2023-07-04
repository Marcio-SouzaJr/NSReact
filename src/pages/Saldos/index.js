import Navbar from "../../components/Navbar";
import { sortObjects, getSum, filtrarContratos } from "../../utils";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Saldos = () => {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [contratos, setContratos] = useState([]);
  const [nomeFiltrado, setNomeFiltrado] = useState("");
  const [contratosFiltrados, setContratosFiltrados] = useState(contratos);
  const [produtoFiltrado, setProdutoFiltrado] = useState("");
  const filtrados = filtrarContratos(
    nomeFiltrado,
    contratos,
    produtoFiltrado
  );
  useEffect(() => {
    const fetchCliente = async () => {
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
    const fetchContratos = async () => {
      let lista = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Vendas"));
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        lista = lista.filter((item) => {
          return item.id !== "contador";
        });
      } catch (err) {
        console.log(err);
      }
      setContratos(lista);
    };
    fetchCliente();
    fetchProdutos();
    fetchContratos();
    
    setContratosFiltrados(filtrados);
    console.log(contratos)
  }, [nomeFiltrado, produtoFiltrado]);

  const totais = getSum(contratosFiltrados);


  return (
    <>
      <Navbar />
      <div className="table-base">
        <div className=" row py-4 px-3 d-flex align-items-around container-fluid ">
          <div className="col-6">
            <select
              className="form-select"
              onChange={(e) => setNomeFiltrado(e.target.value)}
            >
              <option value={""}>Filtrar por nome</option>
              {clientes.sort()?.map((cliente, index) => {
                return (
                  <option
                    value={cliente.nomeReduzido}
                    key={cliente.nomeReduzido}
                    index={index}
                  >
                    {cliente.nomeReduzido}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-6 ">
            <select
              className="form-select"
              onChange={(e) => setProdutoFiltrado(e.target.value)}
            >
              <option value={""}>Filtrar por produto</option>
              {produtos.sort()?.map((produto, index) => {
                return (
                  <option value={produto.nome} key={produto.nome} index={index}>
                    {produto.nome}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row mx-3 mb-2 border shadow table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Produto</th>
                <th scope="col">Data Contrato</th>
                <th scope="col">Contrato</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Preço</th>
                <th scope="col">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {contratosFiltrados.sort(sortObjects).map((contratos) => {
                const date = contratos.data.toDate();
                return (
                  <tr>
                    <td>{contratos.cliente}</td>
                    <td>{contratos.produto}</td>
                    <td>{date.toLocaleDateString()}</td>
                    <td>{contratos.id}</td>
                    <td>{contratos.volume}</td>
                    <td>{contratos.preco}</td>
                    <td>{contratos.volume}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-around mb-3">
          <div className="card card-total border-2 col-sm-12 col-md-2 my-2 mx-1">
            <div className="card-body">
              <h5 className="card-title">{`Total Farelo de Soja:  ${
                totais[0] + totais[1] + totais[2]
              }T `}</h5>
            </div>
          </div>
          <div className="card card-total border-2 col-sm-12 col-md-2 my-2 mx-1">
            <div className="card-body card-saldo">
              <h5 className="card-title">{`Total Farelo de Soja Granel: ${
                totais[0] + totais[1]
              }T `}</h5>
            </div>
          </div>
          <div className="card card-total border-2 col-sm-12 col-md-2 my-2 mx-1">
            <div className="card-body">
              <h5 className="card-title">{`Total Farelo de Soja Ensacado:  ${totais[2]}T `}</h5>
            </div>
          </div>
          <div className="card card-total border-2 col-sm-12 col-md-2 my-2 mx-1">
            <div className="card-body">
              <h5 className="card-title">{`Total Casca:  ${totais[3]}T `}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saldos;
