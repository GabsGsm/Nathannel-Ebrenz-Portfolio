import { Link } from "react-router";
import { ArrowRight, BarChart3, Database, BrainCircuit } from "lucide-react";
import {HomeBG} from '../assets/svg/index';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center lg:text-left flex flex-col justify-center space-y-8">
              {/* Subtitle */}
              <p className="text-[#CFCFCF] text-sm md:text-base tracking-[0.3em] uppercase font-['Poppins'] font-medium">
                Bem-vindo ao meu mundo
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Poppins'] font-bold text-white leading-tight">
                Transformando dados em
                <br />
                <span className="text-[#FF014F]">insights valiosos</span>
              </h1>

              {/* Name & Title */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Poppins'] font-bold text-white">
                  Nathannel Ebrenz
                </h2>
                <p className="text-xl font-['Montserrat'] font-normal text-[#CFCFCF]">Analista de Dados</p>
              </div>

              {/* Description */}
              <p className="max-w-2xl mx-auto lg:mx-0 text-[#9A9A9A] text-base md:text-lg leading-relaxed font-['Montserrat']">
                Movido pela transformação de dados complexos em insights visuais claros e acionáveis.
                 Atuando com <strong className="text-[#CFCFCF]">Power BI</strong>,{" "}
                <strong className="text-[#CFCFCF]">Python</strong>, <strong className="text-[#CFCFCF]">SQL</strong> e{" "}
                <strong className="text-[#CFCFCF]">Machine Learning</strong> para entregar insights
                que impulsionam a tomada de decisão estratégica.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/projects"
                  className="group bg-[#FF014F] hover:bg-[#E60045] text-white px-8 py-4 flex items-center gap-2 transition-all font-['Poppins'] font-medium"
                >
                  Ver Projetos
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/about"
                  className="border border-[#2A2A2D] hover:border-[#FF014F] text-[#CFCFCF] hover:text-white px-8 py-4 transition-all font-['Poppins'] font-medium"
                >
                  Sobre Mim
                </Link>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
              <div className="
                relative
                w-full
                max-w-[600px]
                max-h-[960px]
                aspect-square
              ">
                <HomeBG className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-20 bg-[#1A1A1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Stack Tecnológica
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Power BI", icon: BarChart3 },
              { name: "Python", icon: BrainCircuit },
              { name: "SQL", icon: Database },
              { name: "DAX", icon: BarChart3 },
              { name: "Machine Learning", icon: BrainCircuit },
              { name: "Visão Computacional", icon: BrainCircuit },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-[#212124] border border-[#2A2A2D] p-6 text-center hover:border-[#FF014F] transition-colors"
              >
                <tech.icon className="w-8 h-8 mx-auto mb-3 text-[#FF014F]" />
                <p className="text-[#CFCFCF] font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Impactos Relevantes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Visão Computacional",
                description:
                  "Projetos aplicando deep learning para detecção e classificação de imagens.",
              },
              {
                title: "Machine Learning",
                description:
                  "Desenvolvendo de modelos de Visão Computacional.",
              },
              {
                title: "Dashboards Analíticos",
                description:
                  "Visualizações em Power BI que transformaram dados complexos em decisões ágeis.",
              },
              {
                title: "Projetos Premiados",
                description:
                  "NASA Space Apps Challenge 2018– 1º lugar regional no hackathon da NASA.",
              },
              {
                title: "Análise de Dados Avançada",
                description:
                  "Exploração de grandes volumes de dados com Python e SQL.",
              },
              {
                title: "Storytelling com Dados",
                description:
                  "Comunicação clara de insights técnicos para públicos não-técnicos.",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-[#212124] border border-[#2A2A2D] p-6 hover:border-[#FF014F] transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-[#9A9A9A] text-lg mb-8">
            Entre em contato para discutir como posso ajudar sua organização a
            extrair valor dos dados.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FF014F] hover:bg-[#E60045] text-white px-8 py-4 transition-all"
          >
            Entre em Contato
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
