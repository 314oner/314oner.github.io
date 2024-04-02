/* eslint-disable global-require */

import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/aesthetic-png-pack-10-transparent.png'),
    name: 'first',
    title: translate({
      id: 'homepage.quotes.first.title',
      message: 'Lead Prettier Developer',
      description: 'Title of quote on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.first"
        description="Quote on the home page">
        I&apos;ve helped open source many projects at Facebook and every one
        needed a website. They all had very similar constraints: the
        documentation should be written in markdown and be deployed via GitHub
        pages. I’m so glad that Docusaurus now exists so that I don’t have to
        spend a week each time spinning up a new one.
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/aesthetic-png-pack-5-transparent.png'),
    name: 'second',
    title: translate({
      id: 'homepage.quotes.second.title',
      message: 'Lead React Native Advocate',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.second"
        description="Quote of Hector Ramos on the home page">
        Open source contributions to the React Native docs have skyrocketed
        after our move to Docusaurus. The docs are now hosted on a small repo in
        plain markdown, with none of the clutter that a typical static site
        generator would require. Thanks Slash!
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/aesthetic-png-pack-tumblr-7-transparent.png'),
    name: 'third',
    title: translate({
      id: 'homepage.quotes.third.title',
      message: 'ReasonReact Developer',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.third"
        description="Quote of Ricky Vetter on the home page">
        Docusaurus has been a great choice for the ReasonML family of projects.
        It makes our documentation consistent, i18n-friendly, easy to maintain,
        and friendly for new contributors.
      </Translate>
    ),
  },
];

export default QUOTES;
