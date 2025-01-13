const Hero: React.FC = () => {
    return (
        <section
            className="bg-light text-dark py-5"
            style={{
                backgroundImage: 'url("hero-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container text-center">
                {/* Avatar */}
                <img
                    src="avatar.png"
                    alt="Avatar da Dra. Laura Mazzola"
                    className="rounded-circle mb-4"
                    style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                />

                {/* Title */}
                <h1 className="display-5 fw-bold">Transformamos Sorrisos</h1>
                <p className="lead mt-3">
                    Atendimento odontológico de qualidade, com foco no seu bem-estar.
                </p>

                {/* Buttons */}
                <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
                    <a
                        href="#treatments"
                        className="btn btn-success btn-lg me-3"
                    >
                        Conheça nossos Tratamentos
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-outline-success btn-lg"
                    >
                        Agende sua Consulta
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
