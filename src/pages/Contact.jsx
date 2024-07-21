import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef();
  const finalPageRef = useRef();
  const main = useRef();
  const windowWidth = window.innerWidth;

  useGSAP(
    () => {
      var m2 = gsap.timeline({
        scrollTrigger: {
          trigger: finalPageRef.current,
          start: "50% 80%",
          end: "80% 90%",
          // markers: true,
          scrub: true,
        },
      });
      m2.to(`.finalPage h1 div`, {
        duration: 5,
        // opacity: 0,
        scale: 0,
        stagger: 0.5,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 35%",
            end: "top 0%",
            // markers: true,
          },
        })
        .from("#contact a", {
          opacity: 0,
          stagger: 0.5,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom top", // Extend the scroll area to make space for the final page
            scrub: true,
            // markers: true,
            pin: containerRef.current,
            pinSpacing: false, // Prevent additional spacing after pinning
          },
        })
        .fromTo(finalPageRef.current, { yPercent: 10 }, { yPercent: 0 });
    },
    { scope: main }
  );

  return (
    <div ref={main} className="relative">
      <div ref={containerRef} className="h-screen w-full bg-black">
        <div id="contact">
          <h1>
            you can get in touch <br />
            with me via
            <a target="_blank" href="mailto:sahutanmay1903@gmail.com" className="contact-link" id="mail">
              mail
            </a>
            or <br />
            <a
              target="_blank"
              href="https://www.instagram.com/__tanmayy.sahu__/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
              className="contact-link"
              id="insta"
            >
              Instagram
            </a>
            or
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tanmay-sahu-50296b289/"
              className="contact-link inline-block"
              id="linked"
            >
              linkedIn
            </a>
            .
          </h1>
          <h4>
            NAME:TANMAY SAHU <br />
            Created 2023<sup>&copy;</sup>
          </h4>
        </div>
      </div>
      <div ref={finalPageRef} className="finalPage h-screen w-full px-0 relative">
        <div className=" h-full w-full bg-white flex items-center justify-center rounded-t-3xl">
          <h1 className="text-black sm:text-9xl text-5xl font-rubikIso scale-150 font-extrabold flex">
            <div>T</div>
            <div>H</div>
            <div>A</div>
            <div>N</div>
            <div id="middle">K</div>
            <div> </div>
            <div>Y</div>
            <div>O</div>
            <div>U</div>
          </h1>
        <button onClick={() => {window.close()}} className="h-10 w-20 bg-black absolute bottom-6 right-6"> bye bye </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
