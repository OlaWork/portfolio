import {Header} from "./layout/header/Header";
import {Hero} from "./layout/main/hero/Hero";
import {Skills} from "./layout/main/skills/Skills";
import {Experience} from "./layout/main/experience/Experience";
import {Blog} from "./layout/main/blog/Blog";
import {Testimony} from "./layout/main/testimony/Testimony";
import {Portfolio} from "./layout/main/portfolio/Portfolio";
import {Slogan} from "./layout/main/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Skills/>
            <Experience/>
            <Testimony/>
            <Blog/>
            <Portfolio/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

