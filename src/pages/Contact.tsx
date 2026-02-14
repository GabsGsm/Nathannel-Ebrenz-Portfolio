import { Linkedin, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Contato
          </h1>
          <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
            Interessado em colaborar ou discutir como análise de dados pode
            agregar valor ao seu negócio? Vamos conversar.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex gap-6 mb-12">
          {/* Email Card */ false &&
            <a
              href="mailto:contato@email.com"
              className="bg-[#212124] border border-[#2A2A2D] p-8 hover:border-[#FF014F] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF014F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E60045] transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-[#CFCFCF]">contato@email.com</p>
                  <p className="text-[#9A9A9A] text-sm mt-2">
                    Respondo em até 24 horas
                  </p>
                </div>
              </div>
            </a>
          }

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/nathannaeldados/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#212124] border border-[#2A2A2D] p-8 hover:border-[#FF014F] transition-all group w-full"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF014F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E60045] transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  LinkedIn
                </h3>
                <p className="text-[#CFCFCF]">/in/nathannaeldados</p>
                <p className="text-[#9A9A9A] text-sm mt-2">
                  Conecte-se comigo
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-[#1A1A1C] border-l-4 border-[#FF014F] p-8">
          <h3 className="text-xl font-semibold text-white mb-3">
            Procurando por um Analista de Dados?
          </h3>
          <p className="text-[#CFCFCF] mb-4">
            Estou sempre aberto a novos desafios e oportunidades de colaboração
            em projetos de análise de dados, dashboards e insights estratégicos.
          </p>
          <p className="text-[#FF014F]">
            Vamos transformar seus dados em decisões vencedoras.
          </p>
        </div>
      </div>
    </div>
  );
}
