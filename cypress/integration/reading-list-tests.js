describe('ReadingList Default', () => {
  it('Should begin with no books', () => {
    cy.visit('http://localhost:3000');
    cy.get('.listbtn').click();
    cy.get('.list-item').should('not.exist');
  });
});

describe('ReadingList Integration', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {fixture: 'searchResponse'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.listbtn').click();
  });

  it('Should let the user add books', () => {
    cy.get('.list-item').should('have.length', 1);
    cy.get('.searchbtn').click();
    cy.get('.book').eq(2).click();
    cy.get('.listbtn').click();
    cy.get('.list-item').should('have.length', 2);
  });

  it('Should let the user remove books', () => {
    cy.get('.list-item').should('have.length', 1);
    cy.get('.controlbtn').click();
    cy.get('.list-item').should('have.length', 0);
  });

  it('Should let the user re-organize the order', () => {
    cy.get('.searchbtn').click();
    cy.get('.book').eq(2).click();
    cy.get('.listbtn').click();
    cy.get('h2').first().should('contain', 'Herman Melville\'s Moby-Dick');
    cy.get('.list-item').first()
      .focus().type(' ').type('{downArrow}').type(' ');
    cy.get('h2').first().should('contain', 'Moby Dick');
  });

  it('Should let the user put active books back on the list', () => {
    cy.get('.list-item').should('have.length', 1);
    cy.get('h3').should('contain', 'Harold Bloom');
    cy.get('.homebtn').click();
    cy.get('button').contains('Return to List').click();
    cy.get('.listbtn').click();
    cy.get('.list-item').should('have.length', 1);
    cy.get('h3').should('contain', 'Herman Melville');
  });
});
