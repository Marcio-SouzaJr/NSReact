import { Link, useNavigate } from "react-router-dom";
import logoColor from "../../assets/logo-color.png";
import logoWhite from "../../assets/logo-white.png";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/selection");
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  };

  return (
    <>
      <div className="home-base">
        <div className="home-center d-flex justify-content-center align-items-center">
          <div
            id="left"
            className="inner-center col-6 rounded-start d-none d-lg-block"
          >
            <div className="hero-image">
              <div className="hero-overlay">
                <div className="position-absolute top-0 start-50 translate-middle-x hero-logo pt-5">
                  <img id="home-logo-lg" src={logoWhite} alt="123165" />
                </div>
              </div>
            </div>
          </div>
          <div
            id="right"
            className="inner-center col-12 col-lg-6 rounded-end d-flex flex-column align-items-center justify-content-center bg-white"
          >
            <div className=" d-lg-none pt-4">
              <img id="home-logo-sm" src={logoColor} alt="Logo color small" />
            </div>
            <div className="pt-2 mb-3">
              <h1>Login</h1>
            </div>
            <div className="form col-8 mt-5 mb-2">
              <input
                type="email"
                id="email"
                className="form-control input-color"
                placeholder="Email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form col-8 mb-5">
              <input
                type="password"
                id="senha"
                className="form-control input-color"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              {err && (
                <span className="login-error">Login e/ou senha incorretos</span>
              )}
              <p className="text-center">
                Esqueceu a sua senha? clique{" "}
                <Link to={"https://wa.me/5581996970001"}>
                  <span className="text-primary fw-bolder">aqui!</span>
                </Link>
              </p>
            </div>
            <button
              type="button"
              className="botao btn btn-primary mb-5"
              onClick={handleLogin}
            >
              Entrar
            </button>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <button
                  className="contact me-3"
                  onClick={() =>
                    (window.location.href = "mailto:novasafra.fiscal@gmail.com")
                  }
                >
                  <img
                    id="gmail-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  className="contact"
                  onClick={() =>
                    (window.location.href = "https://wa.me/5581996970001")
                  }
                >
                  <img
                    id="whatsapp-logo"
                    src="https://www.dsmeletro.com/wp-content/uploads/2020/04/whatsapp-icon-transparent-png-6.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
