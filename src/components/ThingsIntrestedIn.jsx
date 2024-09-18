import React, { useRef } from "react";
import java from "../assets/java-logo-1.webp";
import html from "../assets/html-min.webp";
import css from "../assets/css-min.webp";
import js from "../assets/js-min.webp";
import bootstrap from "../assets/bootstrap-small.png";
import git from "../assets/github-min.webp";
import node from "../assets/node-min.webp";
import express from "../assets/express.png";
import mongo from "../assets/mongodb-min.webp";
import gsapImg from "../assets/gsap-min.webp";
import react from "../assets/React-icon.svg.webp";
import lightroom from "../assets/Lightroom.png";
import ps from "../assets/ps-min.webp";
import next from "../assets/next.svg";
import figma from "../assets/figma.png";
import web3 from "../assets/web-3-icon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ThingsIntrestedIn = () => {

  const container = useRef()

  useGSAP(() => {
    var c2 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "0% 70%",
        end: "95% 63%",
        // markers: true,
        scrub: 1
      },
    });
    c2.from(".things", {
      duration: 1,
      y: 100,
      opacity: 0,
    })
    .from(".good", {
      duration: 1,
      opacity: 0,
    },)
    .from(".dev-box img , .dis-box img, .dev-box h4 , .dis-box h4",{
      y: 100,
      opacity: 0,
      scale: 0,
      stagger: 0.15,
      transformOrigin: "left bottom",
    }) 
  },
  { scope: container }
);

  return (
    <div ref={container} className="px-8 pt-10 sm:mt-0 sm:px-36 bg-black">
      <h1 className="things text-5xl sm:text-7xl font-rajdhani font-semibold">
        Things I'm <span className="good">good</span> at
      </h1>
      <h2 className="things text-3xl font-rajdhani font-medium">
        skills, interests, passion and hobbies
      </h2>
      <div className="dev-box pl-4 sm:px-16 pt-4 sm:pt-20">
        <h4 className="text-2xl sm:text-5xl">DEVELOPMENT</h4>
        <div className="flex flex-wrap">
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={java} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Java</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={html} alt="" />
            <span className="hover-text scale-50 sm:scale-100">HTML</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={css} alt="" />
            <span className="hover-text scale-50 sm:scale-100">CSS</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={js} alt="" />
            <span className="hover-text scale-50 sm:scale-100">JavaScript</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={bootstrap} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Bootstrap</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={git} alt="" />
            <span className="hover-text scale-50 sm:scale-100">GitHub</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={node} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Node.js</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={express} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Express</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={mongo} alt="" />
            <span className="hover-text scale-50 sm:scale-100">MongoDB</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={gsapImg} alt="" />
            <span className="hover-text scale-50 sm:scale-100">GSAP</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={react} alt="" />
            <span className="hover-text scale-50 sm:scale-100">React</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={next} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Next.js</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={web3} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Web 3</span>
          </div>
        </div>
      </div>
      <div className="dis-box  pl-4 sm:px-16 pt-4 sm:pt-20">
        <h4 className="text-2xl sm:text-5xl">DESIGN</h4>
        <div className="flex">
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={lightroom} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Lightroom</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={ps} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Photoshop</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={figma} alt="" />
            <span className="hover-text scale-50 sm:scale-100">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsIntrestedIn;
