import { Link } from "react-router-dom";
import logoColor from "../../assets/logo-color.png"
import logoWhite from "../../assets/logo-white.png"

const Home = () => {
  return (
    <>
      <div class="home-base">
        <div class="home-center d-flex justify-content-center align-items-center">
          <div
            id="left"
            class="inner-center col-6 rounded-start d-none d-lg-block"
          >
            <div class="hero-image">
              <div class="hero-overlay">
                <div class="position-absolute top-0 start-50 translate-middle-x hero-logo pt-5">
                  <img id="home-logo-lg" src={logoWhite} alt="123165" />
                </div>
              </div>
            </div>
          </div>
          <div
            id="right"
            class="inner-center col-12 col-lg-6 rounded-end d-flex flex-column align-items-center justify-content-center bg-white"
          >
            <div class=" d-lg-none pt-4">
              <img
                id="home-logo-sm"
                src={logoColor}
                alt="Logo color small"
              />
            </div>
            <div class="pt-2 mb-3">
              <h1>Login</h1>
            </div>
            <div class="form col-8 mt-5 mb-2">
              <input
                type="email"
                id="email"
                class="form-control input-color"
                placeholder="Email@email.com"
              />
            </div>
            <div class="form col-8 mb-5">
              <input
                type="password"
                id="senha"
                class="form-control input-color"
                placeholder="Senha"
              />
              <p class="text-center">
                Esqueceu a sua senha? clique{" "}
                <span class="text-primary fw-bolder">aqui!</span>
              </p>
            </div>
            <Link to={"/selection"}>
            <button type="button" class="botao btn btn-primary mb-5">
              Entrar
            </button>
            </Link>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <button class="contact me-3" onClick={() => window.location.href = 'mailto:novasafra.fiscal@gmail.com'}>
                  <img
                    id="gmail-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button class="contact" onClick={() => window.location.href = 'https://wa.me/5581996970001'}>
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
