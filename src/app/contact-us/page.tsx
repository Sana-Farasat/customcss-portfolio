import Link from "next/link";
import "../../css/contact.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="contact-container">
      <h1 className="contact-heading">Hire Me</h1>
      <p className="contact-para">To grow your buisness at planet scale!!</p>

      <div className="resume-button">
        <button>
          <Link href="https://static-resume-builder-topaz.vercel.app/">
            Resume{" "}
          </Link>
        </button>
      </div>

      <div className="icons">
        <FaFacebook style={{ color: "blue" }} />
        <FaInstagram style={{ color: "red" }} />
        <FaLinkedin style={{ color: "blue" }} />
        <FaGithub style={{ color: "black" }} />
      </div>

      <div className="details">
        <legend>Name:</legend>
        <input type="text" placeholder="Enter your name" />
        <br />
        <legend>Email:</legend>
        <input type="email" placeholder="Enter your email" />
        <br />
        <legend>Phone:</legend>
        <input type="tel" placeholder="Enter your phone number" />
        <br />
        <legend>Message:</legend>
        <textarea
          name="text"
          id="textarea"
          placeholder="Enter your message..."
          rows={5}
          cols={26}
        ></textarea>
      </div>

      <div className="submit-button">
        <button>Submit</button>
      </div>
    </main>
  );
}
