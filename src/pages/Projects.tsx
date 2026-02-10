import { Link } from "react-router";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Projetos
          </h1>
          <p className="max-w-3xl mx-auto text-[#9A9A9A] text-lg leading-relaxed">
            Portfólio focado em análises desenvolvidas em{" "}
            <span className="text-[#CFCFCF] font-medium">Power BI</span>, com
            dashboards interativos e análises interpretativas. Cada projeto
            reflete a capacidade de transformar dados em decisões estratégicas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Add More Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#212124] border border-[#2A2A2D] p-8 inline-block">
            <p className="text-[#9A9A9A] mb-4">
              Mais projetos em desenvolvimento
            </p>
            <Link
              to="/contact"
              className="text-[#FF014F] hover:text-[#E60045] transition-colors"
            >
              Entre em contato →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
