
import './App.css';
import { About } from './Components/About/About';
import { Campus } from './Components/Campus/Campus';
import { Contact } from './Components/Contact/Contact';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Programs } from './Components/Programs/Programs';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Title } from './Components/Title/Title';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className='container'>
      <Title subTitle="Our Program" title="What we offer"/>
    <Programs/>
    <About/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus/>
    <Title subTitle="TESTIMONIALS" title="What Students Say"/>
    <Testimonials/>
    <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
     </div>
     
    </div>
  );
}

export default App;
