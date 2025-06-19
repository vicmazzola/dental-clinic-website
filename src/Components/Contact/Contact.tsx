import React, {useState, useEffect} from "react";
import {FaArrowUp, FaWhatsapp} from "react-icons/fa";

const Contact: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <section id="contact" className="bg-light text-dark py-5">
            <div className="container text-center">
                <h2 className="mb-4">Entre em Contato</h2>
                <p className="mb-4">
                    Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas!
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                    <a
                        href="https://wa.me/5511970504715"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg rounded-pill"
                    >
                        <FaWhatsapp
                            className="me-2"
                            style={{width: 30, height: 30, objectFit: 'cover'}}

                        /> Agende no WhatsApp
                    </a>
                </div>
            </div>

            {/* Botão Scroll to Top */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-success position-fixed"
                    style={{
                        bottom: "20px",
                        right: "20px",
                        zIndex: 1000,
                        opacity: 0.8,
                    }}
                >
                    <FaArrowUp/>
                </button>
            )}
        </section>
    );
};

export default Contact;
