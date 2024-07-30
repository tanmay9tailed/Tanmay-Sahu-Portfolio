import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./pages/Loding"; // Ensure the filename is correct
import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import String from "./components/String";
import ThingsInterestedIn from "./components/ThingsIntrestedIn"; // Ensure the filename is correct
import MyProjects from "./components/MyProjects";
import HamBurgerMenu from "./components/HamBurgerMenu";
import axios from "axios";

const BIN_ID = "66a88d35e41b4d34e4191289";
const API_KEY = "$2a$10$/KH6gOencJfT1OJaSKmLWuJs9yKiGszDboPN1LyfDJe53CwUrA6Ei";
const MASTER_KEY = "$2a$10$unLVpOyC/g2N5cWD9oFZN.Sv7YTjYkXFJvglGA.BVlPyHxxleF68.";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [count, setCount] = useState(0);

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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchAndIncrementCount = async () => {
      try {
        let sessionCount = sessionStorage.getItem('visitCount');
        if (sessionCount) {
          setCount(parseInt(sessionCount, 10));
        } else {
          const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            headers: {
              "X-Master-Key": MASTER_KEY,
              "X-Access-Key": API_KEY,
            },
          });

          const currentCount = response.data.record.count;
          setCount(currentCount + 1);
          sessionStorage.setItem('visitCount', currentCount + 1);

          await axios.put(
            `https://api.jsonbin.io/v3/b/${BIN_ID}`,
            { count: currentCount + 1 },
            {
              headers: {
                "Content-Type": "application/json",
                "X-Master-Key": MASTER_KEY,
                "X-Access-Key": API_KEY,
              },
            }
          );
        }
      } catch (error) {
        console.error("Error fetching or updating visit count:", error);
      }
    };

    fetchAndIncrementCount();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {/* {isMobile ? <HamBurgerMenu /> : <Navbar />} */}
      <HamBurgerMenu />
      <Home />
      <Intro />
      <String />
      <About />
      <ThingsInterestedIn />
      <MyProjects />
      <String />
      <Contact count={count} />
    </main>
  );
}
