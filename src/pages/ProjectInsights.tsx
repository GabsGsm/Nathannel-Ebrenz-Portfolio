import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Database, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projectsData";

export function ProjectInsights() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const getTrendIcon = (change: string) => {
    if (change.startsWith("+")) return <TrendingUp size={16} className="text-green-500" />;
    if (change.startsWith("-")) return <TrendingDown size={16} className="text-red-500" />;
    return <Minus size={16} className="text-[#9A9A9A]" />;
  };

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
            {project.titleInsights}
          </h1>
          <p className="text-xl text-[#FF014F] mb-4">Insights & Análise</p>
        </div>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Problema Analisado
          </h2>
          <div className="bg-[#212124] border border-[#2A2A2D] p-6">
            <p className="text-[#CFCFCF] leading-relaxed">{project.problemInsights}</p>
          </div>
        </section>

        {/* Context Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Contexto</h2>
          <div className="bg-[#212124] border border-[#2A2A2D] p-6">
            <div
              className="
                text-[#CFCFCF]
                leading-relaxed
                [&_ul]:list-disc
                [&_ul]:pl-6
                [&_ul]:space-y-2
                [&_p]:mb-4
                [&_ul]:mb-4
              "
              dangerouslySetInnerHTML={{ __html: project.contextInsights }}
            />
          </div>
        </section>

        {/* Data Source */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Fonte dos Dados
          </h2>
          <div className="bg-[#212124] border border-[#2A2A2D] p-6 flex items-start gap-4">
            <Database className="w-6 h-6 text-[#FF014F] flex-shrink-0 mt-1" />
            <p className="text-[#CFCFCF] leading-relaxed">
              {project.dataSource}
            </p>
          </div>
        </section>

        {/* KPIs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            KPIs Principais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.kpis.map((kpi, index) => (
              <div
                key={index}
                className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors"
              >
                <p className="text-[#9A9A9A] text-sm mb-2">{kpi.label}</p>
                <p className="text-3xl font-semibold text-white mb-2">
                  {kpi.value}
                </p>
                {kpi.change && (
                  <div className="flex items-center gap-2">
                    {getTrendIcon(kpi.change)}
                    <span
                      className={`text-sm ${
                        kpi.change.startsWith("+")
                          ? "text-green-500"
                          : kpi.change.startsWith("-")
                          ? "text-red-500"
                          : "text-[#9A9A9A]"
                      }`}
                    >
                      {kpi.change}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Insights Relevantes
          </h2>
          <div className="space-y-4">
            {project.insights.map((insight, index) => (
              <div
                key={index}
                className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors"
              >
                <div className="grid md:grid-cols-[100px_1fr] gap-y-6 gap-x-2.5 items-stretch">

                  {/* Coluna esquerda */}
                  <div className="justify-center md:flex hidden">
                    <div className="w-16 h-16 bg-[#FF014F] flex items-center justify-center text-white font-bold text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Coluna direita */}
                  <div className="flex flex-col justify-center">
                    <div className="flex gap-x-3">
                      <div className="justify-center flex md:hidden">
                        <div className="w-14 h-14 bg-[#FF014F] flex items-center justify-center text-white font-bold text-2xl">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <h3 className="text-white font-bold text-2xl leading-tight mt-auto mb-auto">
                        {insight.label}
                      </h3>
                    </div>

                    <p className="text-[#CFCFCF] leading-relaxed mt-2 md:mt-1">
                      {insight.value}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Conclusões</h2>
          <div className="bg-[#1A1A1C] border-l-4 border-[#FF014F] p-6">
            <div className="text-[#CFCFCF] leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: project.conclusions }}
            />
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/projects/${project.id}/dashboard`}
            className="flex-1 bg-[#FF014F] hover:bg-[#E60045] text-white py-4 px-6 text-center transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink size={20} />
            Ver Dashboard Interativo
          </Link>
          <Link
            to="/projects"
            className="flex-1 border border-[#2A2A2D] hover:border-[#FF014F] text-[#CFCFCF] hover:text-white py-4 px-6 text-center transition-all"
          >
            Voltar aos Projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
