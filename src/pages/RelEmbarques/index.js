import Navbar from "../../components/Navbar";
import { embarque } from "../../mocks/embarque";

const RelVendas = () => {
  const embarques = embarque;

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
              <th scope="col">Cliente</th>
              <th scope="col">Contrato</th>
              <th scope="col">Volume</th>
              <th scope="col">Placa</th>
              <th scope="col">Nota</th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {embarques.sort().map((embarque) => {
              return (
                <tr>
                  <td>{embarque.cliente}</td>
                  <td>{embarque.contrato}</td>
                  <td>{embarque.volume}</td>
                  <td>{embarque.placa}</td>
                  <td>{embarque.nota}</td>
                  <td>{embarque.data}</td>
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
