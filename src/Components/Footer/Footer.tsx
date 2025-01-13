import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const Footer: React.FC = () => {
    return (
        <footer className="footer text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Contato */}
                    <div className="col-md-6">
                        <h5>Contato</h5>
                        <p>
                            Telefone: (11) 97050-4715<br />
                            E-mail: contato@exemplo.com<br />
                            Endereço: Av. 9 de Julho, 3575 - Sala 416 - Anhangabaú, Jundiaí - SP, 13208-056
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="col-md-6 text-md-end">
                        <h5>Redes Sociais</h5>
                        <a
                            href="https://www.instagram.com/la_mazzola/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light me-3"
                        >
                            <FaInstagram size={32} />
                        </a>
                        <a href="#" className="text-light">
                            <FaFacebookSquare size={32} />

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
