import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const String = () => {
  const { contextSafe } = useGSAP();
  const [height, setHeight] = useState(0);
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const mouseOver = contextSafe((path) => {
    gsap.to(pathRef.current, {
      attr: { d: path },
    });
  });

  const mouseLeave = contextSafe((path) => {
    gsap.to(pathRef.current, {
      duration: 2,
      attr: { d: path },
      ease: "elastic.out(1.5,0.4)",
    });
  });

  useEffect(() => {
    const updateDimensions = () => {
      const container = containerRef.current;
      if (container) {
        const height = container.clientHeight;
        setHeight(height);
      }
    };

    // Initial update
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Set up mouseover and mouseleave event listeners
    const handleMouseOver = (e) => {
        // console.log(e)
      const widthOfWindows = window.innerWidth;
      const path = `M 50 ${height / 2} Q ${e.clientX} ${e.clientY - 420} ${widthOfWindows - 50} ${height / 2}`;
      mouseOver(path);
    };

    const handleMouseLeave = () => {
      const widthOfWindows = window.innerWidth;
      const path = `M 50 ${height / 2} Q ${widthOfWindows / 2} ${height / 2} ${widthOfWindows - 50} ${height / 2}`;
      mouseLeave(path);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseOver);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (container) {
        container.removeEventListener("mousemove", handleMouseOver);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [height, mouseOver, mouseLeave]);

  const widthOfWindows = window.innerWidth;

  return (
    <div ref={containerRef} className="string h-[200px] sm:h-[400px] bg-black">
      <svg
        className=""
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d={`M 50 ${height / 2} Q ${widthOfWindows / 2} ${height / 2} ${widthOfWindows - 50} ${height / 2}`}
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default String;
