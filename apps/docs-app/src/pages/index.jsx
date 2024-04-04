import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';
import Quotes from '@site/src/data/quotes';
import Heading from '@theme/Heading';
import HackerNewsIcon from '@site/src/components/HackerNewsIcon';
import styles from './index.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: 'Docusaurus with Keytar' })}
            className={styles.heroLogo}
            src={useBaseUrl('/img/docusaurus_keytar.svg')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message: 'Documentation for Applications and Libraries',
                description: 'Home page',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs">
            <Translate>Get Started</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=314oner&amp;repo=314oner.github.io&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
              <div className={styles.topBannerDescription}>
                <b>
                  <Link to="https://news.ycombinator.com/best">
                    Hacker News
                  </Link>{' '}
                  today!
                </b>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                flexShrink: 0,
                padding: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <HackerNewsIcon />
            </div>
          </div>
        </div>
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{ overflow: 'hidden' }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();
  const { description } = customFields;
  return (
    <Layout title={tagline} description={description}>
      <main>
        <HeroBanner />
        <QuotesSection />
      </main>
    </Layout>
  );
}
