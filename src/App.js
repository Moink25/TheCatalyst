import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamPage from './components/TeamPage';
import WhatWeDo from './components/WhatWeDo';
import PastEventsPage from './components/PastEventsPage';
import Footer from './components/Footer';
// import TeamPageWithBackground from './components/TeamPageWithBackground';
// import TechStack from './components/TechStack';
// import Projects from './components/Projects';
// import Activities from './components/Activities'
// import Contact from './components/Contact';
// import { Router } from 'react-router-dom';
import './App.css';

function App() {
  return (

  <div>
  <Navbar/>
  <Hero/>
  <TeamPage/>
  <WhatWeDo/>
  <PastEventsPage/>
  <WhatWeDo/>
  <Footer/>
  
  {/* <TeamPageWithBackground/> */}
  {/* <TechStack/>
  <Projects/>
  <Activities/>
  <Contact/> */}
  </div>
 

  );
}

export default App;
