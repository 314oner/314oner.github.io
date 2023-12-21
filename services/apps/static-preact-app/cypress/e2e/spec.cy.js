describe("Accessibility Test", function () {
  it('Загрузить главную страницу', () => {
    cy.visit('/')
    cy.contains('Попробуйте поискать свою любимую песню!').should('be.visible')
  })
  it("Проверить доступность конопок", function () {
    cy.visit("/");
    //accessibility
    cy.injectAxe();
    cy.checkA11y("button", {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"],
      },
    });
  });
});

