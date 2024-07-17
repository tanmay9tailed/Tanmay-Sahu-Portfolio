import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import starSvg from "../assets/star-svg.svg";
import MySelf from "../components/MySelf";
import ThingsIntrestedIn from "../components/ThingsIntrestedIn";
import MyProjects from "../components/MyProjects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(
    () => {
      var t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 0%",
          end: "top -200%",
          // markers: true,
          pin: true,
          scrub: 2,
        },
      });
      t1.to("#BigSlider", {
        // duration: 1,
        transform: "translateX(-200%)",
      });

      const stars = document.querySelectorAll(".star");
      gsap.fromTo(
        stars,
        { scale: 0, rotation: (i) => (i * 360) / stars.length },
        {
          scale: 1,
          duration: 2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            start: "20% 80%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
          },
        }
      );
    },
    { scope: container }
  );

  // Generate random star positions
  const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const starStyle = {
        position: "absolute",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      stars.push(<img key={i} src={starSvg} alt="star" className="star h-5 z-[0]" style={starStyle} />);
    }
    return stars;
  };

  return (
    <div
      ref={container}
      className="h-screen bg-black overflow-hidden relative"
    >
      {/* {generateStars(50)} */}
      <div id="BigSlider" className="flex">
        <div className="w-screen flex-none">
          <MySelf />
        </div>
        <div className="w-screen flex-none">
          <ThingsIntrestedIn />
        </div>
        <div className="w-screen flex-none">
          <MyProjects />
        </div>
      </div>
    </div>
  );
};

export default About;
