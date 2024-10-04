import TodosPrototyping from './TodosPrototyping';

describe('<TodosPrototyping />', () => {
  it('Монтирование', () => {
    cy.mountApplication(<TodosPrototyping />);
    cy.contains('John');
  });
});
