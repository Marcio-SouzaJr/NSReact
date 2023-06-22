import Navbar from "../../components/Navbar";
import { embarque } from "../../mocks/embarque";

const RelVendas = () => {
  const embarques = embarque;
  // const dias = Array.from({length: 31}, (_, i) => i + 1)
  // const meses = Array.from({length: 12}, (_, i) => i + 1)

  return (
    <>
      <Navbar />
    <div className="table-base">
      <div className=" row py-4 px-3 d-flex align-items-around container-fluid ">
        {/* <div className="col-6">
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
        </div> */}
      </div>
    <div className="row mx-3 border shadow mt-5">
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
    </div>
    </>
  );
};

export default RelVendas;
