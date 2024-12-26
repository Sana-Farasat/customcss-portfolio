import Image from "next/image";
import Link from "next/link";
import "../css/header.css";
// import { FaRegCopyright } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

function Header() {
  return (
    <header className="header-container">
      {/* Left side */}
      <div className="profile">
        <Image src="/logo.png" alt="Logo" height={90} width={90} />
      </div>

      {/* Right side */}
      <div>
        <nav>
          <ul>
            <li>
              <button className="header-btn">
                <Link href="/" className="link">
                  Home{" "}
                </Link>
              </button>
            </li>
            <li>
              <button className="header-btn">
                <Link href="/about" className="link">
                  About{" "}
                </Link>
              </button>
            </li>
            <li>
              <button className="header-btn">
                <Link href="/contact-us" className="link">
                  Contact{" "}
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Sheet>
        <SheetTrigger className="menu-icon">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li>
              <button className="header-btn">
                <Link href="/" className="link">
                  Home{" "}
                </Link>
              </button>
            </li>
            <li>
              <button className="header-btn">
                <Link href="/about" className="link">
                  About{" "}
                </Link>
              </button>
            </li>
            <li>
              <button className="header-btn">
                <Link href="/contact-us" className="link">
                  Contact{" "}
                </Link>
              </button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
