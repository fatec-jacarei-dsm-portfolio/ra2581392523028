import type { SiteData } from '../types';

const data: SiteData = {
  name: 'Erick Rost',
  title: 'Software Developer · Business & Technology',
  shortDesc:
    'Construindo sistemas na interseção entre operação, dados e produto.',

  about: [
  `Atuo na interseção entre <strong>negócio e tecnologia</strong>, com foco em entender problemas reais e traduzi-los em soluções estruturadas. Minha base em processos fiscais e ERP me trouxe uma visão prática de como sistemas impactam diretamente operação, custos e tomada de decisão.`,

  `Tenho forte familiaridade com <strong>regras de negócio complexas</strong>, análise de dados e investigação de problemas. Isso se reflete na minha forma de trabalhar: priorizo clareza, consistência de dados e entendimento profundo antes de propor qualquer solução técnica.`,

  `Do ponto de vista técnico, trabalho com SQL (SQL Server e SAP HANA), integrações entre sistemas, análise de dados e estou evoluindo no desenvolvimento backend com Node.js e TypeScript, construindo APIs e aplicações orientadas a dados.`,

  `Meu interesse está em resolver problemas que não são apenas técnicos, mas que têm impacto real no negócio. Busco evoluir na construção de sistemas, integrações e soluções que reduzam complexidade operacional e aumentem confiabilidade.`,

  `<strong>Mais do que tecnologia, me interessa entender como e por que as coisas funcionam, mas como podem funcionar melhor.</strong>`
],

  interests: [
    {
      label: 'Stack',
      items: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'SAP HANA', 'Docker', 'REST APIs', 'SQL'],
    },
    {
      label: 'Explorando',
      items: ['.NET', 'Azure'],
    },
    {
      label: 'Interesses',
      items: ['Arquitetura de Microsserviços', 'Integração de Sistemas', 'Cloud Computing', 'DevOps'],
    },
  ],

  experiences: [
    {
      role: 'Analista de Sustentação SAP Business One',
      company: 'SPS Group · São José dos Campos, SP',
      period: 'Mar 2026 — Presente',
      description: `Atuação na sustentação de sistemas ERP com foco em SAP Business One, realizando análise de incidentes, troubleshooting e investigação de causa raiz em ambiente produtivo. Trabalho diretamente com consultas SQL em SQL Server e SAP HANA para validação e correção de dados, além de apoiar integrações entre sistemas utilizando JSON e APIs. A função exige forte entendimento de regras de negócio, especialmente em cenários fiscais e operacionais, garantindo consistência de dados e continuidade dos processos.`,
      tags: ['SAP Business One', 'JavaScript', 'API', 'SQL Server', 'SAP HANA', 'Troubleshooting', 'Integrações', 'JSON']
    },
    {
      role: 'Desenvolvedor Voluntário',
      company: 'Instituto Travessia · Remoto',
      period: 'Jan 2026 — Presente',
      description: `Atuo voluntariamente como desenvolvedor front-end, realizando manutenção, evolução e criação de aplicações web utilizando React.js, Next.js e TypeScript. Trabalho na construção e atualização de componentes com Styled-Components, além de documentar e versionar interfaces com Storybook, garantindo consistência, reutilização e qualidade do código.`,
      tags: ['React.js', 'Next.js', 'TypeScript', 'Styled-Components', 'API', 'JavaScript']
    },
    {
      role: 'Analista Fiscal Pleno',
      company: 'DGA Group · Remoto',
      period: 'Ago 2025 — Mar 2026',
      description: `Alocado no Grupo Sany, com foco na apuração de tributos e entrega de obrigações acessórias. Trabalho com SAP ECC e TaxOne, realizando parametrizações, conferências e análises de dados fiscais para garantir conformidade e eficiência nos processos. Aplicando conhecimentos em automação, análise de dados e integração de sistemas, contribuo para a otimização de rotinas fiscais e apoio na tomada de decisão estratégica. O desafio é lidar com a complexidade das regras fiscais, garantindo precisão e consistência em um ambiente de alta demanda e mudanças constantes.`,
      tags: ['SAP ECC', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados', 'Python']
    },
    {
      role: 'Analista Fiscal Júnior',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Jan 2025 — Ago 2025',
      description: `Responsável pela apuração de tributos nos regimes Lucro Real, Lucro Presumido e Simples Nacional, abrangendo PIS, COFINS, ICMS, ICMS-ST, IPI, DIFAL e DAS. Atuei na escrituração e conferência de documentos fiscais, análise de retenções na fonte (ISS, IRRF, CSRF e INSS) e emissão de guias de recolhimento. Realizei a entrega das obrigações acessórias SPED Fiscal, SPED Contribuições, EFD-Reinf e DCTFWeb, além de prestar consultorias pontuais a clientes sobre legislação, parametrizações e conformidade fiscal. Trabalhei com sistemas ERP como TOTVS Protheus, SAP B1, SAGE e K2, atuando na conferência de integrações e suporte a rotinas operacionais.`,
      tags: ['SAP Business One', 'TOTVS Protheus', 'SAGE', 'K2', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados'] 
    },
        {
      role: 'Assistente Fiscal',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Fev 2024 — Jan 2025',
      description: `Atuei na apuração de impostos nos regimes Lucro Presumido e Simples Nacional, compreendendo PIS, COFINS, ICMS, DIFAL e DAS, além da importação e conferência de lançamentos fiscais. Realizei a escrituração de documentos fiscais e faturas como NF-e, NFS e CT-e, bem como a análise de impostos retidos na fonte (ISS, IRRF, CSRF e INSS) e a emissão de guias e DARFs para pagamento. Fui responsável pela entrega das obrigações acessórias EFD-Reinf, SPED Fiscal, SPED Contribuições, DCTFWeb e DIRF, utilizando sistemas ERP como TOTVS Protheus, SAP B1, SAGE e K2.`,
      tags: ['SAP Business One', 'TOTVS Protheus', 'SAGE', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados']
    },
        {
      role: 'Estagiário Fiscal',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Jul 2023 — Fev 2024',
      description: `Realizei a escrituração de documentos fiscais e faturas, incluindo NF-e, NFS e CT-e, além da apuração de impostos retidos na fonte como ISS, IRRF, CSRF e INSS. Fui responsável pela emissão de guias de ISS e DARFs e pelo lançamento dos eventos R-2000 e R-4000 no EFD-Reinf.`,
      tags: ['Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados', 'TOTVS Protheus']  
    }
  ],

  projects: [
    {
      name: 'Chatbot de Autoatendimento para Secretaria Acadêmica',
      category: 'Acadêmicos',
      semester: '2DSM – 1º Sem. 2026',
      description: `Aplicação web desenvolvida como Projeto Integrador para otimizar o atendimento da Secretaria Acadêmica da Fatec Jacareí. O sistema utiliza fluxos guiados e menus estruturados para responder dúvidas recorrentes sobre calendário acadêmico, horários de aula, estágio supervisionado, aproveitamento de disciplinas, trancamentos e estrutura curricular dos cursos.`,
      contribution: `Atuei na definição e organização dos requisitos do produto, estruturação dos fluxos de atendimento e validação das regras de negócio com foco na clareza das respostas ao usuário. Também contribuí na construção das telas administrativas, na modelagem dos dados relacionados aos fluxos e na integração entre front-end e back-end para manter o conteúdo do chatbot gerenciável pela equipe responsável.`,
      tags: ['React', 'Node.js', 'TypeScript', 'Chatbot', 'UX', 'REST API', 'Scrum', 'Automação de Atendimento'],
      link: { label: 'Em Desenvolvimento', url: '#' },
    },
    {
      name: 'INPE - AgriRS Lab',
      category: 'Acadêmicos',
      semester: '1DSM – 2º Sem. 2025',
      description: `Projeto Integrador desenvolvido para o Laboratório de Sensoriamento Remoto Agrícola do INPE (AgriRS Lab), com o objetivo de criar um website institucional para divulgar pesquisas, publicações, equipe e atividades do laboratório. A solução buscou facilitar o acesso público às informações do laboratório e apoiar a comunicação científica com pesquisadores, estudantes e possíveis parceiros.`,
      contribution: `Atuei como Product Owner, sendo responsável por organizar requisitos, priorizar entregas, alinhar expectativas com o cliente e apoiar a equipe na transformação das necessidades do laboratório em funcionalidades. Também contribuí na estruturação das páginas, no refinamento das histórias de usuário, na validação das entregas e na apresentação final do projeto ao cliente.`,
      tags: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Node.js', 'Express', 'REST API', 'Scrum'],
      link: { label: 'GitHub', url: 'https://github.com/erickrost/AgriRS-Lab/tree/main' },
    },
    {
      name: 'Bancos de Dados em SIG: Análise Crítica de Práticas, Desafios e Potencial de Estudo',
      category: 'Acadêmicos',
      semester: '1DSM – 2º Sem. 2025',
      description: `Artigo acadêmico desenvolvido a partir de uma revisão bibliográfica sistemática sobre a integração entre bancos de dados e Sistemas de Informações Geográficas (SIG), considerando estudos publicados entre 2018 e 2024. O trabalho analisou desempenho, desafios técnicos e aplicabilidade em áreas como planejamento urbano, gestão ambiental e logística territorial.`,
      contribution: `Fui responsável pela pesquisa bibliográfica, seleção e análise das fontes, organização dos principais achados e redação crítica do conteúdo. A contribuição principal foi relacionar bancos de dados, desempenho e uso de dados espaciais, conectando conceitos técnicos a aplicações práticas em SIG.`,
      tags: ['Pesquisa Acadêmica', 'Bancos de Dados', 'SIG', 'Análise de Dados', 'Revisão Bibliográfica'],
      link: { label: 'Artigo', url: 'https://www.even3.com.br/anais/xviiienfocuninter/1234789-bancos-de-dados-em-sig--analise-critica-de-praticas-desafios-e-potencial-de-estudo/' },
    },
    {
      name: 'Sustentação e Análise de Incidentes em SAP Business One',
      category: 'Profissionais',
      semester: 'Experiência profissional – 1º Sem. 2026',
      description: `Atuação profissional em sustentação de aplicações ERP com foco em SAP Business One, análise de incidentes em ambiente produtivo, investigação de inconsistências em banco de dados e apoio a integrações entre sistemas.`,
      contribution: `Minha contribuição envolve análise de causa raiz, construção e validação de consultas SQL em SQL Server e SAP HANA, apoio na correção de dados, leitura de logs, investigação de integrações com JSON e APIs, além da comunicação técnica com usuários e equipe de desenvolvimento para reduzir recorrências e manter a continuidade operacional.`,
      tags: ['SAP Business One', 'SQL Server', 'SAP HANA', 'SQL', 'JSON', 'APIs', 'Troubleshooting', 'RCA'],
      repositoryNote: 'Projeto profissional com informações confidenciais; repositório não público.',
    },
    {
      name: 'Setup Local de LLMs para RAG e Automação',
      category: 'Pessoais',
      semester: 'Projeto pessoal – 1º Sem. 2026',
      description: `Infraestrutura dockerizada para rodar um ecossistema de IA local, sem dependência de APIs externas. O projeto combina Ollama, Open WebUI e SearXNG para conversas com RAG em tempo real, além de Open Interpreter em ambiente Python para automação de scripts diretamente pelo terminal.`,
      contribution: `Fui responsável por configurar o ambiente em Linux, organizar os serviços com Docker, testar a execução local dos modelos, documentar o fluxo de uso e ajustar a solução para funcionar em um notebook com Ryzen 7 APU e 24 GB de RAM compartilhada. O projeto reforçou conhecimentos em containers, automação, IA local e integração entre ferramentas.`,
      tags: ['Docker', 'Ollama', 'LLM', 'RAG', 'SearXNG', 'Open WebUI', 'Python', 'Linux'],
      link: { label: 'GitHub', url: 'https://github.com/erickrost/local-llm-workflow' },
    },
  ], 
    education: [
    {
      type: 'education' as const,
      degree: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
      institution: 'Faculdade de Tecnologia de Jacareí (Fatec Jacareí)',
      period: 'Jul 2025 — Jul 2028',
    },
    {
      type: 'education' as const,
      degree: 'Tecnólogo em Gestão Financeira',
      institution: 'Unifatecie',
      period: 'Jan 2025 — Dez 2026',
    },
    {
      type: 'certification' as const,
      degree: 'English Certificate B2 - Upper Intermediate',
      institution: 'EF SET',
      period: 'Jan 2026',
    },
    {
      type: 'certification' as const,
      degree: 'IT Essentials',
      institution: 'Cisco Networking Academy',
      period: 'Dez 2025',
    },
  ],

  contact: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/erick-rost',
      href: 'https://linkedin.com/in/erick-rost',
    },
    {
      label: 'GitHub',
      value: 'github.com/erickrost',
      href: 'https://github.com/erickrost',
    },
  ],

  github: 'https://github.com/erickrost',
  linkedin: 'https://linkedin.com/in/erick-rost',
};

export default data;
