
import { useState } from 'react';
import './App.css';
import { About } from './Components/About/About';
import { Campus } from './Components/Campus/Campus';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Programs } from './Components/Programs/Programs';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Title } from './Components/Title/Title';
import { VideoPlayer } from './Components/VideoPlayer/VideoPlayer';


function App() {
  const [playState,setPlayState]=useState(false)
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className='container'>
      <Title subTitle="Our Program" title="What we offer"/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus/>
    <Title subTitle="TESTIMONIALS" title="What Students Say"/>
    <Testimonials/>
    <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
