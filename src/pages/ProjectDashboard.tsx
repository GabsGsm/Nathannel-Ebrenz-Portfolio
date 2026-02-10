import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projectsData";

export function ProjectDashboard() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[#CFCFCF] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar aos Projetos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-[#9A9A9A] text-lg max-w-3xl">{project.context}</p>
        </div>

        {/* Dashboard Embed */}
        <div className="bg-[#212124] border border-[#2A2A2D] p-2">
          <div className="aspect-video bg-[#1A1A1C] flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for actual iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-8">
              <ExternalLink className="w-16 h-16 text-[#FF014F]" />
              <p className="text-[#CFCFCF] text-center">
                Dashboard Power BI Incorporado
              </p>
              <p className="text-[#9A9A9A] text-sm text-center max-w-md">
                Em produção, este espaço exibiria o dashboard interativo via
                iframe:
              </p>
              <code className="text-xs text-[#9A9A9A] bg-[#0F0F10] px-4 py-2 max-w-full overflow-x-auto block">
                {`<iframe src="${project.dashboardUrl}" />`}
              </code>
            </div>

            {/* Uncomment below to use actual iframe */}
            {/* <iframe
              src={project.dashboardUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title={`Dashboard: ${project.title}`}
            /> */}
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-[#1A1A1C] border border-[#2A2A2D] p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Sobre este Dashboard
          </h3>
          <p className="text-[#9A9A9A] leading-relaxed mb-4">
            {project.problem}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-[#212124] text-[#CFCFCF] border border-[#2A2A2D]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to={`/projects/${project.id}/insights`}
            className="flex-1 bg-[#FF014F] hover:bg-[#E60045] text-white py-4 px-6 text-center transition-colors"
          >
            Ver Insights & Análise Completa
          </Link>
          <Link
            to="/projects"
            className="flex-1 border border-[#2A2A2D] hover:border-[#FF014F] text-[#CFCFCF] hover:text-white py-4 px-6 text-center transition-all"
          >
            Explorar Outros Projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
