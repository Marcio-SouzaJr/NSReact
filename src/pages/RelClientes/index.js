import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const RelClientes = () => {
  const [lista, setLista] = useState([]);
  const [cliente, setCliente] = useState([
    {
      nomeCompleto: "Nome Completo",
      email: "email",
      telefone: "telefone",
      estado: "estado",
      inscricao: "inscricao",
      logradouro: "logradouro",
      municipio: "municipio",
      prazo: "prazo",
      // setor: [{id: "setor", nome: "setor"}, {id: "setor", nome: "setor"}],
      cep: "cep",
      documento: "documento",
    },
  ]);
  const clienteUpdate = (nome) => {
    const novaLista = lista.filter((item) => {
      return item.nomeReduzido === nome;
    });
    setCliente(novaLista);
    console.log(cliente[0].setor);
  };

  useEffect(() => {
    const fetchData = async () => {
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
      setLista(lista);
    };
    fetchData();
  }, [cliente]);

  return (
    <>
      <Navbar />
      <div className="table-base">
        <div className=" row py-4 px-5 d-flex justify-content-center container-fluid">
          <div className="col-6">
            <select
              className="form-select"
              onChange={(e) => {
                clienteUpdate(e.target.value);
              }}
            >
              {lista.sort()?.map((clientes, index) => {
                return (
                  <option
                    value={clientes.nomeReduzido}
                    key={clientes.nomeReduzido}
                    index={index}
                  >
                    {clientes.nomeReduzido}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row mx-3 border shadow">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cliente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Nome:</th>
                <td>{cliente[0].nomeCompleto}</td>
              </tr>
              <tr>
                <th scope="row">Numero do Cadastro:</th>
                <td>{cliente[0].documento}</td>
              </tr>
              <tr>
                <th scope="row">Inscrição Estadual:</th>
                <td>{cliente[0].inscricao}</td>
              </tr>
              <tr>
                <th scope="row">E-mail:</th>
                <td>{cliente[0].email}</td>
              </tr>
              <tr>
                <th scope="row">Telefone:</th>
                <td>{cliente[0].telefone}</td>
              </tr>
              {/* <tr>
                <th scope="row">Setor de Atuação:</th>
                <td>{cliente[0].setor.id}</td>
              </tr> */}
              <tr>
                <th scope="row">Cidade:</th>
                <td>{cliente[0].municipio}</td>
              </tr>
              <tr>
                <th scope="row">Estado:</th>
                <td>{cliente[0].estado}</td>
              </tr>
              <tr>
                <th scope="row">CEP:</th>
                <td>{cliente[0].cep}</td>
              </tr>
              <tr>
                <th scope="row">Logradouro:</th>
                <td>{cliente[0].logradouro}</td>
              </tr>
              <tr>
                <th scope="row">Prazo de Pagamento:</th>
                <td>{cliente[0].prazo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RelClientes;
