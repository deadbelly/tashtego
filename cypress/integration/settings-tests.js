describe('Settings', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {fixture: 'searchResponse'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.settingsbtn').click();
  });

  it('Should let the user lock the reading list', () => {
    cy.get('input[name="lockList"]').click();
    cy.get('.listbtn').click();
    cy.get('.controlbtn').should('be.disabled');
  });

  it('Should let the user lock the date', () => {
    cy.get('input[name="lockDate"]').click();
    cy.get('.homebtn').click();
    cy.get('.datectrl').should('be.disabled');
  });

  it('Should let the user change the default number of days', () => {
    cy.get('input[name="defaultDays"]').clear().type('25');
    cy.get('.homebtn').click();
    cy.get('.controlbtn').first().click();
    cy.get('h3').should('contain', 'You expect to finish in 25 days');
  });
});
