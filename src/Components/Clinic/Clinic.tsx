const Clinic: React.FC = () => {
    return (
        <section id="clinic" className="py-5 bg-light text-dark">
            <div className="container py-5">
                <h2 className="mb-4 text-center">Sobre a Clínica</h2>

                {/* Ambiente Aconchegante */}
                <div className="row align-items-center flex-md-row-reverse">
                    {/* Mobile-only Carousel */}
                    <div className="d-block d-sm-none mt-4 mb-4">
                        <div
                            id="clinicCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="3000"
                        >
                            <div className="carousel-indicators">
                                {[0, 1, 2].map((i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        data-bs-target="#clinicCarousel"
                                        data-bs-slide-to={i}
                                        className={i === 0 ? 'active' : ''}
                                        aria-current={i === 0 ? 'true' : undefined}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="carousel-inner rounded">
                                {['/reception-counter.jpg', '/dental-office.jpg', 'table-clinic.jpg'].map((src, i) => (
                                    <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                                        <img src={src} className="d-block w-100" alt={`Ambiente ${i + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#clinicCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#clinicCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>

                        {/* Mobile text */}
                        <div className="text-start mt-3">
                            <h4>Ambiente Aconchegante</h4>
                            <p className="lead">
                                Criamos um ambiente acolhedor para que você se sinta confortável.
                            </p>
                        </div>
                    </div>

                    {/* Desktop: gallery + text side by side */}
                    <div className="d-none d-sm-flex row align-items-center mt-4 mb-5">
                        <div className="col-md-6 text-start">
                            <h4 className="mt-4">Ambiente Aconchegante</h4>
                            <p className="lead">
                                Criamos um ambiente acolhedor para que você se sinta confortável.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-3">
                                {['/reception-counter.jpg', '/dental-office.jpg', 'table-clinic.jpg'].map((src, i) => (
                                    <div className="col-6">
                                        <img
                                            src={src}
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                            alt={`Imagem ${i + 1}`}
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Instalações Modernas */}
                <div className="row align-items-center mb-5">
                    {/* Mobile-only Carousel */}
                    <div className="d-block d-sm-none mt-4 mb-4">
                        <div
                            id="modernClinicCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="3000"
                        >
                            <div className="carousel-indicators">
                                {[0, 1, 2].map((i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        data-bs-target="#modernClinicCarousel"
                                        data-bs-slide-to={i}
                                        className={i === 0 ? 'active' : ''}
                                        aria-current={i === 0 ? 'true' : undefined}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="carousel-inner rounded">
                                {['/dental-chair.jpg', '/raio-x.png', '/raio-x3.jpg'].map((src, i) => (
                                    <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                                        <img src={src} className="d-block w-100" alt={`Instalação ${i + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#modernClinicCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#modernClinicCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>
                        {/* Mobile text */}
                        <div className="text-start mt-3">
                            <h4>Instalações Modernas</h4>
                            <p className="lead">
                                Equipamentos modernos e confortáveis para garantir o melhor atendimento.
                            </p>
                        </div>
                    </div>

                    {/* Desktop: gallery + text side by side */}
                    <div className="d-none d-sm-flex row align-items-center mb-5">
                        <div className="col-md-6">
                            <div className="row g-3">
                                {['/dental-chair.jpg', '/raio-x.png', '/raio-x3.jpg'].map((src, i) => (
                                    <div className="col-6">
                                        <img
                                            src={src}
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                            alt={`Imagem ${i + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 text-start">
                            <h4 className="mt-4">Instalações Modernas</h4>
                            <p className="lead">
                                Equipamentos modernos e confortáveis para garantir o melhor atendimento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinic;
