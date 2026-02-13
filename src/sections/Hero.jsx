import React from "react";
import { Button } from "../components/Buttons";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "PostgreSQL",
  "Next.js",
  "MongoDB",
  "Express.js",
  "Node.js",
  "Javascript",
  "MySql",
  "Linux",
  "Vercel",
  "TailwindCSS",
  "Git",
  "Github",
  "Python",
  "PostMan",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#ffffff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Software Engineer • Fullstack specialist
              </span>
            </div>

            {/* headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Rahul , a full-stack developer skilled in React,
                Node.js, and databases, with experience building real-world
                projects, APIs, and scalable features, and a strong foundation
                in problem-solving.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#contact">Contact Me</a>
               
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5 animate-bounce" />
                <a href="https://drive.google.com/file/d/1yTFWv4w7UeAhZR4NQYa-OIWLxhrSrhzx/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download</a>
              </AnimatedBorderButton>
            </div>

            

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                { icon: Github, href: "https://github.com/Rahul-64" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rahul-kumar-3b9b41273/",
                },
                { icon: Twitter, href: "https://x.com/rahul_bantha" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  {
                    <social.icon
                      className="w-5
                        h-5"
                    />
                  }
                </a>
              ))}
            </div>
          </div>
          {/* right */}

          <div className="relactic animate-fade-in animattion-delay-300">
            {/* image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-3xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/Rahul.jpeg"
                  alt="Rahul kumar"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  {/* <div className="text-2xl ">Fresher</div> */}
                  <div className="text-xs text-white">Fresher</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
