import React from "react";

const Comments: React.FC = () => {
    return (
        <section id="tips" className="py-5 bg-light text-dark">
            <div className="container">
                {/* Carousel */}
                <div
                    id="testimonialsCarousel"
                    className="carousel slide mt-5 w-75 mx-auto text-center"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
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
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#testimonialsCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#testimonialsCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Comments;
