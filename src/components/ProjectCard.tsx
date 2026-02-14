import { Link } from "react-router";
import { ExternalLink, FileBarChart } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#212124] border border-[#2A2A2D] hover:border-[#FF014F] transition-all group h-full flex flex-col justify-between">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-[#1A1A1C]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#FF014F] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#9A9A9A] leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-[#1A1A1C] text-[#CFCFCF] border border-[#2A2A2D]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link
            to={`/projects/${project.id}/dashboard`}
            className="flex-1 bg-[#FF014F] hover:bg-[#E60045] text-white py-2.5 px-4 text-center transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            Ver Dashboard
          </Link>
          <Link
            to={`/projects/${project.id}/insights`}
            className="flex-1 border border-[#2A2A2D] hover:border-[#FF014F] text-[#CFCFCF] hover:text-white py-2.5 px-4 text-center transition-all flex items-center justify-center gap-2"
          >
            <FileBarChart size={16} />
            Ver Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
