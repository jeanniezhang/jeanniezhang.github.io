import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languageSkills = [
    "Python",
    "Golang",
    "TypeScript",
    "JavaScript",
    "Java",
    "Kotlin",
    "C++",
    "C",
    "C#",
    "HTML",
    "CSS",
    "SQL",
    "Bash",
  ];

  const frameworksAndLibraries = [
    "React.js",
    "Next.js",
    "React Native",
    "Flask",
    "Pandas",
    "TailwindCSS",
    "Redux",
    "Node.js",
    "Playwright",
    "AWS",
    "Google Cloud",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm experienced with building scalable full-stack web applications
              and creating innovative solutions to problems you never even knew
              you had. I'm excited to take on whatever challenges come my way!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Frameworks / Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksAndLibraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> ✨ Education ✨ </h3>
              <p className="text-gray-300 mb-6">
                I'm currently pursuing a{" "}
                <span className="text-green-300">
                  Bachelor of Computer Science
                </span>{" "}
                at the{" "}
                <span className="text-green-300">University of Waterloo</span>.
                I'm excited to be graduating in 2026 with a diploma in creative
                writing.
              </p>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                🐸 Work Experience 🐸{" "}
              </h3>
              <p className="text-gray-300 mb-6">
                Currently, I'm a software engineering intern at{" "}
                <a
                  href="https://www.kaleidoscope.bio/"
                  className="text-green-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaleidoscope
                </a>
                . In the past I've also worked at{" "}
                <a
                  href="https://withmantle.com/"
                  className="text-green-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mantle
                </a>
                , a stealth startup based in San Francisco,{" "}
                <a
                  href="https://okos.ca/index.html"
                  className="text-green-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Okos
                </a>
                , and{" "}
                <a
                  href="https://www.definityfinancial.com/English/overview/default.aspx"
                  className="text-green-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Definity
                </a>
                . I'm so excited to see where the future takes me.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
