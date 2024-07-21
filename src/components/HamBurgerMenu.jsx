import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HamBurgerMenu = () => {
  const cursor = useRef();
  const { contextSafe } = useGSAP();
  const menu = useRef();
  const menuBG = useRef();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  useGSAP(() => {
    var m1 = gsap.timeline();
    m1.to([menu.current, menuBG.current], {
      y: open ? "0%" : "-100%",
      ease: "bounce.out",
      duration: 1.3,
      stagger: {
        amount: 0,
      },
    })
      .from("#nav-tanmay", {
        duration: 1,
        y: -200,
        opacity: 0,
        scale: 0,
        ease: "bounce.out",
      })
      .from("ul li", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        scale: 0,
        ease: "back.out(3)",
      });
  }, [open]);

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
      <div className="h-[25px] w-[30px] fixed z-[100] top-5 right-5" onClick={openMenu}></div>
      <div
        className={`h-[3px] w-[25px] fixed top-6 right-6 transition z-[101] duration-500 opacity-60 ${
          open ? "rotate-45 top-8 bg-black" : "bg-white"
        }`}
        onClick={openMenu}
      />
      <div
        className={`h-[3px] w-[25px] fixed top-9 right-6 transition z-[101] duration-500 opacity-60 ${
          open ? "rotate-[-45deg] top-8 bg-black" : "bg-white"
        }`}
        onClick={openMenu}
      />
      <div
        ref={menuBG}
        className="h-[100vh] w-full bg-[#ffffff37] z-[99] fixed top-0 left-0 right-0 bottom-0 translate-y-[-100%]"
      ></div>
      <div
        ref={menu}
        className="h-[70vh] w-full bg-[#b5b5b5ec] z-[99] fixed top-0 left-0 right-0 bottom-0 shadow-2xl rounded-b-2xl translate-y-[-100%]"
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-6xl pt-6">
          <div id="nav-tanmay">
            <a
              href="/"
              className="big-circle sm:text-7xl font-extrabold transition-all duration-500 font-rubikIso text-[#1d1d1dea] hover:text-blue-800"
            >
              TANMAY SAHU
            </a>
          </div>
          <ul className="flex flex-col justify-center items-center pt-10">
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text, index) => (
              <li key={index} className="list-none">
                <a
                  href={`#${text.toLowerCase()}`}
                  className="big-circle udr-line text-[#1d1d1d] font-bold tracking-wider text-sm sm:text-xl 
                  opacity-30 transition-all duration-300 transform hover:opacity-100 relative"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamBurgerMenu;
