import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import starSvg from "../assets/star-svg.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Intro = () => {
  const container = useRef();

  useGSAP(
    () => {
      var t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "40% 90%",
          end: "120% 100%",
          // markers: true,
          scrub: 1,
        },
      });
      t1.from(".heading h2", {
        duration: 1,
        opacity: 0,
        scale: 0,
        // x: 500,
        y: 500,
        ease: "slow(0.7,0.7,false)",
      })
        .from("h1", {
          duration: 1,
          opacity: 0,
          scale: 0,
          // x: -500,
          y: 500,
          ease: "slow(0.7,0.7,false)",
        })
        .from(".para p", {
          duration: 1,
          opacity: 0,
          scale: 0,
          y: 100,
          ease: "slow(0.7,0.7,false)",
        });

      // Animation for stars
      const stars = document.querySelectorAll(".star");
      gsap.fromTo(
        stars,
        { scale: 0, rotation: (i) => i * 360 / stars.length },
        {
          scale: 1,
          duration: 2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            start: "20% 80%",
            end: "120% 80%",
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
      stars.push(
        <img
          key={i}
          src={starSvg}
          alt="star"
          className="star h-5"
          style={starStyle}
        />
      );
    }
    return stars;
  };
  

  return (
    <>
      <div
        ref={container}
        className="sm:h-screen bg-black text-white font-rubikIso relative overflow-hidden pt-32 sm:pt-0"
      >
        <div className="h-full flex flex-col items-center justify-center gap-20 font-bold">
          <div className="heading">
            <h2 className="text-2xl sm:text-7xl text-center">NAMASTE</h2>
          </div>
          <h1 className=" text-4xl sm:text-9xl text-center">
            Be Ready For
            <br />
            The Adventure
          </h1>
          <div className="para text-center text-base sm:text-3xl text-slate-400 opacity-80 font-bold">
            <p>
              Created with <span className="love">LOVE</span> ❤️
              <br />
              BY : TANMAY
            </p>
          </div>
        </div>
        {/* {generateStars(50)} */}
      </div>
    </>
  );
};

export default Intro;
