import "../css/hero.css";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="hero-container">
      <div className="hero-div">
        <div className="image-div">
          <Image src="/profile2.jpg" alt="Profile" height={400} width={400} />
        </div>

        <div className="content-div">
          <h1 className="heading">Hello, I am Sana Farasat</h1>
          <p className="para">
            a front-end developer, a back-end developer, a full stack
            developer!! Currently learning Nextjs bu using Typescript and
            Tailwand css..
          </p>
        </div>
      </div>
    </main>
  );
}
