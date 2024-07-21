import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./pages/Loding"; // Ensure the filename is correct
import { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import String from "./components/String";
import ThingsInterestedIn from "./components/ThingsIntrestedIn"; // Ensure the filename is correct
import MyProjects from "./components/MyProjects";
import HamBurgerMenu from "./components/HamBurgerMenu";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4900); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {isMobile ? <HamBurgerMenu /> : <Navbar />}
      <Home />
      <Intro />
      <String />
      <About />
      <ThingsInterestedIn />
      <MyProjects />
      {/* <Projects /> */}
      <String />
      <Contact />
    </main>
  );
}
