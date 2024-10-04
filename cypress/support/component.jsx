/* eslint-disable no-undef */
import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import { ApplicationStub } from './ApplicationStub';
import './commands';

Cypress.Commands.add('mount', mount);
const mountApplicationDefaultOptions = {
  viewport: [1920, 1080],
  applicationStubProps: {
    loader: () => {},
  },
};

Cypress.Commands.add('mountApplication', (component, options) => {
  const consolidatedOptions = {
    ...mountApplicationDefaultOptions,
    ...options,
  };
  cy.viewport(...consolidatedOptions.viewport);
  return mount(
    <ApplicationStub {...consolidatedOptions.applicationStubProps}>
      {component}
    </ApplicationStub>,
  );
});
