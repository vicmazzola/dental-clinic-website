import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import './app.css';


const App: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
            </main>
            <Footer/>
        </>
    );
};
export default App
