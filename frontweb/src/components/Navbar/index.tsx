import './styles.css'
import 'bootstrap/js/src/collapse.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className='container-fluid'>
        <a href="/" className='nav-logo-text'>
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggler navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='carrostop-navbar'>
          <ul className='navbar-nav offset-md-2 main-menu'>
            <li>
              <a href="/" className='active'>Home</a>
            </li>
            <li>
              <a href="/catalog" className='active'>Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
