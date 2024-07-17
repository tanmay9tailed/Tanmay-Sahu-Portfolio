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

const About = () => {
  const container = useRef();
  const image = useRef();
  useGSAP(() => {
    var t4 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "top 20%",
        // markers:true,
        scrub: 1,
      },
    });
    t4.from("#about", {
      y: 150,
      opacity: 0,
    })
      .from("#para span", {
        opacity: 0,
        stagger: 0.6,
      })
      .from(image.current, {
        opacity: 0,
        // scale: 0,
        x: 500,
      });
  });

  return (
    <div ref={container} className="min-h-screen w-full bg-black overflow-x-hidden flex justify-between px-36">
      <div className="w-3/5">
        <div>
          <h1 id="about" className="text-7xl font-rajdhani text-yellow-300 font-semibold ">
            ABOUT
          </h1>
          <div className="w-full px-16 pt-10">
            <p id="para" className="text-xl">
              <span>
                I'm Tanmay Sahu, a dedicated computer science student at ITER College with a passion for web
                development. Hailing from a diverse background, I have a knack for crafting digital experiences that
                merge creativity and functionality. As a fervent problem solver, I thrive on challenges and constantly
                seek innovative solutions.
              </span>
              <br />
              <br />
              <span>
                My journey in web development has allowed me to blend my technical skills with an artistic touch.
                Proficient in HTML, CSS, JavaScript, Java, and basic Data Structures and Algorithms (DSA), I also
                possess practical experience with modern web technologies like Node.js, MongoDB, and React. One of my
                notable projects is "Sociogram," a full-stack application featuring a Next.js frontend and a Node.js,
                Express, and MongoDB backend, successfully deployed on Vercel.
              </span>
              <br />
              <br />
              <span>
                My journey in web development has allowed me to blend my technical skills with an artistic touch.
                Proficient in HTML, CSS, JavaScript, Java, and basic Data Structures and Algorithms (DSA), I also
                possess practical experience with modern web technologies like Node.js, MongoDB, and React. One of my
                notable projects is "Sociogram," a full-stack application featuring a Next.js frontend and a Node.js,
                Express, and MongoDB backend, successfully deployed on Vercel.
              </span>
              <br /> <br />
              <span>
                I aspire to contribute my expertise to meaningful projects and am committed to making a significant
                impact through technology. Join me on this exciting digital journey as we explore the limitless
                possibilities of the web together.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div ref={image} className="right-cd1 w-2/6">
        <div className="image-hover">
          <img className="my-image" src={mine} alt="" />
          <div className="overlay w-full">
            <h1 className="flex gap-2 pb-10">
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
  );
};

export default About;
