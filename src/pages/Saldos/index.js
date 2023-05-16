import Navbar from "../../components/Navbar";
import { cliente } from "../../mocks/cliente";
import { produto } from "../../mocks/produto";
import { contrato } from "../../mocks/contrato";
import { sortObjects, getSum, filtrarContratos } from "../../utils";
import { useState } from "react";
import { useEffect } from "react";

const Saldos = () => {
  const clientes = [];
  const produtos = [];
  const contratos = [];
  const [nomeFiltrado, setNomeFiltrado] = useState("");
  const [contratosFiltrados, setContratosFiltrados] = useState(contratos);
  const [produtoFiltrado, setProdutoFiltrado] = useState("")

  
  contrato.map((contrato) => {
    return contratos.push(contrato);
  });

  cliente.map((cliente) => {
    return clientes.push(cliente.nomeReduzido);
  });

  produto.map((produto) => {
    return produtos.push(produto.nomeProduto);
  });

  const totais = getSum(contratosFiltrados);


  useEffect(() => {
    const filtrados = filtrarContratos(nomeFiltrado, contratos, produtoFiltrado);
    setContratosFiltrados(filtrados);
  }, [nomeFiltrado, produtoFiltrado]);




  return (
    <>
      <Navbar />
      <div className=" row py-4 px-3 d-flex align-items-around">
        <div className="col-6">
          <select
            className="form-select"
            onChange={(e) => setNomeFiltrado(e.target.value)}
          >
            <option value={""}>Filtrar por nome</option>
            {clientes.sort()?.map((clientes, index) => {
              return (
                <option value={clientes} key={clientes} index={index}>
                  {clientes}
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
            {produtos.sort()?.map((produtos, index) => {
              return (
                <option value={produtos} key={produtos} index={index}>
                  {produtos}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row mx-3 mb-2 border shadow ">
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
              return (
                <tr>
                  <td>{contratos.cliente}</td>
                  <td>{contratos.produto}</td>
                  <td>{contratos.data}</td>
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
      <div className="d-flex justify-content-around mb-3">
        <div className="card border-2 col-xm-6 col-lg-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{`Total Farelo de Soja:  ${
              totais[0] + totais[1] + totais[2]
            }T `}</h5>
          </div>
        </div>
        <div className="card border-2 col-xm-6 col-lg-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{`Total Farelo de Soja 45%: ${totais[0]}T `}</h5>
          </div>
        </div>
        <div className="card border-2 col-xm-6 col-lg-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{`Total Farelo de Soja 46%:  ${totais[1]}T `}</h5>
          </div>
        </div>
        <div className="card border-2 col-xm-6 col-lg-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{`Total Farelo de Soja Ensacado:  ${totais[2]}T `}</h5>
          </div>
        </div>
        <div className="card border-2 col-xm-6 col-lg-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{`Total Casca:  ${totais[3]}T `}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saldos;
