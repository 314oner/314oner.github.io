import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <header>
      Header section
    </header >
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Привет! Это ${siteConfig.title}`}
      description="Описание попадет в <head />">
      <HomepageHeader />
      <main>
        Main section
      </main>
    </Layout>
  );
}
