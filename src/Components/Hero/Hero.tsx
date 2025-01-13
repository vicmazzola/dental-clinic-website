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
                    style={{width: '250px', height: '250px', objectFit: 'cover'}}
                />

                {/* Title */}
                <h1 className="display-5 fw-bold">Transformamos Sorrisos</h1>
                <p className="lead mt-3">
                    Atendimento odontológico de qualidade, com foco no seu bem-estar.
                </p>

                {/* Carousel */}
                <div id="testimonialsCarousel" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p>"Atendimento impecável, minha saúde bucal está em ótimas mãos!"</p>
                            <h6>- Cliente Satisfeito</h6>
                        </div>
                        <div className="carousel-item">
                            <p>"Melhor experiência com lentes de contato dentais, recomendo muito!"</p>
                            <h6>- Outro Cliente</h6>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>


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
