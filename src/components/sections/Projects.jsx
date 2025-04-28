import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Awake Again</h3>
              <p className="text-gray-400 mb-4">
                A narrative-driven top-down RPG created as a part of Brackey's
                Game Jam 2024, ranking top 15% overall. Discover the mystery
                behind a locked door.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Unity", "C#", "UI/UX", "Pixel Art"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://tanavast.itch.io/awake-again"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Memo(rable)</h3>
              <p className="text-gray-400 mb-4">
                A full-stack message wall web application that allows users to
                send positive messages to strangers, created as a part of Hack
                the North 2021.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML/CSS", "Firebase", "Flask"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://devpost.com/software/memo-rable"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
