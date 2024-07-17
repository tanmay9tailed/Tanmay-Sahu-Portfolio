import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./pages/Loding"; 
import { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import String from "./components/String";
import ThingsIntrestedIn from "./components/ThingsIntrestedIn";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4900); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Navbar />
      <Home />
      <Intro />
      <String />
      <About />
      <ThingsIntrestedIn />
      <Projects />
      <Contact />
    </main>
  );
}
