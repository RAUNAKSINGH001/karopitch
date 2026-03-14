import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import WhoCanApply from './components/WhoCanApply'
import Investors from './components/Investors'
import FeaturedStartups from './components/FeaturedStartups'
import AboutKaroStartup from './components/AboutKaroStartup'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <HowItWorks />
                <WhoCanApply />
                <Investors />
                <FeaturedStartups />
                <AboutKaroStartup />
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default App
