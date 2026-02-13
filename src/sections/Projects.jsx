import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Rude AI ",
    description:
      "An advanced, rude, and sarcastic AI voice assistant that runs entirely in the browser. Features real-time voice interaction, interruption handling, and a premium dark UI.",
    image: "/RudeAI.png",
    tags: [
  "FastAPI",
  "Uvicorn",
  "Groq (Llama 3 70B)",
  "LiteLLM",
  "Deepgram (Nova-2 STT)",
  "Deepgram (Aura TTS)",
  "HTML5",
  "CSS3",
  "Vanilla JavaScript",
  "Web Audio API",
  "WebSockets",
  "Render",
  "Python-dotenv",
  "Git",
  "GitHub"
]
,
    link: "https://github.com/Rahul-64/Rude-AI",
    github: "https://rude-ai.onrender.com/",
  },
  {
    title: "CodeBox",
    description:
      "Engineered a full-stack gamified E-Learning platform using Next.js, React, and Neon Postgres, enabling secure user onboarding, course enrollment, and end-to-end progress tracking with a responsive, pixel-styled UI.",
    image: "/codebox.png",
    tags: [
      "Next.js",
      "TypeScript",
      "SaaS",
      "AI",
      "PostgreSQL",
      "Neon",
      "Azure",
      "Clerk",
    ],
    link: "https://code-box-three.vercel.app/",
    github: "https://github.com/Rahul-64/CodeBox-main",
  },
  {
    title: "Docbot",
    description:
      "A Retrieval-Augmented Generation (RAG) application that allows users to chat with their PDF documents. This project uses LangChain, FAISS for vector storage, and integrates HuggingFace and Groq LLMs to provide accurtae answers based on document context.",
    image: "/docbot.png",
    tags:[
  "Python 3.10+",
  "LangChain (Framework)",
  "Streamlit (Frontend)",
  "FAISS (Vector Database)",
  "HuggingFace (Embeddings & LLM)"
]
,
    link: "https://docbot-lsszbeatahcjmbhch6hxgx.streamlit.app/",
    github: "https://github.com/Rahul-64/DocBot",
  }
  ,
  {
    title: "InterviewPrep.AI",
    description:
      "InterviewPrep.AI is a full-stack MERN application that helps users prepare for technical interviews with personalized, AI-generated questions and concept explanations — tailored to their role and experience.",
    image: "/interview-prep.png",
    tags: [
      "Next.js",
      "TypeScript",
      "SaaS",
      "AI",
      "PostgreSQL",
      "Neon",
      "Azure",
      "Clerk",
    ],
    link: "https://interviewprep-taupe-alpha.vercel.app/",
    github: "https://github.com/Rahul-64/interview-prep-ai",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="https://github.com/Rahul-64" target="_blank">
              View all project
            </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
