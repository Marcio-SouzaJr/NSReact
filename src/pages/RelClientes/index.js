import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { cliente } from "../../mocks/cliente";
import { filtrarCliente } from "../../utils";

const RelClientes = () => {
    const clientes = [];
    const dadosClientes = cliente
    const [nomeSelecionado, setNomeSelecionado] = useState("")
    const [clienteFiltrado, setClienteFiltrado] = useState(cliente[0])

  cliente.map((cliente) => {
    return clientes.push(cliente.nomeReduzido);
  });


  useEffect(() => {
    const filtrado = filtrarCliente(nomeSelecionado, dadosClientes)
    setClienteFiltrado(filtrado)
  }, [nomeSelecionado])

  
  return (
    <>
      <Navbar />
      <div className=" row py-4 px-5 d-flex justify-content-center">
        <div className="col-6">
          <select className="form-select" onChange={(e) => {setNomeSelecionado(e.target.value)}}>
            {clientes.sort()?.map((clientes, index) => {
              return (
                <option value={clientes} key={clientes} index={index}>
                  {clientes}
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
              <td>{clienteFiltrado.nomeCompleto}</td>
            </tr>
            <tr>
              <th scope="row">Tipo de Cadastro:</th>
              <td>{clienteFiltrado.cadastro}</td>
            </tr>
            <tr>
              <th scope="row">Numero do Cadastro:</th>
              <td>{clienteFiltrado.numeroCadastro}</td>
            </tr>
            <tr>
              <th scope="row">Inscrição Estadual:</th>
              <td>{clienteFiltrado.inscricaoEstadual}</td>
            </tr>
            <tr>
              <th scope="row">E-mail:</th>
              <td>{clienteFiltrado.email}</td>
            </tr>
            <tr>
              <th scope="row">Telefone:</th>
              <td>{clienteFiltrado.telefone}</td>
            </tr>
            <tr>
              <th scope="row">Setor de Atuação:</th>
              <td>{clienteFiltrado.setor}</td>
            </tr>
            <tr>
              <th scope="row">Cidade:</th>
              <td>{clienteFiltrado.enderecoCobranca.municipio}</td>
            </tr>
            <tr>
              <th scope="row">Estado:</th>
              <td>{clienteFiltrado.enderecoCobranca.estado}</td>
            </tr>
            <tr>
              <th scope="row">CEP:</th>
              <td>{clienteFiltrado.enderecoCobranca.cep}</td>
            </tr>
            <tr>
              <th scope="row">Logradouro:</th>
              <td>{clienteFiltrado.enderecoCobranca.logradouro}</td>
            </tr>
            <tr>
              <th scope="row">Prazo de Pagamento:</th>
              <td>{clienteFiltrado.prazo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RelClientes;
