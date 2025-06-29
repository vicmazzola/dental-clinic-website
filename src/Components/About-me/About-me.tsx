const Clinic: React.FC = () => {
    return (
        <section id="about-me" className="py-5 bg-light text-dark">
            {/* About me */}
            <div className="container py-5">
                <h2 className="mb-4 text-center">Sobre Mim</h2>
                <div className="row align-items-center">
                    <div className="col-md-4 mb-3">
                        <img src="/avatar.png" alt="Dra Laura" className="img-fluid rounded-circle shadow" />
                    </div>
                    <div className="col-md-8 text-start">
                        <h4>Dra. Laura Mazzola</h4>
                        <p className="lead">
                            Minha paixão pela odontologia surgiu ao ver as dificuldades da minha avó com a dentadura.
                        </p>
                        <p>
                            Quero proporcionar a todos a alegria de um belo sorriso. Dedico-me a fazer a diferença,
                            capacitando as pessoas a expressar felicidade através de sorrisos radiantes.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Clinic;
