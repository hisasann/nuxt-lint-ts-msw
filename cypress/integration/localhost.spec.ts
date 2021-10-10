describe('Check localhost site', () => {
  it('ルートパスにアクセスできるか', () => {
    cy.visit('http://localhost:3000/');

    // https://docs.cypress.io/api/commands/title
    cy.title().should('eq', 'nuxt-lint-ts-msw---');
  });

  it('localhost の title が取得できるか', () => {
    cy.visit('http://localhost:3000/');

    // https://docs.cypress.io/api/commands/get
    cy.get('#toMock').click();

    cy.url().should('include', '/mock-sample');
  });

  it('モックへのリンクのクリック先がmock-sampleであるか', () => {
    cy.visit('http://localhost:3000/');

    // https://docs.cypress.io/api/commands/get
    cy.get('#toMock').click();

    cy.url().should('include', '/mock-sample');
  });
});
