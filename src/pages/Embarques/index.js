import Navbar from "../../components/Navbar";
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { CheckLg } from "react-bootstrap-icons";

const Embarques = () => {
  const [clientes, setClientes] = useState("");
  const [contratos, setContratos] = useState("");
  const [contratosFiltrados, setContratosFiltrados] = useState("");
  const [emabrqueId, setEmbarqueId] = useState("");
  const [cliente, setCliente] = useState("");
  const [contrato, setContrato] = useState("");
  const [volume, setVolume] = useState("");
  const [placa, setPlaca] = useState("");
  const [nf, setNf] = useState("");
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const contador = doc(db, "Embarques", "contador");
  const docSnap = getDoc(contador);
  const getId = async () => {
    if (docSnap) {
      const id = (await docSnap).data().contagem;
      setEmbarqueId(id);
    } else {
      console.log("No such document!");
    }
  };

  getId();

  useEffect(() => {
    const fetchClientes = async () => {
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
      setClientes(lista);
    };

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

    fetchClientes();
    fetchContratos();
    const uploadFile = () => {
      const storageRef = ref(storage, nf);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Embarques", `${emabrqueId}`), {
        cliente,
        contrato,
        volume,
        placa,
        nf,
        data,
      });
      alert("Embarque Cadastrado com Sucesso");
      updateDoc(contador, { contagem: increment(1) });
      navigate("/selection");
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarContratos = (nome) => {
    let contratoLocal = [];
    if (nome === "cliente") {
      contratoLocal = contratos;
    } else {
      contratoLocal = contratos.filter((contrato) => contrato.cliente === nome);
    }
    return setContratosFiltrados(contratoLocal);
  };

  return (
    <>
      <Navbar />

      <div className="row container-fluid py-5 m-0 page-base-form">
        <div className="row py-5">
          <div className="col-md-7 m-auto bg-white card shadow p-3 my-5 rounded">
            <h1 className="m-auto mb-5">Novo Embarque</h1>
            <h4 className="mb-3">Dados do Embarque</h4>
            <form className="needs-validation" novalidate>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="cliente">Cliente</label>
                  <select
                    className="form-select"
                    id="cliente"
                    onChange={(e) => {
                      setCliente(e.target.value);
                      filtrarContratos(e.target.value);
                    }}
                  >
                    <option selected value={"cliente"}>
                      Cliente
                    </option>
                    {clientes ? (
                      clientes.map((cliente, index) => {
                        return (
                          <option
                            value={cliente.nomeCompleto}
                            key={cliente.nomeReduzido}
                            index={index}
                          >
                            {cliente.nomeReduzido}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </select>
                </div>
                <div className="w-50 mb-3">
                  <label for="contrato">Contrato</label>
                  <select
                    className="form-select"
                    id="contrato"
                    onChange={(e) => setContrato(e.target.value)}
                  >
                    <option selected>Contratos</option>
                    {contratosFiltrados ? (
                      contratosFiltrados.map((contrato, index) => {
                        return (
                          <option
                            value={contrato.id}
                            key={contrato.id}
                            index={index}
                          >
                            {`${contrato.id} - ${contrato.produto} ${contrato.frete}`}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </select>
                </div>

                <div className="mb-3 w-25">
                  <label for="volume" className="form-label mb-0">
                    Volume
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="volume"
                      placeholder="49.5"
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                    />
                    <span className="input-group-text" id="basic-addon3">
                      T
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="w-25 mb-3">
                  <label for="contrato">Placa</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="placa"
                    placeholder="Placa"
                    onChange={(e) => setPlaca(e.target.value)}
                  />
                </div>
                <div className="w-50 mb-3">
                  <label for="nf">Nota Fiscal</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="nf"
                    placeholder="166591"
                    onChange={(e) => setNf(e.target.value)}
                  />
                </div>
                <div className="w-25 mb-3">
                  <label for="contrato">Data</label>
                  <input
                    type="date"
                    className="form-control"
                    id="data"
                    onChange={(e) =>
                      setData(Timestamp.fromDate(new Date(e.target.value)))
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
              <div align="center" className="py-2">
                <button
                  className="btn btn-primary btn-lg btn-block px-5"
                  type="submit"
                  onClick={handleClick}
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Embarques;
