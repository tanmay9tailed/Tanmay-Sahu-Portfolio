import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const cursor = useRef();
  const { contextSafe } = useGSAP();

  // GSAP animation on component mount
  useGSAP(() => {
    gsap.from(".left-nav, .right-nav li", {
      y: -250,
      duration: 1,
      opacity: 0,
      stagger: 0.15,
      ease: "back.out(3)",
    });
  });

  // Handle cursor movement with GSAP
  const currss = contextSafe((e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.8,
      ease: "back.out(3)",
    });
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      currss(e);

      // Handle hovering class on cursor
      const crsr = document.querySelector(".crsr");
      const bigcircle = document.querySelectorAll(".big-circle");
      bigcircle.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          crsr.classList.add("hovering");
        });
        element.addEventListener("mouseleave", () => {
          crsr.classList.remove("hovering");
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currss]);
  

  return (
    <>
      <div ref={cursor} className="crsr fixed z-10"></div>
      <nav className="fixed w-full h-14 z-50 flex justify-between items-center text-2xl pt-6">
        <div className="left-nav ml-7">
          <a
            href="/"
            className="big-circle text-4xl font-extrabold hover:text-blue-700 transition-all duration-500 font-rubikIso text-white"
          >
            TANMAY
          </a>
        </div>
        <ul className="right-nav mr-7 flex space-x-5">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text, index) => (
            <li key={index} className="list-none">
              <a
                href={`#${text.toLowerCase()}`}
                className="big-circle udr-line text-white font-bold tracking-wider text-base 
                opacity-30 transition-all duration-300 transform hover:opacity-100"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
