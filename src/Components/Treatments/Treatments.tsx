const Treatments: React.FC = () => {
    return (
        <section id="treatments" className="py-5 bg-light text-dark">
            <div className="container text-center">
                <h2 className="mb-4">Nossos Tratamentos</h2>
                <ul className="list-unstyled text-start mx-auto" style={{maxWidth: "600px"}}>
                    <li className="mb-3">Clínico Geral</li>
                    <li className="mb-3">Lentes de Contato</li>
                    <li className="mb-3">Implantes</li>
                    <li className="mb-3">Cirurgias Gengivais</li>
                </ul>
            </div>
        </section>
    );
};

export default Treatments;
