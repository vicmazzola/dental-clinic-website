const Hero: React.FC = () => {
    return (
        <section className="bg-light text-dark py-5">
            <div className="container text-center">
                {/* Carousel */}
                <div id="heroCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/logo1.jpg" className="d-block w-100" alt="Logo" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img1.jpg" className="d-block w-100" alt="Paciente sorrindo" />
                        </div>
                        <div className="carousel-item">
                            <video className="d-block w-100" controls>
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="carousel-item">
                            <img src="/img2.jpg" className="d-block w-100" alt="Paciente escovando" />
                        </div>
                        <div className="carousel-item">
                            <video className="d-block w-100" controls>
                                <source src="/videos/video2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>

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
