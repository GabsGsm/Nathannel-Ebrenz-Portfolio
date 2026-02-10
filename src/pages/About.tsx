import { GraduationCap, Briefcase, TrendingUp, MessageSquare } from "lucide-react";

export function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Sobre Mim
          </h1>
          <p className="text-[#CFCFCF] text-lg">
            Transformando complexidade em clareza através dos dados
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-[#212124] border border-[#2A2A2D] p-8">
            <p className="text-[#CFCFCF] leading-relaxed mb-4">
              Sou um <span className="text-white font-medium">Analista de Dados</span> apaixonado
              por revelar histórias ocultas nos números. Com formação sólida em{" "}
              <span className="text-white font-medium">Estatística</span> e{" "}
              <span className="text-white font-medium">Programação Científica</span>, desenvolvo
              soluções analíticas que impactam diretamente a tomada de decisão estratégica.
            </p>
            <p className="text-[#CFCFCF] leading-relaxed">
              Minha experiência abrange desde a construção de dashboards interativos em Power BI
              até a implementação de modelos de Machine Learning, sempre com foco em comunicar
              insights de forma clara e acionável para públicos técnicos e não-técnicos.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Competências Principais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors">
                <GraduationCap className="w-8 h-8 text-[#FF014F] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Formação Analítica
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  Base sólida em estatística, probabilidade e métodos quantitativos,
                  aplicados na resolução de problemas de negócio complexos.
                </p>
              </div>

              <div className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors">
                <Briefcase className="w-8 h-8 text-[#FF014F] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Programação Científica
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  Domínio de Python, SQL e DAX para manipulação, análise e
                  modelagem de grandes volumes de dados.
                </p>
              </div>

              <div className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors">
                <TrendingUp className="w-8 h-8 text-[#FF014F] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Análise de Dados Avançada
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  Experiência em explorar padrões, construir modelos preditivos e
                  desenvolver dashboards estratégicos que geram valor.
                </p>
              </div>

              <div className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-colors">
                <MessageSquare className="w-8 h-8 text-[#FF014F] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Storytelling com Dados
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  Capacidade de traduzir insights técnicos em narrativas claras e
                  persuasivas, facilitando a tomada de decisão.
                </p>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="bg-[#1A1A1C] border-l-4 border-[#FF014F] p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Minha Abordagem
            </h2>
            <p className="text-[#CFCFCF] leading-relaxed mb-4">
              Acredito que dados só geram valor quando transformados em ações concretas.
              Por isso, meu trabalho vai além da análise técnica: busco compreender o
              contexto de negócio, identificar as perguntas certas e comunicar resultados
              de forma que diferentes stakeholders possam agir com confiança.
            </p>
            <p className="text-[#CFCFCF] leading-relaxed">
              Cada projeto é uma oportunidade de aplicar rigor analítico, criatividade
              e pensamento crítico para revelar insights que impulsionam resultados
              mensuráveis.
            </p>
          </section>

          {/* Tools & Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Ferramentas & Tecnologias
            </h2>
            <div className="bg-[#212124] border border-[#2A2A2D] p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Power BI",
                  "Python",
                  "SQL",
                  "DAX",
                  "Machine Learning",
                  "Pandas",
                  "Scikit-learn",
                  "Git",
                  "Excel",
                  "Visão Computacional",
                  "Jupyter",
                  "PostgreSQL",
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="text-center py-3 px-4 bg-[#1A1A1C] border border-[#2A2A2D] text-[#CFCFCF] hover:border-[#FF014F] hover:text-white transition-all"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
