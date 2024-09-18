import React from "react";
import game from "../assets/gif/game.gif";
import yt from "../assets/gif/yt-clone.gif";
import parallax from "../assets/gif/parallax.gif";
import todo from "../assets/gif/todo.gif";
import flashcard from "../assets/gif/flashcard.gif";
import bookstore from "../assets/gif/bookstore.gif";
import music from "../assets/gif/music.gif";
import payment from "../assets/gif/payment.gif";
import trezorx from "../assets/gif/TrezorX.gif";

const MyProjects = () => {
  return (
    <div id="projects" className="bg-black sm:h-screen px-8 pt-10 sm:px-36 sm:pt-60">
      <div className="work-top">
        <h1 className="font-rajdhani text-2xl sm:text-5xl font-medium capitalize">
          crafted with <span className="love">LOVE</span> ❤️
        </h1>
        <h2 className="font-rajdhani text-4xl sm:text-7xl font-semibold">few of my Works</h2>
      </div>
      <div className="work-bottom">
      <a className="parallax-box" target="_blank" href="https://trezor-x-tanmay9taileds-projects.vercel.app/">
          <img className="work-gif" src={trezorx} alt="TrezorX Crypto Management" />
          <div className="img-text">
            <p>
              TrezorX, a Web3 crypto management app built with React and web3.js. Users can manage multiple Solana or
              Ethereum wallets, create or import accounts, and view balances.
            </p>
          </div>
        </a>
      <a className="parallax-box" target="_blank" href="https://flash-card-blond.vercel.app/">
          <img className="work-gif" src={flashcard} alt="Flashcard App" />
          <div className="img-text">
            <p>
              A Flashcard App built with React, where users can create flashcards for study purposes. It supports adding
              new cards, shuffling, and practicing.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://online-bookstore-beige.vercel.app/">
          <img className="work-gif" src={bookstore} alt="Online Bookstore" />
          <div className="img-text">
            <p>
              An online bookstore built with the MERN stack (MongoDB, Express, React, Node.js). Features include product
              listing, search, and a shopping cart.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://next-music-academy-gamma.vercel.app/">
          <img className="work-gif" src={music} alt="Music Player" />
          <div className="img-text">
            <p>
              Showcasing my frontend skills using NEXTJS
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://payment-integration-silk.vercel.app/">
          <img className="work-gif" src={payment} alt="Payment Gateway" />
          <div className="img-text">
            <p>
              A Payment Gateway integration project using Node.js and RazorPay API. It includes secure payment processing
              and a user-friendly interface.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/Car-Crash-Game/">
          <img className="work-gif" src={game} alt="Car Crash Game" />
          <div className="img-text">
            <p>
              A 2D Car Crash game built using HTML, CSS, and JavaScript. It’s a fun and simple game to pass the time, with
              obstacles and increasing difficulty.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/music-clone-V2/">
          <img className="work-gif" src={yt} alt="YouTube Music Clone" />
          <div className="img-text">
            <p>
              YouTube Music clone built with React and Firebase. Allows users to add their favorite songs, access them
              from anywhere, and has an interactive UI.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/Parralax-Website/">
          <img className="work-gif" src={parallax} alt="Parallax Effect Website" />
          <div className="img-text">
            <p>
              A parallax effect demonstration using HTML, CSS, and JavaScript, showcasing how background and foreground
              elements scroll at different speeds.
            </p>
          </div>
        </a>
        <a className="parallax-box" target="_blank" href="https://tanmay9tailed.github.io/todo-app/">
          <img className="work-gif" src={todo} alt="To-Do App" />
          <div className="img-text">
            <p>
              A simple and efficient To-Do Web App developed using React. Users can track their daily tasks, add new
              tasks, mark them as complete, and delete them.
            </p>
          </div>
        </a>
      </div>
      <a target="_blank" href="https://github.com/tanmay9tailed">
        <h2 className="mt-14 text-end font-rajdhani text-5xl text-slate-400 opacity-50 hover:opacity-100 hover:text-white transition">
          See All
        </h2>
      </a>
    </div>
  );
};

export default MyProjects;
