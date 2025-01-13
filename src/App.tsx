import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import './app.css';
import Contact from "./Components/Contact/Contact.tsx";
import Treatments from "./Components/Treatments/Treatments.tsx";
import Clinic from "./Components/Clinic/Clinic.tsx";
import Tips from "./Components/Tips/Tips.tsx";


const App: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Treatments/>
                <Clinic/>
                <Tips/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};
export default App
