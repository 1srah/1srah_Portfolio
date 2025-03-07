export const About = () => {
  const frontendskills = ["React", "TailwindCSS"];
  const backendskills = ["Node.js", "Python", "Java", "C"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            My name is Soramon Singhoung. Also you can call me It. And this is
            my final project of Selected Topic Subject.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
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
            <h3 className="text-xl font-bold mb-4">Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="mb-2">
                <strong>B.Ind.Tech. in Electronic Computer</strong> - KMUTNB
                (2023-2025)
              </li>
              <li>
                <strong>High Voc. Cert. in Technology Computer</strong> -
                Singburi Technical College (2023-2025)
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Intern at Western Digital Thailand <br/> (5 Month)
                </h4>
                <p className="text-gray-350">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nulla eum perspiciatis explicabo, sapiente earum
                  sint tempore hic quia perferendis esse officiis libero soluta,
                  doloremque consequuntur deserunt eaque eveniet consequatur.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Intern at DEF Corp (2000-2025)
                </h4>
                <p className="text-gray-350">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nulla eum perspiciatis explicabo, sapiente earum
                  sint tempore hic quia perferendis esse officiis libero soluta,
                  doloremque consequuntur deserunt eaque eveniet consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
