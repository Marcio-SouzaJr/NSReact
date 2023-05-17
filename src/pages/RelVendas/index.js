import Navbar from "../../components/Navbar";
import { contrato } from "../../mocks/contrato";

const RelVendas = () => {
    
  const contratos = contrato;

  return (
    <>
      <Navbar />
      <div className=" row py-4 px-5 d-flex justify-content-center">
        <div className="col-6">
          {/* <select
            className="form-select"
          >
            {clientes.sort()?.map((clientes, index) => {
              return (
                <option value={clientes} key={clientes} index={index}>
                  {clientes}
                </option>
              );
            })}
          </select> */}
        </div>
      </div>
      <div className="row mx-3 border shadow">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Contrato</th>
              <th scope="col">Fabrica</th>
              <th scope="col">Data</th>
              <th scope="col">Cliente</th>
              <th scope="col">Produto</th>
              <th scope="col">Frete</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
            {contratos.sort().map((contratos) => {
              return (
                <tr>
                  <td>{contratos.id}</td>
                  <td>{contratos.fabrica}</td>
                  <td>{contratos.data}</td>
                  <td>{contratos.cliente}</td>
                  <td>{contratos.produto}</td>
                  <td>{contratos.frete}</td>
                  <td>{contratos.preco}</td>
                  <td>{contratos.volume}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RelVendas;
