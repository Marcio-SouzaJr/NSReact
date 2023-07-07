import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import logo from "../../assets/logo-color.png";
import Navbar from "../../components/Navbar";

const Contratos = () => {
  const [contratos, setContratos] = useState([]);
  const [contratoId, setContratoId] = useState("0000");
  const [fabrica, setFabrica] = useState("");
  const [fabricaLogradouro, setFabricaLogradouro] = useState("");
  const [fabricaCep, setFabricaCep] = useState("");
  const [fabricaMunicipio, setFabricaMunicipio] = useState("");
  const [fabricaEstado, setFabricaEstado] = useState("");
  const [prazo, setPrazo] = useState("");
  const [volume, setVolume] = useState("");
  const [preco, setPreco] = useState("");
  const [clienteNome, setClienteNome] = useState("");
  const [clienteDocumento, setClienteDocumento] = useState("");
  const [clienteInscricao, setClienteInscricao] = useState("");
  const [clienteLogradouro, setClienteLogradouro] = useState("");
  const [clienteMunicipio, setClienteMunicipio] = useState("");
  const [clienteEstado, setClienteEstado] = useState("");
  const [clienteCep, setClienteCep] = useState("");
  const [produto, setProduto] = useState("");
  const [produtoProteina, setProdutoProteina] = useState("");
  const [produtoUmidade, setProdutoUmidade] = useState("");
  const [produtoSolubilidade, setProdutoSolubilidade] = useState("");
  const [frete, setFrete] = useState("");
  const [data, setData] = useState("");
  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    setData(today)
  };

  useEffect(() => {
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

    fetchContratos();
  }, []);

  const handleContrato = (id, contratos) => {
    let contrato = "";
    contrato = contratos.filter((item) => {
      return item.id === id;
    });
    setContratoId(contrato[0].id);
    setFabrica(contrato[0].fabrica);
    setFabricaLogradouro(contrato[0].fabricaLogradouro);
    setFabricaCep(contrato[0].fabricaCep);
    setFabricaMunicipio(contrato[0].fabricaMunicipio);
    setFabricaEstado(contrato[0].fabricaEstado);
    setPrazo(contrato[0].clientePrazo);
    setVolume(contrato[0].volume);
    setPreco(contrato[0].preco);
    setClienteNome(contrato[0].cliente);
    setClienteDocumento(contrato[0].clienteDocumento);
    setClienteInscricao(contrato[0].clienteInscricao);
    setClienteLogradouro(contrato[0].clienteLogradouro);
    setClienteMunicipio(contrato[0].clienteMunicipio);
    setClienteEstado(contrato[0].clienteEstado);
    setClienteCep(contrato[0].clienteCep);
    setProduto(contrato[0].produto);
    setProdutoProteina(contrato[0].produtoProteina);
    setProdutoUmidade(contrato[0].produtoUmidade);
    setProdutoSolubilidade(contrato[0].produtoSolubilidade);
    setFrete(contrato[0].frete);
    getDate()
  };






  return (
    <>
    <Navbar />
      <div className="no-print home-base w-50 bg-light">
        <div className="home-center d-flex flex-column flex-md-row justify-content-center align-items-center bg-secondary">
        <select
          name="contrato"
          id="contrato"
          className=" col-3 col-6"
          onChange={(e) => {
            handleContrato(e.target.value, contratos);
          }}
        >
          <option value="selecionar contrato">Selecionar Contrato</option>
          {contratos.sort()?.map((contrato, index) => {
            return (
              <option value={contrato.id} key={contrato.id} index={index}>
                {`${contrato.id} - ${contrato.cliente}`}
              </option>
            );
          })}
        </select>
        <button class="btn btn-primary btn-md btn-block fw-bold col-6 ms-md-2 mt-2 " id="botao" onClick={() => {
          window.print()
        }}>
          Gerar contrato
        </button>
        </div>
      </div>
      <div className="print">
        <div className="container-fluid d-flex justify-content-between align-items-center pagina">
          <img className="logo" src={logo} alt="" srcset="" />
          <h3 className="titulo px-1 text-center col-6">
            CONTRATO DE CONFIRMAÇÃO DE NEGÓCIO
          </h3>
          <div className="numeracao text-center col-3">
            CONTRATO N° <span class="fw-bold">{contratoId}</span>
          </div>
        </div>
        <div className="partes d-flexflex-column lh-1">
          <p className="fw-bold">
            Presente Instrumento Particular de Compra e Venda de farelo de soja:
          </p>
          <h6>Vendedor:</h6>
          <p>
            {`${fabrica}, ${fabricaLogradouro}, ${fabricaMunicipio}/${fabricaEstado} CEP: ${fabricaCep}, CPF/CNPJ: 13.463.913/0003-58`}
          </p>
          <h6>Comprador:</h6>
          <p className="lh-1">
            {`DADOS PARA EMISSÃO DE DOCUMENTAÇÃO FISCAL: ${clienteNome} CPF/CNPJ: ${clienteDocumento}. IE: ${clienteInscricao}. ${clienteLogradouro} - ${clienteMunicipio}/${clienteEstado} CEP: ${clienteCep}`}
          </p>
          <p>
            <span className="fw-bold lh-1">Pagamento: </span>
            {`Com Boleto bancário
            com vencimento para ${prazo}`}
            .
          </p>
          <p>
            <span className="fw-bold lh-1">Quantidade e Descição: </span>
            {`${volume}.000KG de ${produto}`}
          </p>
        </div>
        <div className="detalhes d-flex flex-wrap">
          <div className="detalhe col-4">
            <span className="fw-bold">Preço:</span>
            {`R$ ${preco},00/ton`}
          </div>
          <div className="detalhe col-4">
            <span className="fw-bold">Total:</span>
            {`R$ ${preco * volume},00`}
          </div>
          <div className="detalhe col-4">
            <span className="fw-bold">Impostos(PIS/COFINS):</span>
            Insento
          </div>
          <div className="detalhe col-4">
            <span className="fw-bold">ICMS:</span>
            Incluso no preço
          </div>
          <div className="detalhe col-6">
            <span className="fw-bold">Destinação do Produto:</span>
            Fabricação de Ração
          </div>
          <div class="detalhe col-12">
            <span class="fw-bold">Prazo de Retirada:</span>
            Um mes após data de fechamento do contrato.
          </div>
        </div>
        <div className="qualidade d-flex">
          <p className="fw-bold me-3">Qualidade:</p>
          <div className="col-6">
            <table className="table table-bordered tabela-qualidade">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Proteina</th>
                  <th scope="col">Umidade</th>
                  <th scope="col">Solubilidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">%</th>
                  <td>{`Min. ${produtoProteina}%`}</td>
                  <td>{`Max. ${produtoUmidade}%`}</td>
                  <td>{`Max. ${produtoSolubilidade}%`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="ms-4">
            <span class="fw-bold">Frete:</span>
            {frete}
          </p>
        </div>
        <div class="liberacao lh-1">
          <p>
            <span class="fw-bold">Liberação do Carregamento: </span> O
            carregamento só será efetuado mediante o cadastro atualizado,
            autorização de carregamento, comprovante de deposito e contrato
            assinado, enviados antecipadamente para e-mail:
            MARIA.SOCORRO@OLEOPLAN.COM.BR
          </p>
        </div>
        <div class="horarios lh-1">
          <p>
            <span class="fw-bold">Horarios de Embarques: </span> FARELO GRANEL:
            Segunda a Sexta das 8:00 as 17:00h. FARELO ENSACADO: Segunda a Sexta
            das 8:00 às 16:00h conforme agendamento.
            <span class="fw-bold">OBS:</span> Na data do carregamento, o veículo
            deve chegar na fábrica até no máximo as 09:00 horas da manhã.
          </p>
        </div>
        <div class="atraso lh-1">
          <p>
            <span class="fw-bold">Atraso de Retirada: </span> fica acordado
            entre as partes que incidirão despesas de armazenagem no percentual
            de 20% sobre o saldo valor do contrato. Nesse caso, o vendedor
            emitira boleto no valor do montante devido, com prazo de 5(cinco)
            dias para pagamento. Se houver inadimplemento serão acrescidos multa
            de 2% e juros moratórios
          </p>
        </div>
        <div class="letras-pequenas lh-1">
          <p>
            <span class="fw-bold">
              EMISSÃO/ENCERRAMENTO DE MANIFESTO ELETRÔNICO DE DOCUMENTOS FISCAIS
              MDFe
            </span>
            : Quando emitido pelo VENDEDOR, é de responsabilidade do CORRETOR e
            do COMPRADOR informar pelos meios disponíveis de contato ao VENDEDOR
            sobre a finalização da descarga do produto no destino, para que o
            VENDEDOR proceda o encerramento do processo de movimentação de
            mercadoria, imediatamente após a conclusão. Quando não houver a
            informação da descarga, e corridos 3 dias úteis após a emissão do
            documento fiscal, o MDFe será encerrado automaticamente pelo
            VENDEDOR. Em caso de sinistro do veículo ou carga, que impeça a
            descarga do produto no destino em até 3 dias úteis, é de
            responsabilidade do CORRETOR e do COMPRADOR informar ao VENDEDOR a
            necessidade de manter o MDF-e não encerrado pelo número de dias
            necessários. As fiscalizações e devidas multas geradas pela falta de
            informação ao VENDEDOR quanto ao encerramento do MDF-e de
            transporte, FICA sob responsabilidade do COMPRADOR.{" "}
            <span class="fw-bold">FORO:</span> As partes obrigam-se por si,
            herdeiros e ou sucessores a bem cumprir todas as cláusulas deste
            Instrumento e elegem o Foro da Comarca de Porto Alegre/RS, para
            dirimir eventuais controvérsias decorrentes deste Contrato.
            CONDIÇÕES DO CAMINHÃO: É de responsabilidade do fornecedor de
            farelo, no ato do carregamento, a inspeção do compartimento de carga
            do caminhão e só liberar a operação se o mesmo estiver seco, limpo e
            higienizado, sem vestígios de carga anterior, sem risco de
            contaminação, sem transportar junto a outros materiais e com a lona
            íntegra, sem avarias, rasgos, furos ou acúmulo de água. Sendo que os
            veículos que não cumprirem com os requisitos não serão liberados
            para carregamento.
            <span class="fw-bold">
              O Embarque estará sujeito á alteração sem aviso prévio caso ocorra
              imprevistos na fábrica. Para efetuar o carregamento as
              documentações do motorista e caminhão obrigatoriamente devem estar
              regularizadas.
            </span>
            <br />
          </p>
        </div>
        <div class="assinaturas d-flex flex-wrap">
          <div class="assinatura col-6">
            <input
              type="text"
              class="signature col-9 mt-3"
              placeholder={fabrica}
            />
          </div>
          <div class="assinatura col-6">
            <input
              type="text"
              class="signature col-9 mt-3"
              placeholder={clienteNome}
            />
          </div>
          <div class="assinatura col-6">
            <input
              type="text"
              class="signature col-9 mt-4"
              placeholder="Ronaldo Carlos Silva"
            />
          </div>
          <div class="assinatura col-6">
            <input
              type="text"
              class="signature col-9 mt-4"
              placeholder="Marcio Elisangelo de Souza Junior"
            />
          </div>
        </div>
        <div class="data-absolute position-absolute bottom-0 end-0">
          {`Recife ${data}`}
        </div>
      </div>
    </>
  );
};

export default Contratos;
