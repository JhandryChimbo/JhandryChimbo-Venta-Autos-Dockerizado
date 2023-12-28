import Link from "next/link";
export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/censos"
                  className="nav-link active"
                  aria-current="page"
                >
                  Censos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/ninos"
                  className="nav-link active"
                  aria-current="page"
                >
                  Niños
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/cursos"
                  className="nav-link active"
                  aria-current="page"
                >
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/escuela"
                  className="nav-link active"
                  aria-current="page"
                >
                  Escuelas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}