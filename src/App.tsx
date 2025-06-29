import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import './App.css';
import Contact from "./Components/Contact/Contact.tsx";
import Treatments from "./Components/Treatments/Treatments.tsx";
import Clinic from "./Components/Clinic/Clinic.tsx";
import Comments from "./Components/Tips/Comments.tsx";
import AboutMe from "./Components/About-me/About-me.tsx";


const App: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Clinic/>
                <AboutMe/>
                <Treatments/>
                <Comments/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};
export default App
