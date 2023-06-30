import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const RelVendas = () => {
  const [embarques, setEmbarques] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let lista = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Embarques"));
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        lista = lista.filter((item) => {
          return item.id !== "contador";
        });
      } catch (err) {
        console.log(err);
      }
      setEmbarques(lista);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="table-base">
        <div className=" row py-4 px-3 d-flex align-items-around container-fluid "></div>
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
              {embarques ? (
                embarques.sort().map((embarque) => {
                  console.log(embarque)
                  const date = embarque.data.toDate()
                  return (
                    <tr>
                      <td>{embarque.cliente}</td>
                      <td>{embarque.contrato}</td>
                      <td>{embarque.volume}</td>
                      <td>{embarque.placa}</td>
                      <td>{embarque.nf}</td>
                      <td>{date.toLocaleDateString()}</td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RelVendas;
