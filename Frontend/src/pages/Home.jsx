import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProgBox from '../components/ProgBox';
import BeginTest from '../components/BeginTest';
import UExperienceBox from "../components/UExperienceBox.jsx";
import Test from "../LevelQuiz/test.jsx"

function Home() {
    return (
        <div className="min-h-screen flex flex-col dark:bg-gray-900">
            <Header/>
            <Hero/>
            <main className="flex-grow container mx-auto px-4 py-8">
                <ProgBox/>
                <BeginTest/>
                <UExperienceBox/>

            </main>
            <Footer/>
        </div>
    );
}

export default Home;
