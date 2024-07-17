import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Contact = () => {
  const conatiner = useRef();
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger:{
        trigger: conatiner.current,
        start: "0% 35%",
        end: "top 0%",
        // markers: true,
      }
    })
    .from("#contact a",{
      opacity: 0,
      stagger:0.5
    })
  })

  return (
    <div ref={conatiner} className="h-screen w-full bg-black">
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
            className="contact-link"
            id="linked"
          >
            linkedIn
          </a>
          .
        </h1>
        <br />
        <br />
        <h4>
          NAME:TANMAY SAHU <br />
          Created 2023<sup>&copy;</sup>
        </h4>
      </div>
    </div>
  );
};

export default Contact;
