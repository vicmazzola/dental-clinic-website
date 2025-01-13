const Clinic: React.FC = () => {
    return (
        <section id="clinic" className="py-5 bg-light text-dark">
            <div className="container text-center">
                <h2 className="mb-4">Sobre a Clínica</h2>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="clinic-image1.jpg"
                                alt="Sala de atendimento"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Instalações Modernas</h5>
                                <p className="card-text">
                                    Equipamentos modernos e confortáveis para garantir o melhor atendimento.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="clinic-image2.jpg"
                                alt="Equipe"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Equipe Qualificada</h5>
                                <p className="card-text">
                                    Nossa equipe é composta por especialistas com vasta experiência.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="clinic-image3.jpg"
                                alt="Consultório"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Ambiente Aconchegante</h5>
                                <p className="card-text">
                                    Criamos um ambiente acolhedor para que você se sinta confortável.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinic;
