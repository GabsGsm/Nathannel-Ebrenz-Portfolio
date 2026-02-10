import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2D] bg-[#1A1A1C] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#9A9A9A] text-sm">
            © 2026 Data Analytics Portfolio. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nathannaeldados/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B3B3B3] hover:text-[#FF014F] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {false && 
              <a
                href="mailto:contato@email.com"
                className="text-[#B3B3B3] hover:text-[#FF014F] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
