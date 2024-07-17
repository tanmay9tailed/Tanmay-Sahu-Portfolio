import React, { useRef } from "react";
import mine from "../assets/mine.jpg";
import mail from "../assets/mail.png";
import linkedIn from "../assets/linked.png";
import git from "../assets/git.png";
import insta from "../assets/insta.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MySelf = () => {
  const container = useRef();

  useGSAP(
    () => {
      var c1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "-10% 50%",
          end: "40% 50%",
        //   markers: true,
        //   pin: true,
          scrub: 1,
        },
      });
      c1.from("#card-one", {
        // duration: 1,
        scale: 0,
        y: 800,
        opacity: 0,
      })
      .from("#card-one .left-cd1", {
        // duration: 1,
        scale: 0,
        x: -800,
        opacity: 0,
      },'a')
      .from("#card-one .right-cd1", {
        // duration: 1,
        scale: 0,
        x: 800,
        opacity: 0,
      },'a');
    },
    { scope: container }
  );
  
  return (
    <div ref={container} className="h-screen w-screen">
      <div className="cards " id="card-one">
        <div className="left-cd1">
          <h2>
            <span className="text-[#f9b339]">ABOUT</span>
          </h2>
          <p className="text-white">
            I'm Tanmay Sahu, a dedicated computer science student at ITER College with a passion for web development.
            Hailing from a diverse background, I have a knack for crafting digital experiences that merge creativity and
            functionality. As a fervent problem solver, I thrive on challenges and constantly seek innovative solutions.
            My journey in web development has allowed me to blend my technical skills with an artistic touch. I'm
            committed to staying at the forefront of the ever-evolving digital landscape and aspire to contribute my
            expertise to meaningful projects. Join me on this exciting digital journey as we explore the limitless
            possibilities of the web together.
          </p>
        </div>
        <div className="right-cd1">
          <div className="image-hover">
            <img className="my-image" src={mine} alt="" />
            <div className="overlay">
              <h1>
                Tanmay Sahu <img src="../my-logo1.jpeg" alt="" />
              </h1>
              <a href="mailto:sahutanmay1903@gmail.com">
                <img src={mail} alt="" />
                sahutanmay1903@gamil.com
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/tanmay-sahu-50296b289/">
                <img src={linkedIn} alt="" />
                LINKED IN
              </a>
              <a target="_blank" href="https://github.com/tanmay9tailed">
                <img src={git} alt="" />
                GITHUB
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/__tanmayy.sahu__/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
              >
                <img src={insta} alt="" />
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
