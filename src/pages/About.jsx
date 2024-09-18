import React, { useRef } from "react";
import mine from "../assets/mine.jpg";
import mail from "../assets/mail.png";
import linkedIn from "../assets/linked.png";
import git from "../assets/git.png";
import insta from "../assets/insta.png";
import X from "../assets/x.jpeg";
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
    <div
      ref={container}
      className="min-h-screen w-full bg-black overflow-x-hidden sm:flex sm:justify-between px-8 sm:px-36"
    >
      <div className="w-full sm:w-3/5">
        <div>
          <h1 id="about" className="text-5xl sm:text-7xl font-rajdhani text-yellow-300 font-semibold ">
            ABOUT
          </h1>
          <div className="w-full pl-4 sm:px-16 pt-2 sm:pt-10">
            <p id="para" className="text-xs sm:text-xl">
              <span>
                I'm Tanmay Sahu, a passionate B.Tech student at ITER College, specializing in full-stack development and
                Web3 technologies. With a strong foundation in web development and blockchain, I aim to craft innovative
                digital experiences that seamlessly blend creativity and cutting-edge functionality.
              </span>
              <br />
              <br />
              <span>
                My journey spans from mastering traditional web technologies like HTML, CSS, JavaScript, and Java, to
                modern frameworks such as Node.js, MongoDB, React, and Next.js. Recently, I've been delving into the
                world of Web3, working on exciting projects like "TrezorX" — a crypto management web app that allows
                users to create, manage, and import Solana and Ethereum wallets, with future plans to integrate
                transaction functionality.
              </span>
              <br />
              <br />
              <span>
                Along with my technical expertise, I constantly strive to solve real-world problems through innovative
                solutions. My notable projects, such as "Sociogram" and contributions during my internship at Sarvin,
                have shaped my growth as a full-stack developer, and I'm eager to make impactful contributions in the
                rapidly evolving tech landscape.
              </span>
              <br />
              <br />
              <span>
                I'm driven by curiosity and a passion for exploration, and I’m excited to be part of the future of
                technology, whether it's through web development or the evolving space of blockchain.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div ref={image} className="right-cd1 pt-10 sm:pt-0 w-full sm:w-2/6 flex items-center justify-center">
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
            <a target="_blank" href="https://x.com/sahu069">
              <img src={X} alt="" />X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
