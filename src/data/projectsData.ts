// Mock data for projects - easily expandable
export const projectsData = [
  {
    id: "vendas-regional",
    title: "Dashboard de Vendas Regionais",
    description:
      "Análise detalhada do desempenho de vendas por região, identificando oportunidades de crescimento e otimização.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["Power BI", "DAX", "SQL"],
    problem:
      "A empresa precisava de visibilidade sobre o desempenho regional de vendas para direcionar estratégias de expansão.",
    context:
      "Análise de 3 anos de histórico de vendas, cobrindo 5 regiões e mais de 200 produtos.",
    dataSource: "SQL Server - Base transacional de vendas",
    dashboardUrl: "https://app.powerbi.com/view?r=exemplo",
    kpis: [
      { label: "Receita Total", value: "R$ 12,5M", change: "+15%" },
      { label: "Ticket Médio", value: "R$ 850", change: "+8%" },
      { label: "Taxa de Conversão", value: "34%", change: "+5%" },
      { label: "Regiões Ativas", value: "5", change: "0%" },
    ],
    insights: [
      "A região Sul apresentou crescimento de 25% no último trimestre, impulsionado por novos clientes B2B.",
      "Produtos de tecnologia representam 45% da receita total, mas apenas 20% do volume de transações.",
      "Identificada oportunidade de cross-selling na região Nordeste, com potencial de R$ 800k adicionais.",
      "Sazonalidade forte em dezembro, com 30% da receita anual concentrada neste período.",
    ],
    conclusions:
      "O dashboard permitiu à equipe comercial priorizar ações em regiões de alto potencial, resultando em um aumento de 15% na receita geral. A análise granular por produto revelou oportunidades antes invisíveis.",
  },
  {
    id: "recursos-humanos",
    title: "Análise de Performance de RH",
    description:
      "Dashboard estratégico para monitoramento de KPIs de recursos humanos, incluindo turnover, absenteísmo e satisfação.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    tags: ["Power BI", "Python", "DAX"],
    problem:
      "O departamento de RH não tinha visibilidade consolidada sobre indicadores críticos de gestão de pessoas.",
    context:
      "Análise de dados de mais de 500 colaboradores ao longo de 2 anos, incluindo histórico de avaliações, presença e pesquisas de clima.",
    dataSource: "Excel + API de ponto eletrônico + Google Forms",
    dashboardUrl: "https://app.powerbi.com/view?r=exemplo",
    kpis: [
      { label: "Turnover Anual", value: "12%", change: "-3%" },
      { label: "Absenteísmo", value: "2,5%", change: "-0,5%" },
      { label: "Satisfação Geral", value: "8,2/10", change: "+0,4" },
      { label: "Tempo Médio de Contratação", value: "28 dias", change: "-5" },
    ],
    insights: [
      "Turnover é 40% maior em colaboradores com menos de 1 ano de empresa.",
      "Departamentos com líderes que receberam treinamento de gestão apresentam 30% menos absenteísmo.",
      "Colaboradores que participaram de programas de desenvolvimento têm nota de satisfação 15% superior.",
      "Período de maior turnover é entre março e abril, coincidindo com o calendário de promoções.",
    ],
    conclusions:
      "A análise possibilitou a criação de programas de onboarding mais eficazes e ações de retenção direcionadas, reduzindo o turnover em 3 pontos percentuais.",
  },
  {
    id: "logistica-operacional",
    title: "Otimização de Logística",
    description:
      "Análise operacional de entregas, tempo de transporte e eficiência da cadeia logística.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    tags: ["Power BI", "SQL", "DAX"],
    problem:
      "A operação logística enfrentava atrasos recorrentes e falta de visibilidade sobre gargalos no processo.",
    context:
      "Análise de 50 mil entregas realizadas em 12 meses, cobrindo 3 centros de distribuição e 15 rotas principais.",
    dataSource: "PostgreSQL - Sistema de gestão de frotas",
    dashboardUrl: "https://app.powerbi.com/view?r=exemplo",
    kpis: [
      { label: "Entregas no Prazo", value: "87%", change: "+12%" },
      { label: "Tempo Médio de Entrega", value: "2,3 dias", change: "-0,7" },
      { label: "Custo por Entrega", value: "R$ 18", change: "-R$ 3" },
      { label: "Taxa de Devolução", value: "3,2%", change: "-1,1%" },
    ],
    insights: [
      "Rotas urbanas apresentam 25% mais atrasos devido a janelas de entrega restritas.",
      "O centro de distribuição da região Sul opera com 95% de capacidade, sendo um ponto crítico.",
      "Entregas realizadas no período da manhã têm 40% menos devoluções.",
      "Implementação de roteirização dinâmica reduziu em 15% o tempo médio de entrega.",
    ],
    conclusions:
      "O dashboard identificou gargalos operacionais que, ao serem endereçados, resultaram em 12% de melhoria na pontualidade e redução de R$ 3 no custo médio por entrega.",
  },
];
