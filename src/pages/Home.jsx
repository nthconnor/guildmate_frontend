import Nav from "../components/Nav"
import HeroSection from "../components/HeroSection";
import Features from "../components/FeaturesSection";
import '../index.css'

function Home () {
    return (
        <div>
            <Nav />
            <HeroSection />
            <Features />
        </div>
    );
}

export default Home;