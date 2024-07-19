import React, { useEffect, useRef } from "react";
import video1 from "../assets/home1.mp4";
import video2 from "../assets/home2.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import Type from '../components/Type'

gsap.registerPlugin(Draggable,useGSAP);

const Video = () => {
  useGSAP(() => {
    var t3 = gsap.timeline();
    t3.from("#type",{
      delay: 1.2,
      y: 100,
      opacity:0,
      scale:0
    })
  });

  useEffect(() => {
    document.querySelector("#video2").style.opacity = "0";
  })

  useEffect(() => {
    const dragger = document.querySelector(".dragme");
    const on = document.querySelector(".on");

    Draggable.create(".dragme", {
      type: "x",
      bounds: ".slider",
      onDrag: updateVideoOpacity,
    });

    function updateVideoOpacity() {
      const draggerRect = dragger.getBoundingClientRect();
      const onRect = on.getBoundingClientRect();
      const distance = Math.abs(draggerRect.x - onRect.x);
      const newOpacity = 1-(Math.floor(distance)/220);
        document.querySelector("#video2").style.opacity = `${newOpacity}`;
    }
    return () => {
    };
  }, []);
  return (
    <div className="h-screen relative">
      <video id="video1" className="h-screen w-screen object-cover absolute" src={video1} autoPlay muted loop></video>
      <video id="video2" className={`h-screen w-screen object-cover absolute`} src={video2} autoPlay muted loop></video>
      <div className="slider sm:right-[10%] ">
        <div className="dragme big-circle  ">
          <div className="rotate"></div>
        </div>
        <h3 className="on-text">Drag Me -&gt;</h3>
        <div className="on">
          <div className="orange"></div>
        </div>
      </div>
      <Type />
    </div>
  );
};

export default Video;
