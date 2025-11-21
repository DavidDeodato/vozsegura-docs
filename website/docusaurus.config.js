/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VozSegura',
  tagline: 'Ambiente digital inclusivo, seguro e participativo para 60+',
  url: 'https://DavidDeodato.github.io',
  baseUrl: '/vozsegura-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DavidDeodato',
  projectName: 'vozsegura-docs',
  themeConfig: {
    navbar: {
      title: 'VozSegura',
      logo: {
        alt: 'VozSegura logo',
        src: 'https://raw.githubusercontent.com/DavidDeodato/vozsegura-docs/main/docs/logo_sem_fundo_sem_nome_embaixo.png',
      },
      items: [
        { to: '/docs/index', label: 'Sumario Executivo', position: 'left' },
        { to: '/docs/entendimento-problema', label: 'Problema', position: 'left' },
            { to: '/docs/entendimento-usuario', label: 'Usuario', position: 'left' },
        { to: '/docs/solucao', label: 'Solucao', position: 'left' },
        { to: '/docs/analise-financeira-tecnica', label: 'Analise', position: 'left' },
            { to: '/docs/entendimento-usuario', label: 'Usuario', position: 'left' },
        { to: '/docs/impacto', label: 'Impacto', position: 'left' },
        { to: '/docs/equipe', label: 'Equipe', position: 'left' },
        { to: '/docs/roadmap', label: 'Roadmap', position: 'left' },
        {
          href: 'https://github.com/DavidDeodato/vozsegura-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentacao',
          items: [
            { label: 'Sumario Executivo', to: '/docs/index' },
            { label: 'Problema', to: '/docs/entendimento-problema' },
            { label: 'Solucao', to: '/docs/solucao' },
            { label: 'Analise', to: '/docs/analise-financeira-tecnica' },
            { label: 'Impacto', to: '/docs/impacto' },
            { label: 'Equipe', to: '/docs/equipe' },
            { label: 'Roadmap', to: '/docs/roadmap' },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DavidDeodato/vozsegura-docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} VozSegura`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DavidDeodato/vozsegura-docs/edit/main/',
        },
        blog: false,
      }),
    ],
  ],
};

module.exports = config;
