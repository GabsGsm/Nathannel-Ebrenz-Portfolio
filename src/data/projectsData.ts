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
    imageUrl: new URL('../assets/img/spotify_capa.png', import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Análise de Músicas e Popularidade – Spotify",
    problem:
      "O dashboard foi desenvolvido para analisar padrões de sucesso musical, identificar artistas com maior volume de hits e compreender a relação entre tipo de álbum, popularidade e frequência de lançamentos.",
    context: 
      `Análise de 789 músicas e 342 artistas, explorando popularidade média, hits em 1ª posição,
      tipo de álbum, duração média e padrões mensais de lançamento.`,
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjZkNGFlY2ItNmQ4ZC00NTkzLWJlOTgtMzg3MzViYjhlMGRjIiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9&pageName=6583e08e1f0b8e2a6ee9",
    //Page Insights
    titleInsights: "Dashboard Spotify – Insights & Análise",
    problemInsights: "Compreender quais fatores influenciam a popularidade das músicas e quais artistas concentram maior relevância nas plataformas de streaming.",
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
    dataSource: "Base pública de dados musicais do Spotify – Modelagem e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "Músicas Distintas", value: "789" },
      { label: "Artistas", value: "342" },
      { label: "Popularidade Média", value: "90" },
      { label: "Duração Média", value: "3,28 minutos" },
    ],
    insights: [
      { 
        label: "Taylor Swift Lidera em Volume de Músicas", 
        value: "Com 85 músicas registradas, destaca-se como artista com maior presença no dataset." 
      },
      { 
        label: "Gênero Álbum Predomina", 
        value: "562 Álbuns contra 269 singles, indicando estratégia focada em projetos completos." 
      }, 
      { 
        label: "Conteúdo Não Explícito é Maioria", 
        value: "17 mil registros não explícitos contra 11 mil explícitos." 
      }, 
      { 
        label: "Alta Concentração de Popularidade em Poucos Artistas", 
        value: "A popularidade total por artista mostra concentração relevante em nomes como Taylor Swift, Billie Eilish, e The Weeknd." 
      }, 
      { 
        label: "Picos de Popularidade no Meio do Ano", 
        value: "A popularidade média mensal apresenta crescimento progressivo até o segundo semestre." 
      },   
    ],
    conclusions:
      "O dashboard permite identificar padrões de sucesso, tendências de mercado e comportamento de consumo musical, apoiando decisões estratégicas no setor de entretenimento e streaming.",
  },
];
