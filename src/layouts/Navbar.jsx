import React, { useState } from "react";

import { Button } from "../components/Buttons";
import { Menu, X } from "lucide-react";

const navlink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
 
];

export const Navbar = () => {
  const [isMobilemenuOpen , setisMobilemenuOpen] = useState(false)

  return (


    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-4xl font-bold tracking-tight hover:text-primary"
        >
          R <span className="text-primary">.</span>
        </a>


        {/* desktop */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >

                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
            <Button size="sm">
              <a href="#contact">Contact</a>
            </Button>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setisMobilemenuOpen((prev) => !prev )}>
            {isMobilemenuOpen ? <X size={24}/>:<Menu size={24}/>}
        </button>
      </nav>

        {isMobilemenuOpen && <div className="md:hidden glass-strong">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animate-fade-in">
                {navlink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
             
                {link.label}
              </a>
            ))}

            <Button >
              <div className="p-2">
              <a href="#contact">Contact Me</a>

              </div>
            </Button>
            </div>
        </div>}

    </header>
  );
};
