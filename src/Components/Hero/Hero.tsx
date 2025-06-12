import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-light text-dark py-5">
            <div className="container text-center">

                {/* Avatar */}
                <img
                    src="/avatar.png"
                    alt="Avatar da Dra. Laura Mazzola"
                    className="rounded-circle mb-4"
                    style={{ width: 250, height: 250, objectFit: 'cover' }}
                />

                {/* Title & Lead */}
                <h1 className="display-5 fw-bold">Transformamos Sorrisos</h1>
                <p className="lead mt-3">
                    Atendimento odontológico de qualidade, com foco no seu bem-estar.
                </p>


                {/* Carousel */}
                <div id="heroCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {[0,1,2,3].map(i => (
                            <button
                                key={i}
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide-to={i}
                                className={i===0 ? 'active' : ''}
                                aria-current={i===0 ? 'true' : undefined}
                                aria-label={`Slide ${i+1}`}
                            />
                        ))}
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img1.jpg" className="d-block w-100" alt="Paciente 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img2.jpg" className="d-block w-100" alt="Paciente 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img3.jpg" className="d-block w-100" alt="Paciente 3" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img4.jpg" className="d-block w-100" alt="Paciente 4" />
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

                {/* Buttons */}
                <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
                    <a href="#treatments" className="btn btn-success btn-lg me-3">
                        Conheça nossos Tratamentos
                    </a>
                    <a href="#contact" className="btn btn-outline-success btn-lg">
                        Agende sua Consulta
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
