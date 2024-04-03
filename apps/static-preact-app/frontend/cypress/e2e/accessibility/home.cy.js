/* eslint-disable no-undef */
describe('A11y', () => {
  it('Главная страница отвечает требованиям доступности', () => {
    cy.injectAxe();
    cy.checkPageA11y('/');
    cy.checkA11y('button', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    });
  });
});
