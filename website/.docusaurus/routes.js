import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vozsegura-docs/__docusaurus/debug',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug', '074'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/config',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/config', '5be'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/content',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/content', '389'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/globalData', '9ae'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/metadata', '63f'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/registry', '420'),
    exact: true
  },
  {
    path: '/vozsegura-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/vozsegura-docs/__docusaurus/debug/routes', '82c'),
    exact: true
  },
  {
    path: '/vozsegura-docs/docs',
    component: ComponentCreator('/vozsegura-docs/docs', 'd23'),
    routes: [
      {
        path: '/vozsegura-docs/docs/',
        component: ComponentCreator('/vozsegura-docs/docs/', 'fa8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/analise-financeira-tecnica',
        component: ComponentCreator('/vozsegura-docs/docs/analise-financeira-tecnica', '5cb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/entendimento-problema',
        component: ComponentCreator('/vozsegura-docs/docs/entendimento-problema', '6b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/equipe',
        component: ComponentCreator('/vozsegura-docs/docs/equipe', '7c2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/impacto',
        component: ComponentCreator('/vozsegura-docs/docs/impacto', 'db0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/roadmap',
        component: ComponentCreator('/vozsegura-docs/docs/roadmap', '809'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vozsegura-docs/docs/solucao',
        component: ComponentCreator('/vozsegura-docs/docs/solucao', '531'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
