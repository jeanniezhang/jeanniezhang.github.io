import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"; // Importing FontAwesome icons

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 py-8 pt-28" // 👈 pt-28 = padding top to push below navbar
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left z-10 px-4 space-y-8 md:space-y-0 md:space-x-8">
          {/* Text section */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hey, I'm Jeannie
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I write code to make websites. I'm passionate about learning new
              technologies and making an impact wherever I go. In my free time,
              I like to crochet, play chess, and write speculative fiction.
            </p>

            {/* Social Media Links with Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/jeanniezhang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition duration-300"
              >
                <FaGithub size={32} />
              </a>

              <a
                href="https://www.linkedin.com/in/jz03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-300 transition duration-300"
              >
                <FaLinkedin size={32} />
              </a>

              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transition duration-300"
              >
                <FaFileAlt size={32} />
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <img
              src="./quagsit.png"
              alt="Jeannie"
              className="w-60 h-60 md:w-100 md:h-100 rounded-full object-cover border-4 border-green-300"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
