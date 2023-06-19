import logoLogo from "../assets/logo-color-logo.png";

const Navbar = () => {
  return (
    <nav id="navbar" class="container-fluid d-flex border-bottom">
    <img src={logoLogo}  alt="logo" srcset="" id="navbar-logo" />
    <div id="navbar-links" class="container-fluid d-flex justify-content-around my-auto">
      <a href="/" class="navbar-link">Cliente</a>
      <a href="/" class="navbar-link">Fornecedores</a>
      <a href="/" class="navbar-link">Embarques</a>
      <a href="/" class="navbar-link">Saldos</a>
      <a href="/" class="navbar-link">Relatorios</a>
    </div>
  </nav>
  );
};

export default Navbar;
