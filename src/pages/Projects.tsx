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
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Projetos
          </h1>
          <p className="max-w-3xl mx-auto text-[#9A9A9A] text-lg leading-relaxed">
            Portfólio focado em análises desenvolvidas em{" "}
            <span className="text-[#CFCFCF] font-medium">Power BI</span>, com
            dashboards interativos e análises interpretativas. Cada projeto
            reflete a capacidade de transformar dados em decisões estratégicas.
          </p>
          
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