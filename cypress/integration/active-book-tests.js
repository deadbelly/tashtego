import moment from 'moment';

describe('ActiveBook Default', () => {
  it('Should begin with no info', () => {
    cy.visit('http://localhost:3000');
    cy.get('.active-cover').should('not.exist');
  });
});

describe('ActiveBook Integration', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {fixture: 'searchResponse'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.homebtn').click();
  });

  it('Should have a cover', () => {
    cy.get('.active-cover').should('exist');
  });

  it('Should have a title', () => {
    cy.get('h1').should('contain', 'Moby Dick');
  });

  it('Should have an author', () => {
    cy.get('h2').should('contain', 'Herman Melville');
  });

  it('Should have a listed time to completion', () => {
    cy.get('h3').should('contain', 'You expect to finish in 15 days');
  });

  it('Should let the user change the completion date', () => {
    cy.get('h3').should('contain', 'You expect to finish in 15 days');
    cy.get('.datectrl').type(moment().add(21, 'days').format('YYYY-MM-DD'),
      {force: true});
    cy.get('h3').should('contain', 'You expect to finish in 20 days');
  });

  it('Should let the user return a book to the list', () => {
    cy.get('button').contains('Return to List').click();
    cy.get('h2').should('contain', 'Harold Bloom');
    cy.get('button').contains('Return to List').click();
    cy.get('h2').should('contain', 'Herman Melville');
  });

  it('Should let the user mark a book as finished', () => {
    cy.get('button').contains('Finished').click();
    cy.get('h2').should('contain', 'Harold Bloom');
    cy.get('button').contains('Finished').click();
    cy.get('.active-cover').should('not.exist');
  });
});
