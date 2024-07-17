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
        start: "0% 50%",
        end: "70% 50%",
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
    .from(".dev-box img , .dis-box img",{
      y: 100,
      opacity: 0,
      scale: 0,
      stagger: 0.15,
    }) 
  },
  { scope: container }
);

  return (
    <div ref={container} className="px-36">
      <h1 className="things text-7xl font-rajdhani font-semibold">
        Things I'm <span className="good">good</span> at
      </h1>
      <h2 className="things text-3xl font-rajdhani font-medium">
        skills, interests, passion and hobbies
      </h2>
      <div className="dev-box px-16 pt-20">
        <h4 className="text-5xl">DEVELOPMENT</h4>
        <div className="flex flex-wrap">
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={java} alt="" />
            <span className="hover-text">Java</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={html} alt="" />
            <span className="hover-text">HTML</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={css} alt="" />
            <span className="hover-text">CSS</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={js} alt="" />
            <span className="hover-text">JavaScript</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={bootstrap} alt="" />
            <span className="hover-text">Bootstrap</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={git} alt="" />
            <span className="hover-text">GitHub</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={node} alt="" />
            <span className="hover-text">Node.js</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={express} alt="" />
            <span className="hover-text">Express</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={mongo} alt="" />
            <span className="hover-text">MongoDB</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={gsapImg} alt="" />
            <span className="hover-text">GSAP</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={react} alt="" />
            <span className="hover-text">React</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={next} alt="" />
            <span className="hover-text">Next.js</span>
          </div>
        </div>
      </div>
      <div className="dis-box px-16 pt-20">
        <h4 className="text-4xl">DESIGN</h4>
        <div className="flex">
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={lightroom} alt="" />
            <span className="hover-text">Lightroom</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={ps} alt="" />
            <span className="hover-text">Photoshop</span>
          </div>
          <div className="image-container hover:scale-150 drop-shadow-xl shadow-black hover:z-50 transition">
            <img src={figma} alt="" />
            <span className="hover-text">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsIntrestedIn;
