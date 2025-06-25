import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header text-light py-3">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#home">
                        <img
                            src="/favicon-white.png"
                            alt="Logo Dra. Laura Mazzola"
                            className="me-2 header-logo img-fluid"
                            style={{height: 40}}
                        />
                        <span>Dra. Laura Mazzola</span>
                    </a>

                    {/* Hamburger */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Página Inicial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#treatments">
                                    Tratamentos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#clinic">
                                    A Clínica
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tips">
                                    Avaliações
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
