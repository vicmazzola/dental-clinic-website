import {FaTooth, FaWhatsapp} from 'react-icons/fa';
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
                    style={{width: 250, height: 250, objectFit: 'cover'}}
                />


                {/* Title & Lead */}
                <h3 className="display-8 fw-bold mt-2">Te ajudo encontrar seu melhor sorriso!</h3>

                <p className="lead mt-3">
                    Atendimento odontológico de qualidade, com foco no seu bem-estar.
                </p>
                <a
                    href="https://wa.me/5511970504715"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        backgroundColor: '#25D366',
                        color: 'white',
                        padding: '10px 15px',
                        borderRadius: '50px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        zIndex: 1000,
                        textDecoration: 'none'
                    }}
                >
                    <FaWhatsapp
                        style={{
                        width: 24,
                            height: 24,
                            right: "20px",
                    }} />
                </a>



                {/* Mobile-only Carousel */}
                <div className="d-block d-sm-none mt-5 mb-5">
                    <div
                        id="heroCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="3000"
                    >
                        <div className="carousel-indicators">
                            {[0, 1, 2, 3].map(i => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? 'active' : ''}
                                    aria-current={i === 0 ? 'true' : undefined}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {['/img1.jpg','/img2.jpg','/img3.jpg','/img4.jpg'].map((src, i) => (
                                <div key={i} className={`carousel-item${i===0?' active':''}`}>
                                    <img src={src} className="d-block w-100" alt={`Paciente ${i+1}`} />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Próximo</span>
                        </button>
                    </div>
                </div>

                <div className="d-none d-sm-flex justify-content-center flex-wrap gap-4 mt-5 mb-5">
                    {['/img1.jpg','/img2.jpg','/img3.jpg','/img4.jpg'].map((src, i) => (
                        <div key={i} className="card custom-card">
                            <img
                                src={src}
                                className="custom-gallery-img"
                                alt={`Paciente ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>




                {/* Buttons */}
                <div className="hero-btns d-flex justify-content-center flex-wrap gap-4 mt-5">
                    <a href="#treatments" className="btn btn-success btn-lg rounded-pill">
                        <FaTooth
                            className="me-2"
                            style={{width: 22, height: 22, objectFit: 'cover'}}


                        /> Tratamentos
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Hero;
