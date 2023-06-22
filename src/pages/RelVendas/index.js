import Navbar from "../../components/Navbar";
import { contrato } from "../../mocks/contrato";

const RelVendas = () => {
    
  const contratos = contrato;
  const dias = Array.from({length: 31}, (_, i) => i + 1)
  const meses = Array.from({length: 12}, (_, i) => i + 1)

  return (
    <>
      <Navbar />
      <div className=" row py-4 px-5 d-flex justify-content-center">
      <div className="col-6">
          <select>
          <option value={""}>Dia</option>
          {dias.map((dia, index) => {
            return (
              <option value={dia} key={dia} index={index}>
                  {dia}
                </option>
            )
          })}
          </select>
          <select>
          <option value={""}>Mes</option>
          {meses.map((mes, index) => {
            return (
              <option value={mes} key={mes} index={index}>
                  {mes}
                </option>
            )
          })}
          </select>
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
