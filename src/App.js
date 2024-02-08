import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/projects/Portfolio';
import Footer from './components/footer/Footer';
import Qualification from './components/qualifications/qualification';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
    <Header />
    <main className='main'>

      <Home />
      <About />
      <Qualification />
      <Skills />
      <Portfolio/>
      <Contact />
      
    </main>
    <Footer/>
    </>
  );
}

export default App;
