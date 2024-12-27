"use client";
import Image from "next/image";
import "../../css/about.css";

import ProjectEmbed2 from "@/projects/project2";
import ProjectEmbed from "@/projects/project1";
import ProjectEmbed3 from "@/projects/project3";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

function About() {
  return (
    <main className="about-container">
      <div className=" about-me">
        <h2 className=" head">About Me</h2>
        <p className="para">
          {" "}
          I am Front-end Developer , Back-end Develper, a Full-Stack Developer!{" "}
          Currently learning to build highly scalable applications to help
          freelancers to grow their buissness. For making fast and reliable web
          applications learning to build websites on the framework of Next.js,
          By using typescript which is the superset of Javascript With the
          framework of tailwand css!
        </p>
      </div>

      <div className="project">
        <div className="project-div">
          <ProjectEmbed />
        </div>
        <p className="project-para">
          <span>
            Static Interactive <br />
            Resume{" "}
          </span>{" "}
          in which i mentioned <br />
          my personal biodata like personal information, <br /> education,
          skills and experience etc.
        </p>
      </div>

      <div className="project">
        <div className="project-div">
          <ProjectEmbed2 />
        </div>
        <p className="project-para">
          <span>
            Dynamic Resume <br /> Builder{" "}
          </span>{" "}
          in which i added functionalities <br />
          to create its own curriculum vitae for users. <br />
          Also added interactive and elegant colour <br />
          for user interactivity.
        </p>
      </div>

      <div className="project">
        <div className="project-div">
          <ProjectEmbed3 />
        </div>
        <p className="project-para">
          <span style={{ fontSize: "1.3em" }}>
            Dynamic, Editable and Shareable <br /> Resume Builder{" "}
          </span>{" "}
          in which i added functionalities to create its own curriculum vitae.{" "}
          <br />
          Also added interactive and elegant <br /> colour for user
          interactivity. <br />
          Here you will find functionality to edit your resume, <br />
          Download your resume and <br />
          shareable link for cv with everyone.
        </p>
      </div>

      <div className=" main-cards">
        <h2 className="cards-head ">CLI Based Projects Here!!</h2>
        <strong>Projects</strong> which i created based on Cli..
      </div>

      <div className=" card-div">
        <div className=" cards transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <Image
            className="image"
            src="/ngg.jpg"
            alt="Number Guessing Game"
            height={100}
            width={200}
            layout="responsive"
          />
          <br />
          <p className="card-text" style={{ padding: "6px" }}>
            The Number Guessing Game is a simple yet engaging command-line
            interface (CLI) game that challenges players to guess a randomly
            generated number within a specific range. This project demonstrates
            my skills in programming logic, user interaction, and game design.
          </p>
          <br />
        </div>

        <div className="cards transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <Image
            className="image"
            src="/atm.jfif"
            alt="ATM"
            height={100}
            width={200}
            layout="responsive"
          />
          <br />
          <p className="card-text" style={{ padding: "6px" }}>
            The ATM Simulator is a command-line interface (CLI) application that
            replicates the functionality of a real ATM. This project allows
            users to perform basic banking transactions such as checking
            balances, withdrawing cash, and depositing funds, demonstrating my
            skills in application logic and user interaction.
          </p>

          <br />
        </div>
      </div>

      <div className="card-div">
        <div className="cards transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <Image
            className="image"
            src="/cal.jfif"
            alt="Calculator"
            height={100}
            width={200}
            layout="responsive"
          />

          <p className="card-text" style={{ padding: "6px" }}>
            The CLI Calculator is a command-line interface application that
            performs basic arithmetic operations. This project showcases my
            ability to implement mathematical logic and user interaction in a
            console environment.
          </p>
          <br />
        </div>

        <div className="cards transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <Image
            className="image"
            src="/curr.jpg"
            alt="Currency Convertor"
            height={100}
            width={200}
            layout="responsive"
          />
          <br />

          <p className="card-text" style={{ padding: "6px" }}>
            The CLI Currency Converter is a command-line interface application
            that allows users to convert amounts between different currencies.
            This project highlights my skills in API integration, data handling,
            and user interaction in a console environment.
          </p>

          <br />
        </div>
      </div>

      <div className=" github-npm-div ">
        <h2>Interested in code base?</h2> Here is my github Profile
        <br />
        <br />
        <a
          href="https://github.com/Sana-Farasat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub Profile
        </a>
      </div>

      <div className="github-npm-div">
        <h2>Want to test?</h2> Here is my npm profile to check by using npx
        command..
        <br />
        <br />
        <a
          href="https://github.com/Sana-Farasat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my npm Profile
        </a>
      </div>

      <div className="icons2 transition-transform duration-75 scale-105 ease-in-out hover:bg-yellow-200">
        <h2 className=" icons2-h2 ">My Skills</h2>
        <div className="lang-icons ">
          <IoLogoHtml5 style={{ color: "red" }} />
          <FaCss3Alt style={{ color: "blue" }} />
        </div>
        <div className=" lang-icons ">
          <IoLogoJavascript style={{ color: "yellow" }} />

          <SiTypescript style={{ color: "blue" }} />
        </div>
        <div className=" lang-icons">
          <FaReact style={{ color: "blue" }} />
          <RiNextjsFill style={{ color: "black" }} />
        </div>
      </div>
    </main>
  );
}

export default About;
