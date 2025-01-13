const Header: React.FC = () => {
    return (
        <header className="bg-success text-light py-3">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                {/* Logo e Nome da Clínica */}
                <div className="d-flex align-items-center">
                    <img
                        src="logo.png"
                        alt="Logo Dra. Laura Mazzola"
                        className="me-3"
                        style={{ width: '60px', height: '60px' }}
                    />
                    <div>
                        <h1 className="h4 mb-6 ">Clínica Dra. Laura Mazzola</h1>
                        <p className="b-6">Clínico Geral | Lentes de Contato | Implante | Cirurgias Gengivais</p>
                    </div>
                </div>

                {/* Links de Navegação */}
                <nav className="d-flex align-items-center">
                    <a href="#home" className="text-light text-decoration-none mx-3">
                        Página Inicial
                    </a>
                    <a href="#treatments" className="text-light text-decoration-none mx-3">
                        Tratamentos
                    </a>
                    <a href="#contact" className="text-light text-decoration-none mx-3">
                        Contato
                    </a>
                </nav>

                {/* Botões de Contato */}
                <div className="d-flex align-items-center">
                    <a
                        href="https://wa.me/5511970504715"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light me-2"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="#"
                        className="btn btn-outline-light"
                    >
                        Agendar Consulta
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
