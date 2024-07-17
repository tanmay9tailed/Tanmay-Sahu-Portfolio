import React from "react";
import game from "../assets/gif/game.gif";
import yt from "../assets/gif/yt-clone.gif";
import parallax from "../assets/gif/parallax.gif";
import landing from "../assets/gif/landing.gif";
import todo from "../assets/gif/todo.gif";
import calc from "../assets/gif/calculator.gif";

const MyProjects = () => {
  return (
    <div className="bg-black min-h-screen px-36 pt-60">
      <div className="work-top">
        <h1 className="font-rajdhani text-5xl font-medium capitalize">
          crafted with <span className="love">LOVE</span> ❤️
        </h1>
        <h2 className="font-rajdhani text-7xl font-semibold">few of my Works</h2>
      </div>
      <div className="work-bottom">
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/Car-Crash-Game/">
          <img className="work-gif" src={game} alt="" />
          <div className="img-text">
            <p>This is a 2D game made with html, css, javascript. This is very joyfull game to pass your time.</p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/music-clone-V2/">
          <img className="work-gif" src={yt} alt="" />
          <div className="img-text">
            <p>
              This is a clone made of youtube MUSIC. Here you can add your favourite songs and can acsess them from
              anywhere through your phone or laptop.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/Parralax-Website/">
          <img className="work-gif" src={parallax} alt="" />
          <div className="img-text">
            <p>This is a Parallax Website shows a brief concept of parallax effect.</p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/landing-page-2/">
          <img className="work-gif" src={landing} alt="" />
          <div className="img-text">
            <p>
              This is my landing page made in the early days for practicing. Though it have some cool effects and its
              intresting.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/todo-app/">
          <img className="work-gif" src={todo} alt="" />
          <div className="img-text">
            <p>
              This is a TO-DO Web App. Here you can track your daily tasks by adding them into your task list. You can
              add new tasks remove the old once and many more features.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/Neon-Calculator/">
          <img className="work-gif" src={calc} alt="" />
          <div className="img-text">
            <p>This is a simple calculator made using javascript. You can do your math operations here easily.</p>
          </div>
        </a>
      </div>
      <a  target="_blank" href="https://github.com/tanmay9tailed">
        <h2 className="mt-14 text-end font-rajdhani text-5xl text-slate-400 opacity-50 hover:opacity-100 hover:text-white transition " >See All</h2>
      </a>
    </div>
  );
};

export default MyProjects;
