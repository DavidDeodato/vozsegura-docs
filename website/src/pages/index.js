import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="VozSegura"
      description="Ambiente digital inclusivo, seguro e participativo para 60+"
    >
      <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>VozSegura</h1>
        <p style={{ maxWidth: 720, margin: '1rem auto 2rem' }}>
          Documentação do projeto VozSegura — uma plataforma conversacional para
          proteger, educar e engajar pessoas 60+ no ambiente digital.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/"
        >
          Acessar documentação
        </Link>
      </main>
    </Layout>
  );
}


