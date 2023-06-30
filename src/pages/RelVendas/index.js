import Navbar from "../../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const RelVendas = () => {
  const [contratos, setContratos] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" row py-4 px-5 d-flex justify-content-center"></div>
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
            {contratos ? (contratos.sort().map((contratos) => {
              const date = contratos.data.toDate()
              console.log(date)
              return (
                <tr>
                  <td>{contratos.id}</td>
                  <td>{contratos.fabrica}</td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>{contratos.cliente}</td>
                  <td>{contratos.produto}</td>
                  <td>{contratos.frete}</td>
                  <td>{contratos.preco}</td>
                  <td>{contratos.volume}</td>
                </tr>
              );
            })) : (<></>)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RelVendas;
