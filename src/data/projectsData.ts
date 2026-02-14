// Mock data for projects - easily expandable
export interface KPI {
  label: string;
  value: string;
  change?: string;
}
export interface Insights {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  titleDash: string;
  problem: string;
  context: string;
  dashboardUrl?: string;
  titleInsights: string;
  problemInsights: string;
  contextInsights: string;
  dataSource: string;
  kpis: KPI[];
  insights: Insights[];
  conclusions: string;
}

export const projectsData: Project[] = [
  {
    //Page Projects
    id: "1",
    title: "Dashboard Spotify – Análise de Popularidade e Performance Musical",
    description:
      "Análise estratégica de desempenho musical com foco em popularidade, artistas, tipos de álbum e padrões de lançamento ao longo dos anos.",
    imageUrl: new URL("../assets/img/spotify_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Análise de Músicas e Popularidade – Spotify",
    problem:
      "O dashboard foi desenvolvido para analisar padrões de sucesso musical, identificar artistas com maior volume de hits e compreender a relação entre tipo de álbum, popularidade e frequência de lançamentos.",
    context: `Análise de 789 músicas e 342 artistas, explorando popularidade média, hits em 1ª posição,
      tipo de álbum, duração média e padrões mensais de lançamento.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZjZkNGFlY2ItNmQ4ZC00NTkzLWJlOTgtMzg3MzViYjhlMGRjIiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9&pageName=6583e08e1f0b8e2a6ee9",
    //Page Insights
    titleInsights: "Dashboard Spotify – Insights & Análise",
    problemInsights:
      "Compreender quais fatores influenciam a popularidade das músicas e quais artistas concentram maior relevância nas plataformas de streaming.",
    contextInsights: `
      <p>Análise de dados musicais incluindo:</p>
      <ul>
        <li>Músicas por artista</li>
        <li>Popularidade média por mês</li>
        <li>Singles vs Álbuns</li>
        <li>Conteúdo explícito vs não explícito</li>
        <li>Músicas por ano</li>
        <li>Popularidade média por tipo de álbum</li>
        <li>Hits em 1ª posição por artista</li>
        <li>Popularidade total por artista</li>
      </ul>
    `,
    dataSource:
      "Base pública de dados musicais do Spotify – Modelagem e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "Músicas Distintas", value: "789" },
      { label: "Artistas", value: "342" },
      { label: "Popularidade Média", value: "90" },
      { label: "Duração Média", value: "3,28 minutos" },
    ],
    insights: [
      {
        label: "Taylor Swift Lidera em Volume de Músicas",
        value:
          "Com 85 músicas registradas, destaca-se como artista com maior presença no dataset.",
      },
      {
        label: "Gênero Álbum Predomina",
        value:
          "562 Álbuns contra 269 singles, indicando estratégia focada em projetos completos.",
      },
      {
        label: "Conteúdo Não Explícito é Maioria",
        value: "17 mil registros não explícitos contra 11 mil explícitos.",
      },
      {
        label: "Alta Concentração de Popularidade em Poucos Artistas",
        value:
          "A popularidade total por artista mostra concentração relevante em nomes como Taylor Swift, Billie Eilish, e The Weeknd.",
      },
      {
        label: "Picos de Popularidade no Meio do Ano",
        value:
          "A popularidade média mensal apresenta crescimento progressivo até o segundo semestre.",
      },
    ],
    conclusions: `<p>O dashboard permite identificar padrões de sucesso, tendências de mercado e comportamento de consumo musical, apoiando decisões estratégicas no setor de entretenimento e streaming.</p>`,
  },
  {
    //Page Projects
    id: "2",
    title: "Dashboard Estratégico de Recursos Humanos",
    description:
      "Análise estratégica de contratações, desligamentos, quadro ativo e folha salarial entre 2010 e 2018, permitindo compreender a evolução do capital humano da organização.",
    imageUrl: new URL("../assets/img/RH_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Dashboard de Recursos Humanos",
    context: `Análise de 9 anos de histórico de contratações, desligamentos, distribuição por área, gênero e evolução da folha salarial.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiN2Y2Mjc1YjUtZTdmYy00MGVkLWE4N2ItYWY5YTJlMjI1Yjc2IiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9",
    problem: `O dashboard foi desenvolvido para oferecer visibilidade estratégica sobre a estrutura organizacional, permitindo acompanhar crescimento do quadro de funcionários, rotatividade e impacto financeiro da folha salarial.`,
    //Page Insights
    titleInsights:
      "Dashboard Estratégico de Recursos Humanos – Insights & Análise",
    problemInsights:
      "Compreender a dinâmica de crescimento organizacional, distribuição de colaboradores por área e gênero, além do impacto financeiro da folha salarial ao longo dos anos.",
    contextInsights: `
      <p>Análise do período de 2010 a 2018, incluindo:</p>
      <ul>
        <li>Total de Contratações</li>
        <li>Funcionários Ativos</li>
        <li>Funcionários Desligados</li>
        <li>Folha Salarial Total</li>
        <li>Distribuição por Área</li>
        <li>Distribuição por Gênero</li>
        <li>Distribuição por Cidade</li>
      </ul>
    `,
    dataSource:
      "Base corporativa de Recursos Humanos – Modelagem e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "Total de Contratações", value: "234" },
      { label: "Folha Salarial Total", value: "R$2.216.326,20" },
      { label: "Funcionários Ativos", value: "217" },
      { label: "Funcionários Desligados", value: "17" },
    ],
    insights: [
      {
        label: "Crescimento Consistente do Quadro até 2017",
        value:
          "O número de contratações apresentou picos em 2013 (40 admissões), indicando período de expansão organizacional.",
      },
      {
        label: "Baixa Taxa de Desligamento",
        value:
          "Apenas 17 desligamentos no período analisado demonstram relativa estabilidade do quadro funcional.",
      },
      {
        label: "Área Administrativa Lidera em Contratações",
        value:
          "O setor Administrativo concentra o maior volume de contratações (60), seguido por Comercial (51) e Operações (43).",
      },
      {
        label: "Equilíbrio de Gênero nas Contratações",
        value: "Distribuição equilibrada: 51,28% masculino e 48,72% feminino.",
      },
      {
        label: "Folha Salarial Concentrada em Áreas Estratégicas",
        value:
          "Administrativo (R$ 0,53 Mi) e Comercial (R$ 0,48 Mi) representam os maiores impactos na folha salarial total.",
      },
    ],
    conclusions: `
      <p>A análise evidencia que a empresa apresentou crescimento estruturado ao longo dos anos, com:</p>
      <ul>
        <li>Expansão significativa entre 2013 e 2017.</li>
        <li>Baixa rotatividade comparada ao volume de contratações.</li>
        <li>Distribuição relativamente equilibrada entre gêneros.</li>
        <li>Concentração de investimentos salariais nas áreas administrativas e comerciais.</li>
      </ul>
      <p>O dashboard fornece suporte estratégico para decisões relacionadas a planejamento de contratações, controle de custos com pessoal e análise de rotatividade.</p>
    `,
  },
  {
    //Page Projects
    id: "3",
    title: "Dashboard de Controle de Estoque",
    description:
      "Análise estratégica de movimentações, giro e desempenho de estoque ao longo do ano, com foco em entradas, saídas, categorias e produtos.",
    imageUrl: new URL("../assets/img/Controle_de_estoque_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Controle de Estoque | Power BI",
    context: `Análise de movimentações realizadas entre 01/01/2025 e 30/12/2025, contemplando entradas, saídas, saldo em estoque, giro por trimestre e desempenho por categoria e produto.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNjM2M2M2YTktMjc0YS00NTM0LThlZDQtNWEzMmNjMDBmYTRlIiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9",
    problem: `O dashboard foi desenvolvido para oferecer visibilidade completa sobre o fluxo de estoque, permitindo acompanhar entradas, saídas, saldo disponível, desempenho por categoria e eficiência operacional por meio do giro de estoque.`,
    //Page Insights
    titleInsights:
      "Controle de Estoque – Insights & Análise",
    problemInsights:
      "Compreender o comportamento do estoque ao longo do ano, identificar categorias com maior impacto financeiro e avaliar a eficiência operacional por meio do giro de estoque.",
    contextInsights: `
      <p>Análise anual considerando:</p>
      <ul>
        <li>Entradas e saídas em valor (R$) e unidades</li>
        <li>Saldo final em estoque</li>
        <li>Giro de estoque anual e trimestral</li>
        <li>Estoque por mês</li>
        <li>Estoque por categoria</li>
        <li>Estoque por produto</li>
        <li>Análise detalhada por categoria</li>
      </ul>
      <p>Período analisado: 363 dias (2025)</p>
    `,
    dataSource:
      "Base estruturada para controle de estoque empresarial – Modelagem, métricas e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "R$ 6.960.812", value: "10.356 unidades", change: "+ Entradas Totais" },
      { label: "R$ 5.701.319", value: "8.498 unidades", change: "- Saídas Totais" },
      { label: "R$ 1.259.494", value: "1.858 unidades", change: "Estoque Final" },
      { label: "Giro de Estoque", value: "4,53" },
    ],
    insights: [
      {
        label: "Informática lidera em volume financeiro",
        value:
          "Categoria com maior estoque acumulado (R$ 347 mil), seguida por Celulares e Eletrônicos.",
      },
      {
        label: "Giro crescente ao longo do ano",
        value:
          "O giro evolui de 3,05 no 1º trimestre para 5,65 no 4º trimestre, indicando aumento na eficiência operacional.",
      },
      {
        label: "Forte movimentação em Informática, Eletrônicos e Celulares",
        value:
          "Categorias com maior volume de entradas e saídas, representando maior impacto financeiro no estoque.",
      },
      {
        label: "Sazonalidade mensal",
        value: "Janeiro apresentou o maior nível de estoque (R$ 148 mil), enquanto novembro registrou o menor valor (R$ 80 mil).",
      },
      {
        label: "Concentração em produtos estratégicos",
        value:
          "Produtos como smartphones, monitores gamer e micro-ondas concentram maior valor financeiro individual.",
      },
    ],
    conclusions: `
      <ul>
        <li>Crescimento consistente no giro de estoque ao longo do ano</li>
        <li>Forte concentração financeira em categorias tecnológicas</li>
        <li>Gestão equilibrada entre entradas e saídas</li>
        <li>Possibilidade de otimização em categorias com menor giro</li>
      </ul>
      <p>O dashboard permite monitoramento estratégico do estoque, apoio à tomada de decisão e identificação de oportunidades de melhoria operacional e financeira.</p>
    `,
  },
];
