describe('Loader', () => {
  it('Should render loading screen while promise is ongoing', () => {
    cy.intercept({method: 'GET', delay: 10000, url: 'https://openlibrary.org/search.json?q=moby+dick'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('span').should('be.visible');
  });
});
