import Image from "next/image";
import Contact from "./contact-us/page";
import About from "./about/page";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main
      className="container"
      style={{ maxWidth: "1500px", margin: "0 auto" }}
    >
      <div>
        <Hero />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Contact />
      </div>
    </main>
  );
}
