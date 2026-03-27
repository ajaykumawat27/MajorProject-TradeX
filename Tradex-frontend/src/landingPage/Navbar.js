import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom py-3 px-5"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to={"/"}>
          <i className="fa-solid fa-chart-line text-success" style={{ fontSize: "35px"}}></i>
          <img
            src="media/images/latest_logo_tradex.png"
            style={{ width: "200px" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" style={{ marginRight: "40px" }}>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to={"/product"}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
