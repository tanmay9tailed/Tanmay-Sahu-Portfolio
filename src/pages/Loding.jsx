import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Loading = () => {
  const container = useRef();
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();
  const windowWidth = window.innerWidth;
  
  useGSAP(() => {
    var t2 = gsap.timeline();
    t2.from(".loading span", {
      duration: 2,
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      ease: "bounce.out",
    })
    .to(".loading #middle",{
      delay: 0.5,
      duration: 4,
      x: windowWidth>600?3900:1500,
      scale: 300
    });
  })


  // useEffect(() => {
  //   const circles = [circle1, circle2, circle3];

  //   circles.forEach((circle, index) => {
  //     gsap.to(circle.current, {
  //       height: 100,
  //       width: 100,
  //       scale: 50,
  //       delay: 3 + index * 0.2,
  //       duration: 3,
  //       ease: "power1.inOut",
  //     });
  //   });
  // }, []);

  return (
    <div ref={container} className="h-screen w-full bg-white text-black relative overflow-hidden">
      <div className="loading h-full w-full absolute z-[100] flex items-center justify-center sm:text-9xl text-5xl font-rubikIso scale-150 font-extrabold">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span id="middle">C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>
      <div
        ref={circle1}
        className="absolute z-[101] bg-black rounded-full"
        style={{
          width: "0",
          height: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
        }}
      ></div>
      <div
        ref={circle2}
        className="absolute z-[101] bg-black rounded-full"
        style={{
          width: "0",
          height: "0",
          top: "20%",
          left: "20%",
        }}
      ></div>
      <div
        ref={circle3}
        className="absolute z-[101] bg-black rounded-full"
        style={{
          width: "0",
          height: "0",
          top: "80%",
          left: "90%",
        }}
      ></div>
    </div>
  );
};

export default Loading;
