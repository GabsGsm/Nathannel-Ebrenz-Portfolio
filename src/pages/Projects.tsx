import { Link } from "react-router";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "../components/ProjectCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const ITEMS_PER_PAGE = 9; 

export function Projects() {
  const {
    displayedItems,
    isLoading,
    hasMore,
    totalCount,
    displayedCount,
    observerRef,
  } = useInfiniteScroll({
    data: projectsData,
    itemsPerPage: ITEMS_PER_PAGE,
    loadDelay: 500,
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <section className="mb-11">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-11">
              Projetos
            </h1>

            <div className="bg-[#212124] border border-[#2A2A2D] p-8">
              <p className="text-left text-[#CFCFCF] text-lg leading-relaxed mb-4">
                Portfólio focado em análises desenvolvidas em{" "}
                <span className="text-white font-medium">Power BI</span>, com
                dashboards totalmente interativos e análises interpretativas orientadas a decisões estratégicas.
                Em cada projeto, realizei o processo completo de <span className="text-white font-medium">ETL (Extract, Transform, Load)</span>{" "}
                para tratamento, limpeza e modelagem dos dados, garantindo consistência e qualidade das informações.
              </p>

              <p className="text-left text-[#CFCFCF] text-lg leading-relaxed mb-4">
                Além disso, desenvolvi medidas complexas em <span className="text-white font-medium">DAX</span> para construção de <span className="text-[#CFCFCF] font-medium">KPIs</span> estratégicos, 
                análises comparativas e métricas avançadas de desempenho.
              </p>

              <p className="text-left text-[#CFCFCF] text-lg leading-relaxed">
                Todos os dashboards são <span className="text-white font-medium">100% interativos</span>, 
                permitindo ao usuário explorar os dados dinamicamente — filtrando, selecionando, segmentando,
                clicando em elementos visuais, navegando entre páginas e ajustando perspectivas analíticas conforme a necessidade. 
                Cada projeto demonstra a capacidade de transformar dados brutos em insights claros, 
                acionáveis e orientados à tomada de decisão.
              </p>
            </div>
          </section>
          
          {/* Counter */}
          <p className="mt-4 text-sm text-[#9A9A9A]">
            Mostrando <span className="text-[#FF014F] font-medium">{displayedCount}</span> de{" "}
            <span className="text-[#CFCFCF] font-medium">{totalCount}</span> projetos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeIn"
              style={{
                animationDelay: `${(index % ITEMS_PER_PAGE) * 100}ms`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-[#9A9A9A]">
              <div className="w-6 h-6 border-2 border-[#FF014F] border-t-transparent rounded-full animate-spin"></div>
              <p className="font-medium">Carregando mais projetos...</p>
            </div>
          </div>
        )}

        {/* Invisible Observer Target */}
        <div ref={observerRef} className="h-4 mt-8"></div>

        {/* End Message */}
        {!hasMore && displayedCount > 0 && (
          <div className="mt-16 text-center animate-fadeIn">
            <div className="bg-[#212124] border border-[#2A2A2D] p-8 inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg 
                  className="w-5 h-5 text-[#FF014F]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <p className="text-[#CFCFCF] font-medium">
                  Todos os {totalCount} projetos foram carregados
                </p>
              </div>
              <p className="text-[#9A9A9A] mb-4">
                Mais projetos em desenvolvimento
              </p>
              <Link
                to="/contact"
                className="text-[#FF014F] hover:text-[#E60045] transition-colors font-medium inline-flex items-center gap-1"
              >
                Entre em contato
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}