import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HamBurgerMenu = () => {
  const menu = useRef();
  const menuBG = useRef();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  useGSAP(() => {
    gsap.to([menu.current, menuBG.current], {
      y: open ? "0%" : "-100%",
      ease: "bounce.out",
      duration: 1.3,
      stagger: {
        amount: 0,
      },
    });
  }, [open]);

  return (
    <>
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
            <a
              href="/"
              className="big-circle sm:text-4xl font-extrabold transition-all duration-500 font-rubikIso text-[#1d1d1dea]"
            >
              TANMAY
            </a>
          <ul className="">
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text, index) => (
              <li key={index} className="list-none">
                <a
                  href={`#${text.toLowerCase()}`}
                  className=" text-[#1d1d1d] font-bold tracking-wider text-sm sm:text-base 
                opacity-30 transition-all duration-300 transform"
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
