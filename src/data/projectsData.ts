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
  OthersSection?: OthersSection[];
}

export interface OthersSection {
  title: string;
  order: number;
  html: string;
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
  {
    //Page Projects
    id: "4",
    title: "Análise do Mercado Global de Videogames (1980–2020)",
    description:
      "Análise estratégica da evolução da indústria global de videogames ao longo de quatro décadas, identificando padrões de crescimento, liderança de mercado e comportamento regional.",
    imageUrl: new URL("../assets/img/Games_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Panorama Global do Mercado de Jogos",
    context: `Análise histórica de 11 mil jogos lançados entre 1980 e 2020, totalizando $8,92 bilhões em vendas globais.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYzViNzM5YzAtYjgwNS00ZTZkLWFmZWYtNzA4YjUzOTdmYTU5IiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9&pageName=e51120cee18c7476881b",
    problem: `O projeto foi desenvolvido para compreender a evolução do mercado global de videogames, identificar os principais geradores de receita e analisar o desempenho por plataformas, gêneros e regiões ao longo de 40 anos.`,
    //Page Insights
    titleInsights:
      "Análise do Mercado Global de Videogames (1980–2020) – Insights & Análise",
    problemInsights:
      "Compreender quais fatores — plataformas, gêneros ou regiões — foram responsáveis pelo crescimento e consolidação da indústria global de videogames.",
    contextInsights: `
      <p>Análise de dados históricos de 1980 a 2020, incluindo:</p>
      <ul>
        <li>Total de Jogos: 11 Mil</li>
        <li>Vendas Globais Totais: $8,92 Bi</li>
        <li>Evolução das vendas por ano</li>
        <li>Participação por região</li>
        <li>Ranking dos jogos mais vendidos</li>
        <li>Vendas por plataforma</li>
        <li>Vendas por gênero</li>
      </ul>
    `,
    dataSource:
     "Base histórica de vendas globais de videogames – Modelagem e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "Total de Jogos", value: "11 Mil" },
      { label: "Vendas Globais Totais", value: "$8,92 Bi" },
      { label: "Jogo Mais Vendido", value: "Wii Sports" },
      { label: "Publicadora Líder", value: "Nintendo" },
    ],
    insights: [
      {
        label: "Domínio da América do Norte",
        value:
          "A América do Norte representa 49,27% das vendas globais ($4,4 Bi), consolidando-se como o maior mercado consumidor.",
      },
      {
        label: "Nintendo como Protagonista Histórica",
        value:
          "A Nintendo lidera tanto em publicadora quanto no ranking de jogos mais vendidos, com destaque para Wii Sports ($82,74 Mi).",
      },
      {
        label: "PS2 como Plataforma Líder",
        value:
          "O PlayStation 2 é a plataforma com maior volume acumulado de vendas globais.",
      },
      {
        label: "Gênero Action como Mais Vendido",
        value: "O gênero Action lidera com $1,75 Bi em vendas globais, seguido por Sports ($1,33 Bi) e Shooter ($1,04 Bi).",
      },
      {
        label: "Plataforma Mais Forte no Japão",
        value:
          "O Nintendo DS consolida-se como a plataforma dominante no mercado japonês, evidenciando um padrão claro de consumo: há forte preferência por consoles portáteis. Esse comportamento reforça que mobilidade, praticidade e alinhamento com o perfil cultural local são fatores estratégicos determinantes para o sucesso comercial na região.",
      },
    ],
    conclusions: `
      <p>A análise evidencia que o crescimento da indústria de videogames foi impulsionado principalmente por:</p>
      <ul>
        <li>Consolidação de grandes plataformas (PS2, Wii, DS).</li>
        <li>Forte presença da Nintendo no mercado global.</li>
        <li>Predominância do mercado norte-americano.</li>
        <li>Popularidade consistente do gênero Action.</li>
      </ul>
      <p>O dashboard permite visualizar padrões históricos, identificar ciclos de crescimento da indústria e compreender a dinâmica entre regiões, gêneros e plataformas ao longo de quatro décadas.</p>
    `,
  },
  {
    //Page Projects
    id: "5",
    title: "Dashboard Financeiro Bancário – Análise Global e por Instituição",
    description:
      "Análise comparativa de desempenho financeiro entre grandes instituições bancárias, permitindo avaliar receita, despesas, lucro, margem e comportamento de transações via PIX.",
    imageUrl: new URL("../assets/img/Financeiro_bancos_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Dashboard Financeiro Bancário",
    context: `Análise consolidada e individual de Receita, Despesas, Impostos, Lucro, Margem e volume de transações para Itaú, Bradesco, Santander, Safra e Nubank.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMmVkMjllMTctM2ZjOC00NzBmLWJiZDEtY2IzZjJhODU2NzRmIiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9",
    problem: `O dashboard permite alternar entre visão global e análise individual por banco, possibilitando comparação direta de rentabilidade, eficiência operacional e volume de transações digitais.`,
    //Page Insights
    titleInsights:
      "Dashboard Financeiro Bancário – Insights & Análise",
    problemInsights:
      "Compreender o desempenho financeiro consolidado do setor e identificar diferenças estratégicas entre instituições tradicionais e bancos digitais.",
    contextInsights: `
      <p>Análise financeira consolidada e individual, considerando:</p>
      <ul>
        <li>Receita</li>
        <li>Despesas</li>
        <li>Impostos</li>
        <li>Lucro</li>
        <li>Margem de lucro</li>
        <li>Volume total de transações</li>
        <li>Participação do PIX</li>
        <li>Distribuição regional de desempenho</li>
      </ul>
    `,
    dataSource:
     "Base financeira bancária simulada para fins analíticos – Modelagem e visualização desenvolvidas no Power BI.",
    kpis: [
      { label: "Receita Total", value: "R$ 94.602.867" },
      { label: "Despesas Totais", value: "R$ 44.863.841" },
      { label: "Impostos", value: "R$ 14.190.430" },
      { label: "Lucro Total", value: "R$ 35.548.596" },
      { label: "Margem de Lucro", value: "37,58%" },
      { label: "Total de Transações", value: "2.725" },
      { label: "Transações via PIX", value: "1.200", change: "44,04%" },
    ],
    insights: [
      {
        label: "Bancos tradicionais como Safra e Bradesco apresentam maior eficiência operacional.",
        value:
          "",
      },
      {
        label: "Itaú concentra maior volume absoluto de receita.",
        value:
          "",
      },
      {
        label: "Nubank opera com estratégia de alto volume e baixa margem.",
        value:
          "",
      },
      {
        label: "O PIX representa aproximadamente 40% a 45% das transações em todas as instituições.",
        value: "",
      },
      {
        label: "A margem média do setor gira em torno de 37%, com forte dispersão entre os bancos.",
        value:
          "",
      },
    ],
    conclusions: `
      <p>A análise evidencia diferentes estratégias operacionais:</p>
      <ul>
        <li>Bancos tradicionais focam em rentabilidade e controle de custos.</li>
        <li>Bancos digitais priorizam escala e volume transacional.</li>
        <li>A digitalização (PIX) já representa parcela relevante das movimentações.</li>
      </ul>
      <p>O dashboard permite análise estratégica comparativa, facilitando decisões relacionadas a eficiência operacional, posicionamento competitivo e transformação digital no setor bancário.</p>
    `,
    OthersSection: [
      {
        title: `Análise por Banco`,
        order: 5,
        html: `
          <div>
            <h3>Itaú</h3>
            <ul>
              <li>Receita: R$ 33.261.603</li>
              <li>Lucro: R$ 12.531.849</li>
              <li>Margem: 37,68%</li>
              <li>Transações: 1.148</li>
              <li>PIX: 519 (45,21%)</li>
            </ul>
            <p>Banco com forte presença em São Paulo e margem alinhada à média global.</p>
          </div>
          <div>
            <h3>Bradesco</h3>
            <ul>
              <li>Receita: R$ 7.404.796</li>
              <li>Lucro: R$ 4.800.714</li>
              <li>Margem: 64,83%</li>
              <li>Transações: 292</li>
              <li>PIX: 129 (44,18%)</li>
            </ul>
            <p>Apresenta alta eficiência operacional, com margem significativamente superior à média do setor.</p>
          </div>
          <div>
            <h3>Santander</h3>
            <ul>
              <li>Receita: R$ 17.406.980</li>
              <li>Lucro: R$ 8.461.357</li>
              <li>Margem: 48,61%</li>
              <li>Transações: 414</li>
              <li>PIX: 169 (40,82%)</li>
            </ul>
            <p>Margem robusta, com oscilações mensais e desempenho regional variável.</p>
          </div>
          <div>
            <h3>Safra</h3>
            <ul>
              <li>Receita: R$ 12.392.384</li>
              <li>Lucro: R$ 9.609.037</li>
              <li>Margem: 77,54%</li>
              <li>Transações: 168</li>
              <li>PIX: 71 (42,26%)</li>
            </ul>
            <p>Maior margem entre os bancos analisados, indicando forte controle de despesas.</p>
          </div>
          <div>
            <h3>Nubank</h3>
            <ul>
              <li>Receita: R$ 24.137.105</li>
              <li>Lucro: R$ 145.639</li>
              <li>Margem: 0,60%</li>
              <li>Transações: 703</li>
              <li>PIX: 312 (44,38%)</li>
            </ul>
            <p>Modelo digital com alto volume transacional, porém margem extremamente reduzida devido a custos elevados.</p>
          </div>
        `,
      }
    ],
  },
  {
    //Page Projects
    id: "6",
    title: "Dashboard de Desempenho Financeiro Empresarial",
    description:
      "Análise estratégica do faturamento, custos e lucratividade ao longo de 2024, identificando períodos críticos e oportunidades de melhoria na margem operacional.",
    imageUrl: new URL("../assets/img/Financeiro_capa.png", import.meta.url).href,
    tags: ["Power BI", "DAX", "SQL"],
    //Page Dashboard
    titleDash: "Dashboard de Desempenho Financeiro Empresarial",
    context: `Análise financeira anual com acompanhamento mensal de faturamento, custos fixos e variáveis, margem de lucro e distribuição por categorias de custo.`,
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNTA4NjY1YzUtMWI5OS00NTYzLThiY2YtNGRhYjhhYzVhODA4IiwidCI6IjEzMjNiOTUyLTM1ZjktNDEwMS1hZDI3LTI3ODFkYTUxMDU3ZSJ9",
    problem: `A empresa precisava de maior visibilidade sobre sua estrutura de custos e evolução do lucro ao longo do ano, permitindo identificar meses deficitários, sazonalidade e categorias que mais impactam o resultado financeiro.`,
    //Page Insights
    titleInsights:
      "Dashboard de Desempenho Financeiro Empresarial – Insights & Análise",
    problemInsights:
      "Falta de clareza sobre os principais fatores que impactam o lucro anual, especialmente em meses com resultado negativo.",
    contextInsights: `
      <p>Análise do desempenho financeiro mensal de janeiro a dezembro de 2024, incluindo:</p>
      <ul>
        <li>Faturamento total</li>
        <li>Custos totais</li>
        <li>Lucro mensal</li>
        <li>Margem</li>
        <li>Distribuição de custos por classe (fixo vs variável)</li>
        <li>Custos por categoria (Marketing, RH, TI, Logística, Insumos)</li>
      </ul>
    `,
    dataSource:
     "Base Financeira Empresarial – Modelagem e tratamento realizados no Power BI.",
    kpis: [
      { label: "Faturamento Total", value: "$223 Mil" },
      { label: "Custos Totais", value: "$190 Mil" },
      { label: "Lucro Total", value: "$33 Mil" },
      { label: "Margem Final", value: "15%" },
    ],
    insights: [
      {
        label: "Estrutura de Custos Concentrada em Variáveis",
        value:
          "67,29% dos custos são variáveis ($128 Mil), indicando forte dependência do volume operacional.",
      },
      {
        label: "Meses com Prejuízo Impactaram a Margem",
        value:
          "Foram registrados meses negativos (como fevereiro, março e maio), reduzindo o lucro acumulado do ano.",
      },
      {
        label: "Alta Concentração de Custos em Marketing",
        value:
          "A categoria Marketing ($54 Mil) representa o maior centro de custo, seguida por Insumos ($44 Mil) e RH ($37 Mil).",
      },
      {
        label: "Forte Recuperação no Final do Ano",
        value: "De setembro a dezembro há melhora significativa no resultado, com destaque para dezembro, que contribuiu fortemente para o lucro acumulado.",
      },
    ],
    conclusions: `
      <p>O dashboard permite identificar claramente que:</p>
      <ul>
        <li>A empresa opera com margem relativamente apertada (15%).</li>        
        <li>A estrutura de custos variáveis é dominante, o que aumenta a sensibilidade a oscilações de receita.</li>        
        <li>Existem meses críticos que exigem planejamento de fluxo de caixa.</li>        
        <li>O controle estratégico das categorias de maior peso pode ampliar significativamente a margem.</li>        
      </ul>
      <p>A visualização consolidada possibilita decisões mais assertivas sobre controle de custos, planejamento orçamentário e estratégias para aumento de rentabilidade.</p>
    `,
  },
];
