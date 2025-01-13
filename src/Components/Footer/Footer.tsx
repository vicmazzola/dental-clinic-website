const Footer: React.FC = () => {
    return (
        <footer className="bg-success text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Contato */}
                    <div className="col-md-6">
                        <h5>Contato</h5>
                        <p>
                            Telefone: (11) 97050-4715<br />
                            E-mail: contato@exemplo.com<br />
                            Endereço: Rua Exemplo, 123 - São Paulo, SP
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="col-md-6 text-md-end">
                        <h5>Siga-nos</h5>
                        <a
                            href="https://www.instagram.com/la_mazzola/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light me-3"
                        >
                            Instagram
                        </a>
                        <a href="#" className="text-light">
                            Facebook
                        </a>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <p className="m-0">© 2025 Dra. Laura Mazzola - Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
