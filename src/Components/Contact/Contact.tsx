const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-light text-dark py-5">
            <div className="container text-center">
                <h2 className="mb-4">Entre em Contato</h2>
                <p className="mb-4">
                    Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas!
                </p>
                <div className="d-flex justify-content-center">
                    <a
                        href="https://wa.me/5511970504715"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success me-3"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="#"
                        className="btn btn-outline-success"
                    >
                        Agendar Consulta
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
